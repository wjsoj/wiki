import os
import sys
import time
path = os.path.dirname(os.path.realpath(sys.argv[0]))+'\docs'
for root, dirs, files in os.walk(path):
    for file in files:
        if file[-2:]=='md' and root[-4:]!='docs':
            file_path = root+'\\'+file
            created_time = time.strftime('%Y-%m-%d %H:%M:%S',time.localtime(os.stat(file_path).st_ctime))
            modified_time = time.strftime('%Y-%m-%d %H:%M:%S',time.localtime(os.stat(file_path).st_mtime))
            with open(file_path,'r',encoding='utf-8') as f:
                content = f.read()
            if content[:3]=='---':
                content = '---\ncreated_time: '+created_time+'\nmodified_time: '+modified_time+'\n'+content[content.find('author'):]
            else:
                content = '---\ncreated_time: '+created_time+'\nmodified_time: '+modified_time+'\nauthor: WJS\ngithub: wjsoj\n---\n'+content
                with open(file_path,'w',encoding='utf-8') as f:
                    f.write(content)
                print(file_path[file_path.find('docs'):]+' Added')