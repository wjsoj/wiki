# 力学

##  前言

本文档不提供任何知识体系方面的内容，仅作为在已经学习力学课程过后的知识速查和补充。

参考书目：《力学（物理类）》  舒幼生，北京大学出版社

## 0. 数学补充知识

## 1. 质点运动学

### 1.1 极坐标

由作图通过观察$\vec{r}(t)$到$\vec{r}(t+\Delta t)$相应的基失的变化可以得到：

$$
\begin{align}
\mathrm{d}\vec{e_r} = \mathrm{d}\theta \cdot \vec{e_\theta} \\
\mathrm{d}\vec{e_\theta} = \mathrm{d }\theta \cdot \vec{e_\theta}
\end{align}\tag{1.1.1} \label{basic}
$$

据此可导出极坐标下的速度公式：

$$
\begin{align}
	\vec{v}= & \frac{\mathrm{d}\vec{r}}{\mathrm{d}t}=\frac{\mathrm{d}(r\vec{e_r})}{\mathrm{d}t}\\
	= & \frac{\mathrm{d}r}{\mathrm{d}t}\vec{e_r}+r\frac{\mathrm{d}\vec{e_r}}{\mathrm{d}t}\\
	= & \frac{\mathrm{d}r}{\mathrm{d}t}\vec{e_r}+r\frac{\mathrm{d}\theta}{\mathrm{d}t}\vec{e_\theta}\\
	= & \vec{v_r}+\vec{v_\theta}
\end{align}\tag{1.1.2}\label{velocity}
$$

分别称为径向速度和横向速度，据$\eqref{velocity}$可得到一个较为常用的轨道方程推导公式：

$$
\frac{\mathrm{d}r}{\mathrm{d}\theta}=\frac{rv_r}{v_\theta}
$$

同理可导出极坐标下的加速度公式：

$$
\begin{align}
\vec{a} = & \frac{\mathrm{d}\vec{v}}{\mathrm{d}t}=\frac{\mathrm{d}}{\mathrm{d}t}\left (\frac{\mathrm{d}r}{\mathrm{d}t}\vec{e_r}\right )+\frac{\mathrm{d}}{\mathrm{d}t}\left ( r\frac{\mathrm{d}\theta}{\mathrm{d}t}\vec{e_\theta} \right )\\
= & \left(\frac{\mathrm{d}^2r}{\mathrm{d}t^2}\vec{e_r}+\frac{\mathrm{d}r}{\mathrm{d}t}\frac{\mathrm{d}\vec{e_r}}{\mathrm{d}t}\right)+\left(\frac{\mathrm{d}r}{\mathrm{d}t} \frac{\mathrm{d}\theta}{\mathrm{d}t} \vec{e_\theta}+r\frac{\mathrm{d}^2\theta}{\mathrm{d}t^2}\vec{e_\theta}+r\frac{\mathrm{d}\theta}{\mathrm{d}t}\frac{\mathrm{d}\vec{e_\theta}}{\mathrm{d}t}\right)
\end{align}
$$

再由$\eqref{basic}$替换得到：

$$
\begin{multline}
\vec{a_r}=\left[
\frac{\mathrm{d}^2r}{\mathrm{d}t^2}
-r\left(\frac{\mathrm{d}\theta}{\mathrm{d}t}\right)^2
\right]
\vec{e_r}\\
\vec{a_\theta}=\left(
2\frac{\mathrm{d}r}{\mathrm{d}t}\frac{\mathrm{d}\theta}{\mathrm{d}t}
+r\frac{\mathrm{d}^2\theta}{\mathrm{d}t^2}
\right)
\vec{e_\theta}
\end{multline}\tag{1.1.3}\label{accelaration}
$$

### 1.2 曲率半径
