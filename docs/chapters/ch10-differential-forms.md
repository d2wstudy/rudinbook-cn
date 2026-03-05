# 第 10 章 微分形式的积分

积分可以在各种水平上进行研究. 可以说第 6 章是在实轴的子区间上, 对于比较“好”的函数阐述了积分理论. 在第 11 章中我们将会遇到积分理论的高度发展, 它可以用于很大的几类函数, 这些函数的定义域是较为随意的集, 不必是  $R^n$  的子集. 本章致力于积分理论中与欧氏空间的几何紧密相关的各方面, 诸如变量替换公式, 线积分, 微分形式的结构, 而微分形式是用来叙述和证明 Stokes 定理的, 它是与微积分基本定理相当的  $n$  维的定理.

## 积分

**10.1 定义** 设  $I^k$  是  $R^k$  中的  $k$ -方格, 它由合于

$$a_i \le x_i \le b_i \quad (i = 1, \dots, k), \quad (1)$$

的一切

$$\mathbf{x} = (x_1, \dots, x_k)$$

组成,  $I^j$  是  $R^j$  中的  $j$ -方格, 它由(1)中的前  $j$  个不等式来确定,  $f$  是  $I^k$  上的实连续函数.

令  $f = f_k$ , 而用下式定义  $I^{k-1}$  上的函数  $f_{k-1}$ :

$$f_{k-1}(x_1, \dots, x_{k-1}) = \int_{a_k}^{b_k} f_k(x_1, \dots, x_{k-1}, x_k) dx_k.$$

$f_k$  在  $I^k$  上的一致连续性表明  $f_{k-1}$  在  $I^{k-1}$  上连续. 因此, 我们能够重复应用这种手续, 得到  $I^j$  上的连续函数  $f_j$ , 而  $f_{j-1}$  是  $f_j$  关于  $x_j$  在  $[a_j, b_j]$  上的积分. 这样做  $k$  步以后, 就能得到一个数  $f_0$ , 我们就把这个数叫做  $f$  在  $I^k$  上的积分, 并写成下面这种形式:

$$\int_{I^k} f(x) dx \text{ 或 } \int_{I^k} f \quad (2)$$

先验地看来, 积分的这个定义与这  $k$  个积分的计算次序有关. 但是, 这只是表面上如此. 为证明这一点, 对于积分(2)引入一个暂时的记号  $L(f)$ , 而用  $L'(f)$  来记按另外某个次序求这  $k$  个积分的结果.

**10.2 定理** 对每个  $f \in \mathcal{C}(I^k)$ ,  $L(f) = L'(f)$ .

**证** 如果  $h(x) = h_1(x_1) \cdots h_k(x_k)$ ,  $h_i \in \mathcal{C}([a_i, b_i])$ , 那么

$$L(h) = \prod_{i=1}^{k} \int_{a_i}^{b_i} h_i(x_i) dx_i = L'(h)$$

设  $\mathcal{A}$  是这样的函数  $h$  的一切有限和所组成的集, 那么, 只要  $g \in \mathcal{A}$ , 就必定  $L(g) = L'(g)$ .  $\mathcal{A}$  又是  $I^k$  上函数构成的代数, Stone-Weierstrass 定理能用到这些

函数上.

置  $V = \prod_{i=1}^{k} (b_i - a_i)$ . 如果  $f \in \mathcal{C}(I^k)$ , 并且  $\varepsilon > 0$ , 必有  $g \in \mathcal{A}$ , 使  $\|f - g\| < \varepsilon/V$ , 这里  $\|f\|$  的定义是  $\max |f(x)| (x \in I^k)$ . 于是  $|L(f-g)| < \varepsilon$ ,  $|L'(f-g)| < \varepsilon$ , 又由

$$L(f) - L'(f) = L(f-g) + L'(g-f),$$

推知

$$|L(f) - L'(f)| < 2\varepsilon.$$

习题 2 与这里有联系.

**10.3 定义**  $R^k$  上一个(实或复)函数  $f$  的支集, 是使  $f(x) \neq 0$  的一切点的集的闭包. 如果  $f$  是带有紧支集的连续函数, 令  $I^k$  是含有  $f$  的支集的任一  $k$ -方格, 并且定义

$$\int_{R^k} f = \int_{I^k} f. \quad (3)$$

这样定义的积分显然与  $I^k$  的选择无关, 只要假定  $I^k$  包含  $f$  的支集.

现在试图把在  $R^k$  上的积分的定义, 扩充到带有紧支集的连续函数(在某种意义下)的极限函数上去. 我们不去讨论在什么条件下能这样推广; 正当地解决这问题的地方是 Lebesgue 积分. 目前, 只描述一个在 Stokes 定理中要用到的极简单的例子.

**10.4 例** 令  $Q^k$  是由  $R^k$  中的合于  $x_1 + \dots + x_k \le 1$  并且  $x_i > 0 (i=1, \dots, k)$  的一切点  $x = (x_1, \dots, x_k)$  组成的  $k$ -单形. 例如,  $k=3$  时,  $Q^k$  是顶点在  $\mathbf{0}$ ,  $e_1$ ,  $e_2$ ,  $e_3$  的四面体. 如果  $f \in \mathcal{C}(Q^k)$ , 就令  $f(x)$  在  $Q^k$  之外为 0 来把  $f$  扩充成  $I^k$  上的函数, 并且定义

$$\int_{Q^k} f = \int_{I^k} f. \quad (4)$$

这里  $I^k$  是由

$$0 \le x_i \le 1 \quad (1 \le i \le k).$$

所确定的“单位立方体”.

因为  $f$  可能在  $I^k$  上不连续, 所以(4)式右端的积分的存在性, 必需证明. 我们还希望证明这个积分与积出其中  $k$  个单积分的次序无关.

为了做到这一点, 假定  $0 < \delta < 1$ . 置

$$\varphi(t) = \begin{cases} 1 & (t \le 1 - \delta) \\ \frac{(1-t)}{\delta} & (1 - \delta < t \le 1) \\ 0 & (1 < t) \end{cases} \quad (5)$$

而定义

$$F(\mathbf{x}) = \varphi(x_1 + \cdots + x_k) f(\mathbf{x}) \quad (\mathbf{x} \in I^k) \quad (6)$$

于是,  $F \in \mathcal{C}(I^k)$ .

置  $\mathbf{y} = (x_1, \dots, x_{k-1})$ ,  $\mathbf{x} = (\mathbf{y}, x_k)$ . 对于每个  $\mathbf{y} \in I^{k-1}$  来说, 能使  $F(\mathbf{y}, x_k) \neq f(\mathbf{y}, x_k)$  的一切  $x_k$  的集, 或者是空集, 或者是长度不超过  $\delta$  的开区间. 因为  $0 \le \varphi \le 1$ , 所以

$$|F_{k-1}(\mathbf{y}) - f_{k-1}(\mathbf{y})| \le \delta \|f\| \quad (\mathbf{y} \in I^{k-1}), \quad (7)$$

这里  $\|f\|$  的意义与定理 10.2 的证明中所说的相同, 而  $F_{k-1}$  与  $f_{k-1}$  都是定义 10.1 中那样的.

当  $\delta \to 0$  时, (7) 式表示  $f_{k-1}$  为连续函数序列的一致极限. 所以  $f_{k-1} \in \mathcal{C}(I^{k-1})$ , 而再进一步积分没有什么问题了.

这证明了积分 (4) 是存在的. 此外, (7) 式说明

$$\left| \int_{I^k} F(\mathbf{x}) d\mathbf{x} - \int_{I^k} f(\mathbf{x}) d\mathbf{x} \right| \le \delta \|f\|. \quad (8)$$

注意, 不论这  $k$  个单积分是按什么次序进行的, (8) 式总是正确的. 因为  $F \in \mathcal{C}(I^k)$ , 不论怎样变更积分次序,  $\int F$  不变. 因而 (8) 式说明  $\int f$  也是这样.

这就完成了证明.

下一个目标是定理 10.9 中所说的变量替换公式. 为了使证明容易懂, 先来讨论所谓本原映射及单位的分割. 本原映射将使我们对于带有可逆导数的  $\mathcal{C}^1$  映射的局部的性状有个清晰的图景, 而单位的分割是使我们能在全局中利用局部信息的极为有用的方法.

## 本原映射

**10.5 定义** 设  $G$  把开集  $E \subset R^n$  映入  $R^n$  内, 又设有正整数  $m$  及实函数  $g$  (定义域是  $E$ ), 使

$$G(\mathbf{x}) = \sum_{i \neq m} x_i \mathbf{e}_i + g(\mathbf{x}) \mathbf{e}_m \quad (\mathbf{x} \in E), \quad (9)$$

就把  $G$  叫做本原映射. 于是本原映射至多改变一个坐标. 注意, (9) 式也可写成

$$G(\mathbf{x}) = \mathbf{x} + [g(\mathbf{x}) - x_m] \mathbf{e}_m \quad (10)$$

的形状.

如果  $g$  在某点  $\mathbf{a} \in E$  可微, 那么  $G$  也是这样. 算子  $G'(\mathbf{a})$  的矩阵  $[\alpha_{ij}]$  的第  $m$  行是

$$(D_1 g)(\mathbf{a}), \dots, (D_m g)(\mathbf{a}), \dots, (D_n g)(\mathbf{a}). \quad (11)$$

当  $j \neq m$  时, 我们有  $a_{ij} = 1$ , 而当  $i \neq j$  时,  $a_{ij} = 0$ . 于是  $G$  在  $a$  处的函数行列式就是

$$J_G(a) = \det[G'(a)] = (D_m g)(a), \quad (12)$$

我们知道(根据定理 9.36), 当且仅当  $(D_m g)(a) \neq 0$  时,  $G'(a)$  可逆.

**10.6 定义** 在  $R^n$  上, 只把标准基的某一对成员交换, 而其他成员不变的线性算子  $B$  叫做对换.

例如, 在  $R^4$  上, 交换  $e_2$  和  $e_4$  的对换  $B$  是

$$B(x_1 e_1 + x_2 e_2 + x_3 e_3 + x_4 e_4) = x_1 e_1 + x_2 e_4 + x_3 e_3 + x_4 e_2. \quad (13)$$

或者写成

$$B(x_1 e_1 + x_2 e_2 + x_3 e_3 + x_4 e_4) = x_1 e_1 + x_4 e_2 + x_3 e_3 + x_2 e_4. \quad (14)$$

因此,  $B$  又能看成是交换某两个坐标, 而不看成是交换两个基向量.

在后面的证明中, 我们要用  $R^n$  中的射影  $P_0, \dots, P_n$ , 它们的定义是  $P_0 x = 0$ , 而当  $1 \le m \le n$  时

$$P_m x = x_1 e_1 + \dots + x_m e_m. \quad (15)$$

于是射影  $P_m$  的值域和零空间分别由  $\{e_1, \dots, e_m\}$  和  $\{e_{m+1}, \dots, e_n\}$  生成.

**10.7 定理** 设  $F$  是把开集  $E \subset R^n$  映入  $R^n$  内的  $C^1$  映射,  $0 \in E$ ,  $F(0) = 0$ ,  $F'(0)$  可逆.

那么, 在  $R^n$  中有  $0$  点的一个邻域, 在其中

$$F(x) = B_1 \dots B_{n-1} G_n \circ \dots \circ G_1(x) \quad (16)$$

这个表示法能成立.

在(16)式中, 每个  $G_i$  是在  $0$  的某邻域中的本原  $C^1$  映射;  $G_i(0) = 0$ ,  $G_i'(0)$  可逆, 而每个  $B_i$  或者是个对换, 或者是恒等算子.

简短地说, (16)把  $F$  局部地表成本原映射与对换的复合.

证 令  $F = F_1$ . 假设  $1 \le m \le n-1$  而做下面的归纳假定(这假定当  $m=1$  时显然成立).

$V_m$  是  $0$  的邻域,  $F_m \in C^1(V_m)$ ,  $F_m(0) = 0$ ,  $F_m'(0)$  可逆, 并且

$$P_{m-1} F_m(x) = P_{m-1} x \quad (x \in V_m). \quad (17)$$

据(17)即有

$$F_m(x) = P_{m-1} x + \sum_{i=m}^{n} a_i(x) e_i, \quad (18)$$

这里  $a_m, \dots, a_n$  是  $V_m$  中的实  $C^1$  函数. 因此,

$$\mathbf{F}'_m(\mathbf{0})\mathbf{e}_m = \sum_{i=m}^{n} (D_m \alpha_i)(\mathbf{0})\mathbf{e}_i. \quad (19)$$

因为  $\mathbf{F}'_m(\mathbf{0})$  可逆, (19) 式左端不是  $\mathbf{0}$ , 所以有一个  $k$  合于  $m \le k \le n$ , 使  $(D_m \alpha_k)(\mathbf{0}) \neq 0$ .

令  $B_m$  是交换  $m$  与这个  $k$  的对换 (如果  $k=m$ , 那么  $B_m$  就是恒等算子) 并定义

$$\mathbf{G}_m(\mathbf{x}) = \mathbf{x} + [\alpha_k(\mathbf{x}) - x_m]\mathbf{e}_m \quad (\mathbf{x} \in V_m). \quad (20)$$

于是  $\mathbf{G}_m \in \mathcal{C}'(V_m)$ ,  $\mathbf{G}_m$  是本原的, 并且由于  $(D_m \alpha_k)(\mathbf{0}) \neq 0$ , 所以  $\mathbf{G}'_m(\mathbf{0})$  可逆.

因此, 反函数定理说明, 存在着包含  $\mathbf{0}$  的开集  $U_m \subset V_m$ , 使得  $\mathbf{G}_m$  是把  $U_m$  映满  $\mathbf{0}$  的某邻域  $V_{m+1}$  的一一映射, 在  $V_{m+1}$  中  $\mathbf{G}_m^{-1}$  连续可微. 按

$$\mathbf{F}_{m+1}(\mathbf{y}) = B_m \mathbf{F}_m \circ \mathbf{G}_m^{-1}(\mathbf{y}) \quad (\mathbf{y} \in V_{m+1}) \quad (21)$$

来定义  $\mathbf{F}_{m+1}$ .

于是,  $\mathbf{F}_{m+1} \in \mathcal{C}'(V_{m+1})$ ,  $\mathbf{F}_{m+1}(\mathbf{0}) = \mathbf{0}$  并且 (由链导法)  $\mathbf{F}'_{m+1}(\mathbf{0})$  可逆. 又, 当  $\mathbf{x} \in U_m$  时,

$$\begin{aligned} P_m \mathbf{F}_{m+1}(\mathbf{G}_m(\mathbf{x})) &= P_m B_m \mathbf{F}_m(\mathbf{x}) \\ &= P_m [P_{m-1} \mathbf{x} + \alpha_k(\mathbf{x})\mathbf{e}_m + \dots] \\ &= P_{m-1} \mathbf{x} + \alpha_k(\mathbf{x})\mathbf{e}_m \\ &= P_m \mathbf{G}_m(\mathbf{x}) \end{aligned} \quad (22)$$

因此,

$$P_m \mathbf{F}_{m+1}(\mathbf{y}) = P_m \mathbf{y} \quad (\mathbf{y} \in V_{m+1}) \quad (23)$$

所以用  $m+1$  代替  $m$  时我们的归纳假定仍然成立.

[在 (22) 中, 先用 (21) 式, 然后用 (18) 式及  $B_m$  的定义, 再用  $P_m$  的定义, 最后用 (20)].

因  $B_m B_m = I$ , (21) 式由于  $\mathbf{y} = \mathbf{G}_m(\mathbf{x})$  而等价于

$$\mathbf{F}_m(\mathbf{x}) = B_m \mathbf{F}_{m+1}(\mathbf{G}_m(\mathbf{x})) \quad (\mathbf{x} \in U_m). \quad (24)$$

如果取  $m=1, \dots, n-1$ , 用这公式相继推演, 就能在  $\mathbf{0}$  的某个邻域内得到

$$\begin{aligned} \mathbf{F} &= \mathbf{F}_1 = B_1 \mathbf{F}_2 \circ \mathbf{G}_1 \\ &= B_1 B_2 \mathbf{F}_3 \circ \mathbf{G}_2 \circ \mathbf{G}_1 = \dots \\ &= B_1 \dots B_{n-1} \mathbf{F}_n \circ \mathbf{G}_{n-1} \circ \dots \circ \mathbf{G}_1 \end{aligned}$$

据 (18) 式,  $\mathbf{F}_n$  是本原映射. 定理证完.

## 单位的分割

**10.8 定理** 设  $K$  是  $R^n$  的紧子集,  $\{V_\alpha\}$  是  $K$  的开覆盖. 那么, 必有函数

$\psi_1, \dots, \psi_s \in \mathcal{C}(R^n)$  合于

(a)  $0 \le \psi_i \le 1, 1 \le i \le s$ ;

(b) 每个  $\psi_i$  的支集属于某个  $V_\alpha$ , 并且

(c) 对每个  $x \in K$  来说,  $\psi_1(x) + \dots + \psi_s(x) = 1$ .

由(c)的缘故,  $\{\psi_i\}$  叫做单位的分割, 而时常把(b)说成  $\{\psi_i\}$  是覆盖  $\{V_\alpha\}$  的从属函数组.

**推论** 如果  $f \in \mathcal{C}(R^n)$  并且  $f$  的支集位于  $K$  内, 那么

$$f = \sum_{i=1}^{s} \psi_i f. \quad (25)$$

每个  $\psi_i f$  的支集在某个  $V_\alpha$  中.

(25) 的要点是它把  $f$  表成了有“小”支集的连续函数  $\psi_i f$  之和.

**证** 对每个  $x \in K$  联系上一个指标  $\alpha(x)$ , 使  $x \in V_{\alpha(x)}$ . 于是存在着中心在  $x$  的开球  $B(x)$  及  $W(x)$ , 使

$$\overline{B(x)} \subset W(x) \subset \overline{W(x)} \subset V_{\alpha(x)}. \quad (26)$$

因为  $K$  紧, 所以在  $K$  中存在着点  $x_1, \dots, x_s$ , 使得

$$K \subset B(x_1) \cup \dots \cup B(x_s). \quad (27)$$

由(26), 存在函数  $\varphi_1, \dots, \varphi_s \in \mathcal{C}(R^n)$ , 使得在  $B(x_i)$  上  $\varphi_i(x) = 1$ , 而在  $W(x_i)$  之外  $\varphi_i(x) = 0$ , 并且在  $R^n$  上  $0 \le \varphi_i(x) \le 1$ . 定义  $\psi_1 = \varphi_1$ , 而当  $i = 1, \dots, s-1$  时定义

$$\psi_{i+1} = (1 - \varphi_1) \dots (1 - \varphi_i) \varphi_{i+1}. \quad (28)$$

性质(a)及(b)是显然的. 当  $i=1$  时, 关系

$$\psi_1 + \dots + \psi_s = 1 - (1 - \varphi_1) \dots (1 - \varphi_s) \quad (29)$$

当然对. 如果(29)式对某个  $i < s$  成立, 那么, 把(28)式加到(29)式上, 得到的就是用  $i+1$  代替  $i$  时的(29)式. 因此

$$\sum_{i=1}^{s} \psi_i(x) = 1 - \prod_{i=1}^{s} [1 - \varphi_i(x)] \quad (x \in R^n). \quad (30)$$

如果  $x \in K$ , 那么  $x$  属于某个  $B(x_i)$ , 因此  $\varphi_i(x) = 1$ , 而(30)中的乘积是 0. 这证明了(c).

## 变量代换

现在我们能够叙述在重积分中变量代换的作用了. 为了简单起见, 我们还是仅限于讨论具有紧支集的连续函数; 虽然这对于许多应用来说是限制的太多了. 习题 19 至 23 就是限制太多的例证.

**10.9 定理** 设  $T$  是把开集  $E \subset R^k$  映入  $R^k$  内的 1-1' 映射, 并且对于一切  $x \in E$ ,  $J_T(x) \neq 0$ . 如果  $f$  是  $R^k$  上的连续函数, 它的支集是紧的并且位于  $T(E)$  内, 那么

$$\int_{R^k} f(y) dy = \int_{R^k} f(T(x)) |J_T(x)| dx. \quad (31)$$

回想一下,  $J_T$  是  $T$  的函数行列式. 根据反函数定理, 由题设  $J_T(x) \neq 0$  推知  $T^{-1}$  是  $T(E)$  上的连续函数, 这就保证了 (31) 式右端的被积函数在  $E$  中取得紧支集 (定理 4.14).

(31) 式中  $J_T(x)$  的绝对值的出现, 要做些解释. 就  $k=1$  的情况而论, 假设  $T$  是把  $R^1$  映满  $R^1$  的 1-1' 映射. 于是  $J_T(x) = T'(x)$ ; 如果  $T$  是递增的, 那么, 由定理 6.19 及 6.17 对于具有紧支集的一切连续函数  $f$ , 有

$$\int_{R^1} f(y) dy = \int_{R^1} f(T(x)) T'(x) dx, \quad (32)$$

但是如果  $T$  递降, 那么  $T'(x) < 0$ ; 这时如果  $f$  在它的支集内部是正的, 那么 (32) 式的左端是正的而右端是负的. 如果在 (32) 中把  $T'$  换成  $|T'|$ , 才会得到正确的等式.

问题在于, 我们所考虑的积分是函数在  $R^k$  的一个子集上的积分, 而我们却没有给这些子集配置方向或定向. 等到在曲面上对微分形式积分时, 将采用其他的观点.

**证** 由刚作的评注得知, 如果  $T$  是本原 '映射 (见定义 10.5), 那么 (31) 式正确, 而定理 10.2 说明, 当  $T$  是只交换两个坐标的线性映射时, (31) 式正确.

如果定理对于变换  $P, Q$  正确, 并且  $S(x) = P(Q(x))$ , 那么

$$\begin{aligned} \int f(z) dz &= \int f(P(y)) |J_P(y)| dy \\ &= \int f(P(Q(x))) |J_P(Q(x))| |J_Q(x)| dx \\ &= \int f(S(x)) |J_S(x)| dx, \end{aligned}$$

这因为根据行列式的乘法定理及链导法, 可以得到

$$\begin{aligned} J_P(Q(x)) J_Q(x) &= \det P'(Q(x)) \det Q'(x) \\ &= \det P'(Q(x)) Q'(x) \\ &= \det S'(x) = J_S(x). \end{aligned}$$

所以对于  $S$  来说, 定理也正确.

每个点  $a \in E$  有邻域  $U \subset E$ , 在  $U$  中

$$T(x) = T(a) + B_1 \cdots B_{k-1} G_k \cdot G_{k-1} \circ \cdots \circ G_1 (x - a), \quad (33)$$

这里  $G_i$  与  $B_i$  都是像定理 10.7 中那样的. 令  $V = T(U)$ , 那么就当  $f$  的支集在  $V$  中时, (31) 式成立. 所以

每个点  $y \in T(E)$  必在这样的开集  $V_y \subset T(E)$  里, 使得对于支集在  $V_y$  中的一切连续函数  $f$ , (31) 式都成立.

现在令  $f$  是具有紧支集  $K \subset T(E)$  的连续函数. 因为  $\{V_y\}$  覆盖了  $K$ , 定理 10.8 的推论说明  $f = \sum \phi_i f$ , 这里每个  $\phi_i$  连续, 并且每个  $\phi_i$  的支集在某个  $V_y$  内, 这样, 对于每个  $\phi_i f$  来说, (31) 式成立, 因此对于它们的和  $f$  来说也成立.

## 微分形式

现在我们按排一种布局, 叙述  $n$  维的微积分基本定理时需要它. 这个定理通常叫做 Stokes 定理. Stokes 定理的原始形式, 起因于向量分析对电磁学的应用, 而且是用向量场的环流来叙述的. Green 定理及散度定理是另外的特殊情形. 这些论题, 在本章之末有简短的讨论.

Stokes 定理的稀有特色, 在于它只有一个难点, 那就是叙述这个定理时, 必需用到一些定义的精心制做的结构. 这些定义涉及微分形式, 它们的导数, 边界以及指向. 一旦弄清楚了这些定义, 定理的叙述就非常简明, 它的证明也困难很少.

直到现在, 我们只讨论了开集上定义的多变量函数的导数. 这样做是为了避免在边界点上所遇到的困难. 但是现在在紧集上讨论可微函数才方便. 所以我们采用下面的约定:

说  $f$  是紧集  $D \subset R^k$  到  $R^n$  内的  $C^1$  映射(或  $C^r$  映射), 就表示存在着开集  $W \subset R^k$  到  $R^n$  的  $C^1$  映射(或  $C^r$  映射)  $g$ , 使得  $D \subset W$  并且当  $x \in D$  时  $g(x) = f(x)$ .

**10.10 定义** 设  $E$  是  $R^n$  中的开集.  $E$  中的  $k$ -曲面是从紧集  $D \subset R^k$  到  $E^n$  内的  $C^1$  映射  $\Phi$ .

$D$  叫  $\Phi$  的参数域.  $D$  中的点记成  $u = (u_1, \dots, u_k)$ .

我们限定  $D$  或为  $k$ -方格, 或为例题 10.4 中所说的  $k$ -单形  $Q^k$  这种简单情况. 其中理由是我们以后要在  $D$  上积分, 但是还没有讨论在  $R^k$  的更复杂的子集上的积分. 我们将看到, 对  $D$  的这个限制(今后不再每次明说), 在微分形式的最后理论中, 不会失去重大的一般性.

我们强调,  $E$  中的  $k$ -曲面的定义是到  $E$  中的映射, 而不是  $E$  的子集. 这与我们早先对于曲线的定义(定义 6.26)是一致的. 其实, 1-曲面刚好与连续可微曲线是一样的.

**10.11 定义** 设  $E$  是  $R^n$  中的开集.  $E$  中的 ( $k \ge 1$ ) 次微分形式(简称为  $E$  中的  $k$ -形式)是一个用和式

$$\omega = \sum a_{i_1 \cdots i_k}(\mathbf{x}) dx_{i_1} \wedge \cdots \wedge dx_{i_k} \quad (34)$$

(指标  $i_1, \dots, i_k$  各自从 1 到  $n$  独立变化)作符号表示的函数, 它给  $E$  中的每个  $k$ -曲面  $\Phi$ , 按照规则

$$\int_{\Phi} \omega = \int_{D} \sum a_{i_1 \cdots i_k}(\Phi(\mathbf{u})) \frac{\partial(x_{i_1}, \dots, x_{i_k})}{\partial(u_1, \dots, u_k)} d\mathbf{u}, \quad (35)$$

规定一个数  $\omega(\Phi) = \int_{\Phi} \omega$ , 这里的  $D$  是  $\Phi$  的参数域.

假定  $a_{i_1 \cdots i_k}$  都是  $E$  内的实连续函数. 如果  $\phi_1, \dots, \phi_n$  是  $\Phi$  的分量, (35) 中的函数行列式是由映射

$$(u_1, \dots, u_k) \to (\phi_{i_1}(\mathbf{u}), \dots, \phi_{i_k}(\mathbf{u}))$$

所确定的.

注意, 像在定义 10.1 中(或例 10.4 中)所规定的那样, (35)式右端是在  $D$  上的积分, 而(35)式是符号  $\int_{\Phi} \omega$  的定义.

如果(34)式中的函数  $a_{i_1 \cdots i_k}$  都属于  $\mathcal{C}'$  或  $\mathcal{C}''$ , 那么就说  $k$ -形式  $\omega$  属于  $\mathcal{C}'$  类或  $\mathcal{C}''$  类.

$E$  中的 0-形式规定是  $E$  中的一个连续函数.

**10.12 例题**

(a) 令  $\gamma$  是  $R^3$  中的 1-曲面( $\mathcal{C}'$  类曲线), 参数域是  $[0, 1]$ . 用  $(x, y, z)$  代替  $(x_1, x_2, x_3)$ , 并且置

$$\omega = x dy + y dx.$$

那么,

$$\begin{aligned} \int_{\gamma} \omega &= \int_{0}^{1} [\gamma_1(t) \gamma'_2(t) + \gamma_2(t) \gamma'_1(t)] dt \\ &= \gamma_1(1) \gamma_2(1) - \gamma_1(0) \gamma_2(0). \end{aligned}$$

注意, 在这个例子里,  $\int_{\gamma} \omega$  只依赖于  $\gamma$  的始点  $\gamma(0)$  与终点  $\gamma(1)$ . 特别地, 如果  $\gamma$  是闭曲线, 那么  $\int_{\gamma} \omega = 0$  (下面就要见到, 这对任何恰当 1-形式  $\omega$  都是对的).

1-形式的积分时常叫做线积分.

(b) 固定  $a > 0$ ,  $b > 0$ , 定义

$$\gamma(t) = (a \cos t, b \sin t) \quad (0 \le t \le 2\pi),$$

于是  $\gamma$  是  $R^2$  中的闭曲线(它的值域是一椭圆). 于是

$$\int_{\gamma} x dy = \int_{0}^{2\pi} ab \cos^2 t dt = \pi ab,$$

然而

$$\int_{\gamma} y dx = - \int_{0}^{2\pi} ab \sin^2 t dt = -\pi ab.$$

注意,  $\int_{\gamma} x dy$  是  $\gamma$  所界区域的面积. 这是 Green 定理的特殊情形.

(c) 设  $D$  是由

$$0 \le r \le 1, \quad 0 \le \theta \le \pi, \quad 0 \le \varphi \le 2\pi$$

确定的 3-方格. 定义  $\Phi(r, \theta, \varphi) = (x, y, z)$ , 这里

$$x = r \sin \theta \cos \varphi,$$

$$y = r \sin \theta \sin \varphi,$$

$$z = r \cos \theta$$

于是

$$J_{\Phi}(r, \theta, \varphi) = \frac{\partial(x, y, z)}{\partial(r, \theta, \varphi)} = r^2 \sin \theta.$$

因此

$$\int_{\Phi} dx \wedge dy \wedge dz = \int_{D} J_{\Phi} = \frac{4\pi}{3}. \quad (36)$$

注意, 这  $\Phi$  把  $D$  映满  $R^3$  的闭单位球, 在  $D$  的内部, 这映射是 1-1 的. (但是有些边界点要被  $\Phi$  等同起来), 积分 (36) 等于  $\Phi(D)$  的体积.

**10.13 初等性质** 设  $\omega, \omega_1, \omega_2$  是  $E$  中的  $k$ -形式. 当且仅当对于  $E$  中的每个  $k$ -曲面  $\Phi$ ,  $\omega_1(\Phi) = \omega_2(\Phi)$  时, 就写成  $\omega_1 = \omega_2$ . 特别地,  $\omega = 0$  就表示对于  $E$  中的每个  $k$ -曲面  $\Phi$ ,  $\omega(\Phi) = 0$ . 设  $c$  是实数, 那么  $c\omega$  是由

$$\int_{\Phi} c\omega = c \int_{\Phi} \omega \quad (37)$$

确定的  $k$ -形式, 而  $\omega = \omega_1 + \omega_2$  表示对于  $E$  中的每个  $k$ -曲面  $\Phi$ ,

$$\int_{\Phi} \omega = \int_{\Phi} \omega_1 + \int_{\Phi} \omega_2 \quad (38)$$

作为 (37) 式的特殊情况, 注意,  $-\omega$  是由

$$\int_{\Phi} (-\omega) = - \int_{\Phi} d\omega \quad (39)$$

确定的  $k$ -形式.

考虑  $k$ -形式

$$\omega = a(x) dx_{i_1} \wedge \cdots \wedge dx_{i_k}, \quad (40)$$

而令  $\bar{\omega}$  是对调(40)式中的某两个足码所得到的  $k$  形式. 如果把(35)式及(39)式与“行列式的两列交换, 则行列式变号”这件事联系起来, 就知道

$$\bar{\omega} = -\omega. \quad (41)$$

作为它的特殊情况, 注意, 对一切  $i$  及  $j$  来说, 反换位关系

$$dx_i \wedge dx_j = - dx_j \wedge dx_i \quad (42)$$

成立. 特别的,

$$dx_i \wedge dx_i = 0 \quad (i = 1, \dots, n). \quad (43)$$

再把(40)式广泛地说一下, 假定某个  $r \neq s$  而  $i_r = i_s$ . 如果交换了这两个下标, 就有  $\bar{\omega} = \omega$ , 因此据(41)式, 必然  $\omega = 0$ .

换句话说, 如果  $\omega$  是由(40)式表出的, 那么,  $\omega = 0$ , 除非是下标全不相同.

如果  $\omega$  是像(34)中那样, 有重复下标的加项就能略去, 而不影响  $\omega$ .

因此, 如果  $k > n$ , 那么, 在  $R^n$  的任何开子集中, 就只有 0 是  $k$  形式.

(42)式所表示的反换位性, 就是为什么在研究微分形式时, 要格外注意减号的根由.

**10.14 基本  $k$ -形式** 设  $i_1, \dots, i_k$  都是正整数,  $1 \le i_1 < i_2 < \cdots < i_k \le n$ , 又设  $I$  是  $k$  元有序组(简称  $k$  序组)  $\{i_1, \dots, i_k\}$ , 那么, 我们称  $I$  为递增  $k$ -指标, 并采用简短的记法

$$dx_I = dx_{i_1} \wedge \cdots \wedge dx_{i_k}. \quad (44)$$

这些形式  $dx_I$  叫做  $R^n$  中的基本  $k$ -形式.

不难证明恰好存在着  $n! / k! (n-k)!$  个基本  $k$  形式. 然而我们用不着这个事实.

更为重要的是, 每个  $k$  形式能用基本  $k$  形式来表示. 要想明白这一点, 注意每个不同整数的  $k$  元组  $\{j_1, \dots, j_k\}$ , 经过有限次两两对换, 能变成一个递增  $k$  指标  $I$ ; 像在 10.13 段中已知的那样, 每次对换等于乘上个  $-1$ ; 因之,

$$dx_{j_1} \wedge \cdots \wedge dx_{j_k} = \varepsilon(j_1, \dots, j_k) dx_I, \quad (45)$$

这里  $\varepsilon(j_1, \dots, j_k)$  是 1 或  $-1$ , 全看所需对换的次数而定. 其实, 极易知道

$$\varepsilon(j_1, \dots, j_k) = s(j_1, \dots, j_k), \quad (46)$$

这里  $s$  的意义见定义 9.33.

例如

$$dx_1 \wedge dx_5 \wedge dx_3 \wedge dx_2 = - dx_1 \wedge dx_2 \wedge dx_3 \wedge dx_5$$

而

$$dx_4 \wedge dx_2 \wedge dx_3 = dx_2 \wedge dx_3 \wedge dx_4.$$

如果(34)式中的每个  $k$ -元组变成了递增  $k$ -指标, 那么就得到  $\omega$  的标准表示:

$$\omega = \sum_I b_I(x) dx_I \quad (47)$$

(47)中的和号遍历一切递增  $k$ -指标  $I$ . [当然, 每个递增  $k$ -指标是从许多(精确地说是  $k!$  个) $k$ -元组得来的. 这样, (47)中的每个  $b_I$  可能是(34)中所遇到的好几个系数的和].

例如,

$$x_1 dx_2 \wedge dx_1 - x_2 dx_3 \wedge dx_2 + x_3 dx_2 \wedge dx_3 + dx_1 \wedge dx_2$$

是  $R^3$  中的 2-形式, 它的标准表示是

$$(1 - x_1) dx_1 \wedge dx_2 + (x_2 + x_3) dx_2 \wedge dx_3.$$

下面的惟一性定理, 是引入  $k$  形式的标准表示的主要来由之一.

**10.15 定理** 设

$$\omega = \sum_I b_I(x) dx_I \quad (48)$$

是开集  $E \subset R^n$  中的  $k$ -形式  $\omega$  的标准表示. 如果在  $E$  中  $\omega = 0$ , 那么, 对于每个递增  $k$ -指标  $I$  以及每个  $x \in E$ ,  $b_I(x) = 0$

注意, 对于像(34)式那样的和式来说, 这种类似的命题不成立. 因为, 例如

$$dx_1 \wedge dx_2 + dx_2 \wedge dx_1 = 0.$$

证 我们假定有某个  $v \in E$  及某个递增  $k$ -指标  $J = \{j_1, \dots, j_k\}$ , 使  $b_J(v) > 0$ , 来达到矛盾. 因为  $b_J$  连续, 所以存在着  $h > 0$ , 它保证坐标满足  $|x_i - v_i| \le h$  的一切  $x \in R^n$  使  $b_J(x) > 0$ . 令  $D$  是  $R^k$  中的这样一个  $k$ -方格: 当且仅当  $|u_r| \le h$  (对  $r=1, \dots, k$ ) 时,  $u \in D$ . 定义

$$\Phi(u) = v + \sum_{r=1}^{k} u_r e_{j_r} \quad (u \in D). \quad (49)$$

于是  $\Phi$  是  $E$  中的  $k$ -曲面, 它的参数域是  $D$ , 并且对于每个  $u \in D$  来说,  $b_J(\Phi(u)) > 0$ .

我们断言

$$\int_{\Phi} \omega = \int_D b_J(\Phi(u)) du. \quad (50)$$

因为(50)式的右端是正的, 因此  $\omega(\Phi) \neq 0$ . 所以(50)式产生了我们所要的矛盾来.

要证明(50)式, 把(35)式用于(48)式, 或者更明确点, 计算(35)式中的函数行列式. 由(49)式得

$$\frac{\partial(x_{j_1}, \dots, x_{j_k})}{\partial(u_1, \dots, u_k)} = 1.$$

对于其余的递增  $k$ -指标  $I \neq J$  来说, 函数行列式为 0, 因为它至少有一列元素都是零.

### 10.16 基本 $k$ -形式的积 设

$$I = \{i_1, \dots, i_p\}, \quad J = \{j_1, \dots, j_q\}. \quad (51)$$

这里  $1 \le i_1 < \dots < i_p \le n$  而  $1 \le j_1 < \dots < j_q \le n$ .  $R^n$  中的与  $dx_I$ ,  $dx_J$  对应的基本形式的积, 是  $R^n$  中的  $(p+q)$ -形式, 用符号  $dx_I \wedge dx_J$  来记它, 而定义为

$$dx_I \wedge dx_J = dx_{i_1} \wedge \dots \wedge dx_{i_p} \wedge dx_{j_1} \wedge \dots \wedge dx_{j_q}. \quad (52)$$

如果  $I$  与  $J$  有公共元素, 那么, 10.13 段的讨论说明  $dx_I \wedge dx_J = 0$ .

如果  $I$  与  $J$  没有公共元素, 把  $I \cup J$  的成员按递增的顺序排列, 而将得到的  $(p+q)$ -指标写作  $[I, J]$ . 那么  $dx_{[I,J]}$  是基本  $(p+q)$ -形式. 我们断定

$$dx_I \wedge dx_J = (-1)^\alpha dx_{[I,J]}, \quad (53)$$

这里  $\alpha$  是负差数  $j_t - i_t$  的个数. (于是正差数的个数是  $pq - \alpha$ ).

今证(53)式, 对于诸数

$$i_1, \dots, i_p; \quad j_1, \dots, j_q \quad (54)$$

施行下面的运算. 把  $i_p$  一步一步地往右移, 直到  $i_p$  小于它的右邻为止. 右移的步数就是使  $i_p < j_t$  的下标  $t$  的个数. (注意, 显然也可能是 0 步). 然后对  $i_{p-1}, \dots, i_1$  也这样做. 右移的总步数是  $\alpha$ . 得到的最终排列是  $[I, J]$ . 每当(52)式右端施行一步,  $dx_I \wedge dx_J$  就乘上一个  $-1$ . 因此, (53)式成立.

注意, (53)式右端是  $dx_I \wedge dx_J$  的标准表示.

其次, 设  $K = \{k_1, \dots, k_r\}$  是  $\{1, \dots, n\}$  中的递增  $r$ -指标. 今用(53)式证明

$$(dx_I \wedge dx_J) \wedge dx_K = dx_I \wedge (dx_J \wedge dx_K). \quad (55)$$

如果  $I, J, K$  中任何两个有公共元素, 那么, (55)式两边都是 0. 所以它们相等.

因此, 我们假定  $I, J, K$  两两不交. 设从它们的并得到的递增  $(p+q+r)$ -指标记作  $[I, J, K]$ . 用(53)中给序对  $(I, J)$  联系上  $\alpha$  的方法, 对于序对  $(J, K)$  联

系  $\beta$ , 对于  $(I, K)$  联系  $\gamma$ . 那么, 把 (53) 式应用两次, 得知 (55) 式的左端就是

$$(-1)^\alpha dx_{[I,J]} \wedge dx_K = (-1)^\alpha (-1)^{\beta+\gamma} dx_{[I,J,K]}$$

而 (55) 式的右端是

$$(-1)^\beta dx_I \wedge dx_{[J,K]} = (-1)^\beta (-1)^{\alpha+\gamma} dx_{[I,J,K]}$$

因此, (55) 式正确.

**10.17 乘法** 设  $\omega$  与  $\lambda$  分别是某开集  $E \subset \mathbb{R}^n$  中的  $p$ -形式与  $q$ -形式, 它们的  
标准表示为

$$\omega = \sum_I b_I(x) dx_I, \quad \lambda = \sum_J c_J(x) dx_J, \quad (56)$$

其中  $I$  遍历从集  $\{1, \dots, n\}$  取得的一切递增  $p$  指标, 而  $J$  遍历从集  $\{1, \dots, n\}$  取得的一切递增  $q$  指标.

它们的乘积记作  $\omega \wedge \lambda$ , 而定义为

$$\omega \wedge \lambda = \sum_{I,J} b_I(x) c_J(x) dx_I \wedge dx_J. \quad (57)$$

在这个和中,  $I$  与  $J$  独立地遍历其可能值, 而  $dx_I \wedge dx_J$  则是 10.16 段那样的.  
于是  $\omega \wedge \lambda$  是  $E$  中的  $(p+q)$ -形式.

非常容易知道 (证明的细节留作习题), 对于 10.13 段所定义的加法的分配律

$$(\omega_1 + \omega_2) \wedge \lambda = (\omega_1 \wedge \lambda) + (\omega_2 \wedge \lambda)$$

及

$$\omega \wedge (\lambda_1 + \lambda_2) = (\omega \wedge \lambda_1) + (\omega \wedge \lambda_2)$$

都成立. 如果把这些分配律与 (55) 式结合起来, 就得到对于  $E$  中的任何形式  $\omega$ ,  
 $\lambda$ ,  $\sigma$  的结合律:

$$(\omega \wedge \lambda) \wedge \sigma = \omega \wedge (\lambda \wedge \sigma). \quad (58)$$

在这段讨论中, 暗中假定了  $p \ge 1$ ,  $q \ge 1$ . 至于 0-形式  $f$  与 (56) 式中给出的  
 $p$  形式的乘积, 就简单地定义为下面这个  $p$  形式:

$$f\omega = \omega f = \sum_I f(x) b_I(x) dx_I.$$

当  $f$  是 0-形式时, 习惯上宁愿写成  $f\omega$ , 而不写成  $f \wedge \omega$ .

**10.18 微分** 设  $\omega$  是某开集  $E \subset \mathbb{R}^n$  中的  $\mathscr{C}^k$  类  $k$ -形式. 现在定义微分算子  
 $d$ , 它给每个  $\omega$  联系上一个  $(k+1)$ -形式.

$E$  中的  $\mathscr{C}^k$  类的 0-形式, 恰好是实函数  $f \in \mathscr{C}^k(E)$ , 我们定义

$$df = \sum_{i=1}^{n} (D_i f)(\mathbf{x}) dx_i. \quad (59)$$

如果  $\omega = \sum b_I(x) dx_I$  是  $k$ -形式  $\omega$  的标准表示, 而对于每个递增  $k$  指标  $I$  来说  $b_I \in \mathcal{C}^1(E)$ , 就定义

$$d\omega = \sum_I (db_I) \wedge dx_I. \quad (60)$$

**10.19 例** 设  $E$  是  $R^n$  中的开集,  $f \in \mathcal{C}^1(E)$ ,  $\gamma$  是  $E$  中的连续可微曲线, 其参数域是  $[0, 1]$ . 由(59)式及(35)式

$$\int_{\gamma} df = \int_{0}^{1} \sum_{i=1}^{n} (D_i f)(\gamma(t)) \gamma'_i(t) dt. \quad (61)$$

据链导法, 最后的被积式是  $(f \circ \gamma)'(t)$ . 因此,

$$\int_{\gamma} df = f(\gamma(1)) - f(\gamma(0)), \quad (62)$$

于是  $\int_{\gamma} df$  对于具有相同起点和相同终点的一切  $\gamma$  都是相同的; 这和 10.12 的例(a)相仿.

因此, 与例题 10.12(b)比较一下就知道, 1-形式  $x dy$  不是任何 0-形式  $f$  的导数. 因为

$$d(x dy) = dx \wedge dy \neq 0,$$

这事实又可以从下述定理的部分(b)推知.

**10.20 定理**

(a) 设  $\omega$  与  $\lambda$  分别是  $E$  中的  $\mathcal{C}^1$  类的  $k$ -形式和  $m$ -形式, 那么

$$d(\omega \wedge \lambda) = (d\omega) \wedge \lambda + (-1)^k \omega \wedge d\lambda. \quad (63)$$

(b) 如果  $\omega$  在  $E$  中属于  $\mathcal{C}^2$  类, 那么  $d^2 \omega = 0$ .

这里的  $d^2 \omega$  当然表示  $d(d\omega)$ .

证 由(57)式及(60)式, 如果(63)式对于

$$\omega = f dx_I, \quad \lambda = g dx_J \quad (64)$$

这种特殊情形成立的话, 那么(a)就得证了; 这里  $f, g \in \mathcal{C}^1(E)$ ,  $dx_I$  是基本  $k$ -形式,  $dx_J$  是基本  $m$ -形式. [如果  $k$  或  $m$  或二者是零, 只要把(64)式中的  $dx_I$  或  $dx_J$  略去就行了; 下面的证明并不受影响]. 这时

$$\omega \wedge \lambda = fg dx_I \wedge dx_J.$$

假定  $I$  与  $J$  没有公共元素. [不然的话, (63)里的三项都是 0]. 然后用(53)式就得到

$$d(\omega \wedge \lambda) = d(fg dx_I \wedge dx_J) = (-1)^n d(fg dx_{[I,J]}).$$

据(59)式,  $d(fg) = fdg + gdf$ . 因之从(60)式得出

$$\begin{aligned} d(\omega \wedge \lambda) &= (-1)^n (fdg + gdf) \wedge dx_{[I,J]} \\ &= (gdf + fdg) \wedge dx_I \wedge dx_J. \end{aligned}$$

因为  $dg$  是 1-形式,  $dx_I$  是  $k$ -形式, 所以由(42)式.

$$dg \wedge dx_I = (-1)^k dx_I \wedge dg,$$

因此,

$$\begin{aligned} d(\omega \wedge \lambda) &= (df \wedge dx_I) \wedge (gdx_J) + (-1)^k (fdx_I) \wedge (dg \wedge dx_J) \\ &= (d\omega) \wedge \lambda + (-1)^k \omega \wedge d\lambda. \end{aligned}$$

(a)得证.

注意, 结合律(58)的使用是没有条件的.

我们先对 0-形式  $f \in \mathcal{C}^\infty$  来证(b):

$$\begin{aligned} d^2 f &= d\left(\sum_{j=1}^n (D_j f)(\mathbf{x}) dx_j\right) \\ &= \sum_{j=1}^n d(D_j f) \wedge dx_j \\ &= \sum_{i,j=1}^n (D_{ij} f)(\mathbf{x}) dx_i \wedge dx_j. \end{aligned}$$

因为  $D_{ij} f = D_{ji} f$  (定理 9.41) 及  $dx_i \wedge dx_j = -dx_j \wedge dx_i$ , 得知  $d^2 f = 0$ .

如果像在(64)式中那样,  $\omega = fdx_I$ , 那么  $d\omega = (df) \wedge dx_I$ . 据(60)式,  $d(dx_I) = 0$ . 因此, (63)式说明

$$d^2 \omega = (d^2 f) \wedge dx_I = 0.$$

**10.21 变量代换** 设  $E$  是  $R^n$  中的开集,  $T$  是  $E$  到开集  $V \subset R^m$  内的  $\mathcal{C}^1$  映射,  $\omega$  是  $V$  中的  $k$ -形式, 它的标准表示是

$$\omega = \sum_I b_I(\mathbf{y}) dy_I. \quad (65)$$

(我们用  $\mathbf{y}$  表示  $V$  中的点, 用  $\mathbf{x}$  表示  $E$  中的点).

令  $t_1, \dots, t_m$  是  $T$  的分量. 如果

$$\mathbf{y} = (y_1, \dots, y_m) = T(\mathbf{x}),$$

那么  $y_i = t_i(\mathbf{x})$ . 像(59)式中那样.

$$dt_i = \sum_{j=1}^{n} (D_j t_i)(\mathbf{x}) dx_j \quad (1 \le i \le m). \quad (66)$$

这样, 每个  $dt_i$  是  $E$  中的一个 1-形式.

映射  $T$  把  $\omega$  变成  $E$  中的  $k$ -形式  $\omega_T$ , 它的定义是

$$\omega_T = \sum_I b_I(T(\mathbf{x})) dt_{i_1} \wedge \cdots \wedge dt_{i_k}. \quad (67)$$

在(67)中每个被加项的  $I = \{i_1, \dots, i_k\}$  是递增  $k$  指标.

下一个定理说明, 前边定义的形式的加、乘及微分运算, 都能与变量代换交换次序的.

**10.22 定理** 用 10.21 段里的  $E$  和  $T$ . 令  $\omega$  及  $\lambda$  分别为  $V$  中的  $k$ -形式及  $m$ -形式. 那么

- (a) 当  $k=m$  时,  $(\omega+\lambda)_T = \omega_T + \lambda_T$ ;
- (b)  $(\omega \wedge \lambda)_T = \omega_T \wedge \lambda_T$ ;
- (c) 当  $\omega$  属于  $\mathcal{C}'$  类,  $T$  属于  $\mathcal{C}''$  类时,  $d(\omega_T) = (d\omega)_T$ .

证 从定义可以直接得到(a). 一旦了解

$$(dy_{i_1} \wedge \cdots \wedge dy_{i_r})_T = dt_{i_1} \wedge \cdots \wedge dt_{i_r} \quad (68)$$

而与  $\{i_1, \dots, i_r\}$  是否递增无关, (b) 差不多就是显然的了. 因为要把(68)式的左、右两端变成递增的排列, 需要同样多的负号, 所以(68)式成立.

现在证(c). 如果  $f$  是  $V$  中的  $\mathcal{C}'$  类的 0-形式, 那么

$$f_T(\mathbf{x}) = f(T(\mathbf{x})), \quad df = \sum_i (D_i f)(\mathbf{y}) dy_i.$$

据链导法得到

$$\begin{aligned} d(f_T) &= \sum_j (D_j f_T)(\mathbf{x}) dx_j \\ &= \sum_j \sum_i (D_i f)(T(\mathbf{x})) (D_j t_i)(\mathbf{x}) dx_j \\ &= \sum_i (D_i f)(T(\mathbf{x})) dt_i \\ &= (df)_T. \end{aligned} \quad (69)$$

如果  $dy_I = dy_{i_1} \wedge \cdots \wedge dy_{i_k}$ , 那么,  $(dy_I)_T = dt_{i_1} \wedge \cdots \wedge dt_{i_k}$ , 而定理 10.20 说明

$$d((dy_I)_T) = 0. \quad (70)$$

(这里是用到题设  $T \in \mathcal{C}''$  的地方)

现在假定  $\omega = f dy_I$ . 于是

$$\omega_T = f_T(x)(dy_I)_T,$$

由前面的一些计算结果得到

$$\begin{aligned} d(\omega_T) &= d(f_T) \wedge (dy_I)_T = (df)_T \wedge (dy_I)_T \\ &= ((df) \wedge dy_I)_T = (d\omega)_T. \end{aligned}$$

这里第一个等式是根据(63)式和(70)式, 第二个根据(69)式, 第三个根据(b), 最后一个根据  $d\omega$  的定义.

从刚证明了的(c)的这种特殊情况, 再使用(a), 就得到(c)的一般情况. 这就完成了定理的证明.

下一个目标是定理 10.25. 它将由微分形式的另外两个重要变换性质直接得出来. 现在就来讲这两个性质.

**10.23 定理** 设  $T$  是开集  $E \subset \mathbb{R}^n$  到开集  $V \subset \mathbb{R}^m$  内的  $\mathcal{C}^1$  映射,  $S$  是  $V$  到开集  $W \subset \mathbb{R}^p$  内的  $\mathcal{C}^1$  映射,  $\omega$  是  $W$  中的  $k$ -形式. 它使  $\omega_S$  是  $V$  中的  $k$ -形式, 并且  $(\omega_S)_T$  及  $\omega_{ST}$  都是  $E$  中的  $k$ -形式, 这里  $ST$  由  $(ST)(x) = S(T(x))$  定义. 那么,

$$(\omega_S)_T = \omega_{ST}. \quad (71)$$

**证** 如果  $\omega$  及  $\lambda$  都是  $W$  中的形式, 定理 10.22 说明

$$((\omega \wedge \lambda)_S)_T = (\omega_S \wedge \lambda_S)_T = (\omega_S)_T \wedge (\lambda_S)_T$$

并且

$$(\omega \wedge \lambda)_{ST} = \omega_{ST} \wedge \lambda_{ST}.$$

于是, 如果(71)式对于  $\omega$  及  $\lambda$  成立, 随之(71)式对  $\omega \wedge \lambda$  也成立. 因为每个形式能由 0-形式与 1-形式用加法和乘法构成, 并且因为(71)式对于 0-形式当然成立, 因此, 只需对于  $\omega = dz_q$  ( $q=1, \dots, p$ ) 这种情况来证明(71)式就够了. (我们分别用  $x, y, z$  来记  $E, V, W$  中的点.)

令  $t_1, \dots, t_m$  是  $T$  的分量,  $s_1, \dots, s_p$  是  $S$  的分量,  $r_1, \dots, r_p$  是  $ST$  的分量. 如果  $\omega = dz_q$ , 那么,

$$\omega_S = ds_q = \sum_j (D_j s_q)(y) dy_j.$$

所以, 链导法表明

$$\begin{aligned} (\omega_S)_T &= \sum_j (D_j s_q)(T(x)) dt_j \\ &= \sum_j (D_j s_q)(T(x)) \sum_i (D_i t_j)(x) dx_i \\ &= \sum_i (D_i r_q)(x) dx_i = dr_q = \omega_{ST}. \end{aligned}$$

**10.24 定理** 设  $\omega$  是开集  $E \subset \mathbb{R}^n$  中的  $k$ -形式,  $\Phi$  是  $E$  中的  $k$ -曲面, 它的参数域  $D \subset \mathbb{R}^k$ ,  $\Delta$  是  $\mathbb{R}^k$  中的、参数域为  $D$  并且是用  $\Delta(\mathbf{u}) = \mathbf{u} (\mathbf{u} \in D)$  确定的  $k$ -曲面, 那么,

$$\int_{\Phi} \omega = \int_{\Delta} \omega_{\Phi}.$$

证 只需对

$$\omega = a(\dot{\mathbf{x}}) dx_{i_1} \wedge \cdots \wedge dx_{i_k}$$

这种情况来证明. 如果  $\phi_1, \dots, \phi_n$  是  $\Phi$  的分量, 那么

$$\omega_{\Phi} = a(\Phi(\mathbf{u})) d\phi_{i_1} \wedge \cdots \wedge d\phi_{i_k}.$$

要证明本定理, 只需能够证明

$$d\phi_{i_1} \wedge \cdots \wedge d\phi_{i_k} = J(\mathbf{u}) du_1 \wedge \cdots \wedge du_k, \quad (72)$$

就行了, 这里

$$J(\mathbf{u}) = \frac{\partial(x_{i_1}, \dots, x_{i_k})}{\partial(u_1, \dots, u_k)},$$

因为由(72)式可以得到

$$\begin{aligned} \int_{\Phi} \omega &= \int_{D} a(\Phi(\mathbf{u})) J(\mathbf{u}) d\mathbf{u} \\ &= \int_{\Delta} a(\Phi(\mathbf{u})) J(\mathbf{u}) du_1 \wedge \cdots \wedge du_k = \int_{\Delta} \omega_{\Phi}. \end{aligned}$$

令  $[A]$  是  $k$  行  $k$  列的矩阵, 它的阵元是

$$a(p, q) = (D_q \phi_{i_p})(\mathbf{u}) \quad (p, q = 1, \dots, k).$$

那么

$$d\phi_{i_p} = \sum_q a(p, q) du_q,$$

因而

$$d\phi_{i_1} \wedge \cdots \wedge d\phi_{i_k} = \sum a(1, q_1) \cdots a(k, q_k) du_{q_1} \wedge \cdots \wedge du_{q_k}.$$

在最后这个和里,  $q_1, \dots, q_k$  各自取遍  $1, \dots, k$ . 由反换位关系(42)可得

$$du_{q_1} \wedge \cdots \wedge du_{q_k} = s(q_1, \dots, q_k) du_1 \wedge \cdots \wedge du_k,$$

这里, 照定义 9.33 那样取, 应用这个定义, 就知道

$$d\phi_{i_1} \wedge \cdots \wedge d\phi_{i_k} = \det[A] du_1 \wedge \cdots \wedge du_k;$$

又因为  $J(u) = \det[A]$ , (72) 式得证.

本节的最后结果, 把上面两个定理联系了起来.

**10.25 定理** 设  $T$  是开集  $E \subset \mathbb{R}^n$  到开集  $V \subset \mathbb{R}^m$  内的  $C^1$  映射,  $\Phi$  是  $E$  中的  $k$ -曲面,  $\omega$  是  $V$  中的  $k$ -形式.

那么

$$\int_{T\Phi} \omega = \int_{\Phi} \omega_T.$$

**证** 设  $\Phi$  的参数域是  $D$  (从而也是  $T\Phi$  的参数域), 并按定理 10.24 定义  $\Delta$ . 于是

$$\int_{T\Phi} \omega = \int_{\Delta} \omega_{T\Phi} = \int_{\Delta} \langle \omega_T \rangle_{\Phi} = \int_{\Phi} \omega_T.$$

其中第一个等式是在定理 10.24 中用  $T\Phi$  代替  $\Phi$  得到的. 第二个等式由定理 10.23 得出. 第三个等式是在定理 10.24 中用  $\omega_T$  代替  $\omega$  的结果.

## 单形与链

**10.26 仿射单形** 设  $f$  是把向量空间  $X$  映入向量空间  $Y$  的映射. 如果  $f - f(0)$  是线性的, 就称  $f$  为仿射映射. 换句话说, 就是要求存在某个  $A \in L(X, Y)$  使得

$$f(x) = f(0) + Ax. \quad (73)$$

如此, 要确定  $\mathbb{R}^k$  到  $\mathbb{R}^n$  中的仿射映射, 只要知道  $f(0)$  及  $f(e_i)$  ( $1 \le i \le k$ ) 就行了, 这里像通常那样,  $\{e_1, \dots, e_k\}$  是  $\mathbb{R}^k$  的标准基.

我们定义标准单形  $Q_k$  为由形如

$$u = \sum_{i=1}^{k} a_i e_i \quad (74)$$

而使  $a_i \ge 0$  ( $i=1, \dots, k$ ) 并且  $\sum a_i \le 1$  的一切  $u \in \mathbb{R}^k$  组成的集.

设  $p_0, p_1, \dots, p_k$  是  $\mathbb{R}^n$  中的点. 所谓有向仿射  $k$ -单形

$$\sigma = [p_0, p_1, \dots, p_k] \quad (75)$$

是用  $Q_k$  作参数域, 由仿射映射

$$\sigma(a_1 e_1 + \dots + a_k e_k) = p_0 + \sum_{i=1}^{k} a_i (p_i - p_0). \quad (76)$$

给出的  $\mathbb{R}^n$  中的  $k$ -曲面. 注意,  $\sigma$  的本性是

$$\sigma(0) = p_0, \quad \sigma(e_i) = p_i \quad (1 \le i \le k) \quad (77)$$

及

$$\sigma(u) = p_0 + Au \quad (u \in Q^k), \quad (78)$$

这里  $A \in L(R^k, R^n)$  而对于  $1 \le i \le k$ ,  $Ae_i = p_i - p_0$ .

我们称  $\sigma$  为有向的, 借以着重考虑顶点  $p_0, \dots, p_k$  的次序. 如果

$$\bar{\sigma} = [p_{i_0}, p_{i_1}, \dots, p_{i_k}] \quad (79)$$

这里  $\{i_0, i_1, \dots, i_k\}$  是有序集  $\{0, 1, \dots, k\}$  的一个排列, 我们就采用

$$\bar{\sigma} = s(i_0, i_1, \dots, i_k)\sigma \quad (80)$$

这种记号, 这里的  $s$  是定义 9.33 中所定义的函数. 这样  $\bar{\sigma} = \pm \sigma$  在于  $s = 1$  或  $s = -1$ . 严格地说, 在采用 (75) 式及 (76) 式作为  $\sigma$  的定义时, 除非  $i_0 = 0, \dots, i_k = k$ , 我们不应写  $\bar{\sigma} = \sigma$ , 即使  $s(i_0, \dots, i_k) = 1$  也是这样; 在这里我们得到的只是等价关系, 而不是等式. 然而对于我们的目的来说, 根据定理 10.27, 这种记号还是合适的.

设  $\bar{\sigma} = \varepsilon\sigma$  (沿用上面的约定), 如果  $\varepsilon = 1$ , 就说  $\bar{\sigma}$  与  $\sigma$  同向; 如果  $\varepsilon = -1$ , 就说  $\bar{\sigma}$  与  $\sigma$  反向. 注意, 我们并没有定义“单形的向”的意义. 我们所定义的只是取同一点集为顶点的两个单形之间的关系, 即“同向”的关系.

然而, 这里有这么一种情况, 单形的方向能按一种自然的方法来定义. 这就是当  $n = k$ , 并且当诸向量  $p_i - p_0$  ( $1 \le i \le k$ ) 无关时的情况. 这时 (78) 式中的线性变换  $A$  可逆, 它的行列式 (即  $\sigma$  的函数行列式) 不是 0. 于是, 如果  $\det A$  是正的 (或负的), 就说  $\sigma$  是正向的 (或负向的). 特别是  $R^k$  中由恒等映射给出的单形  $[0, e_1, \dots, e_k]$  有正向.

到现在为止, 我们一直假定了  $k \ge 1$ . 有向 0-单形定义为附有正负号的一个点. 我们把它写成  $\sigma = +p_0$  或  $\sigma = -p_0$ . 如果  $\sigma = \varepsilon p_0$  ( $\varepsilon = \pm 1$ ) 并且  $f$  是 0-形式 (即实函数), 我们定义

$$\int_{\sigma} f = \varepsilon f(p_0).$$

**10.27 定理** 设  $\sigma$  是开集  $E \subset R^n$  中的有向仿射  $k$ -单形, 并设  $\bar{\sigma} = \varepsilon\sigma$ , 那么, 对于  $E$  中的每个  $k$ -形式  $\omega$  来说

$$\int_{\bar{\sigma}} \omega = \varepsilon \int_{\sigma} \omega. \quad (81)$$

**证** 对于  $k = 0$ , (81) 式由上面的定义就得到了. 所以我们假定  $k \ge 1$ , 并且假定  $\sigma$  是由 (75) 式给出的.

假设  $1 \le j \le k$ , 并设  $\bar{\sigma}$  是从  $\sigma$  交换  $p_0$  与  $p_j$  得来的. 于是  $\varepsilon = -1$ , 并且

$$\bar{\sigma}(u) = p_j + Bu \quad (u \in Q^k),$$

这里  $B$  是  $R^k$  到  $R^n$  内的线性映射, 其中  $Be_j = p_0 - p_j$  而当  $i \neq j$  时  $Be_i = p_i - p_j$ .

如果借(78)式里的  $A$ , 令  $Ae_i = x_i$  ( $1 \le i \le k$ ), 那么  $B$  的列向量(即向量  $Be_i$ ) 便是

$$x_1 - x_j, \dots, x_{j-1} - x_j, -x_j, x_{j+1} - x_j, \dots, x_k - x_j.$$

如果把第  $j$  列从其余各列减去, 那么, (35)式中的行列式, 没有一个会受影响, 然而我们得到了这些列  $x_1, \dots, x_{j-1}, -x_j, x_{j+1}, \dots, x_k$ . 这些列与  $A$  中各列, 只是在第  $j$  列上差一个符号. 因此, 对于这种情况, (81)式成立.

次设  $0 < i < j \le k$  而  $\bar{\sigma}$  是由  $\sigma$  交换  $p_i$  与  $p_j$  得到的. 那么  $\bar{\sigma}(u) = p_0 + Cu$ , 这里  $C$  的各列与  $A$  的各列, 除了第  $i$  列与第  $j$  列交换了之外, 其余都一样. 这又可推出(81)式成立, 因为  $\varepsilon = -1$ .

一般的情况随之也成立, 因为  $\{0, 1, \dots, k\}$  的每个排列是上面已经处理过的诸特殊情形的复合.

**10.28 仿射链** 开集  $E \subset R^n$  中的仿射  $k$ -链  $\Gamma$ , 是  $E$  中的有限多个有向仿射  $k$ -单形  $\sigma_1, \dots, \sigma_r$  的集体. 这些  $k$ -单形不必各不相同; 于是, 一个  $k$ -单形可以在  $\Gamma$  中重复出现.

设  $\Gamma$  如上, 并设  $\omega$  是  $E$  中的  $k$ -形式, 定义

$$\int_{\Gamma} \omega = \sum_{i=1}^{r} \int_{\sigma_i} \omega. \quad (82)$$

我们可以把  $E$  中的  $k$ -曲面  $\Phi$  看成一个函数, 它的定义域是  $E$  中一切  $k$ -形式的集体, 并且它给  $\omega$  配置一个数  $\int_{\Phi} \omega$ . 因为实值函数能够相加(像定义 4.3 中那样), 这就使人联想到用记号

$$\Gamma = \sigma_1 + \dots + \sigma_r \quad (83)$$

或写成更紧凑的形式而用

$$\Gamma = \sum_{i=1}^{r} \sigma_i \quad (84)$$

说明(82)式对于  $E$  中的每个  $k$ -形式成立.

为了避免误解, 我们明确指出, (83)式及(80)式所引入的记号必须当心地使用. 要害是在于  $R^n$  里的每个有向仿射  $k$ -单形  $\sigma$ , 作为函数的途径有两种; 它们的定义域不同, 值域也不同, 于是有两种绝然不同的加法运算. 本来,  $\sigma$  是定义为  $Q^k$  上的  $R^n$ -值函数, 因此, 能够说  $\sigma_1 + \sigma_2$  是给每个  $u \in Q^k$  派定向量  $\sigma_1(u) + \sigma_2(u)$  的函数  $\sigma$ . 注意,  $\sigma$  仍然是  $R^n$  中的有向仿射  $k$ -单形! 这不是(83)式的含意.

例如, 像在(80)式中那样, 如果  $\sigma_2 = -\sigma_1$  (就是说  $\sigma_1$  与  $\sigma_2$  的顶点的集相同但方向相反)并且设  $\Gamma = \sigma_1 + \sigma_2$ , 那么对于一切  $\omega$  有  $\int_{\Gamma} \omega = 0$ , 并且我们可以把这件

事记成  $\Gamma=0$  或  $\sigma_1 + \sigma_2 = 0$ . 这并不意味着  $\sigma_1(u) + \sigma_2(u)$  是  $R^n$  中的零向量.

**10.29 边界** 当  $k \ge 1$  时, 规定有向仿射  $k$ -单形

$$\sigma = [\mathbf{p}_0, \mathbf{p}_1, \dots, \mathbf{p}_k]$$

的边界就是仿射  $(k-1)$ -链

$$\partial\sigma = \sum_{j=0}^{k} (-1)^j [\mathbf{p}_0, \dots, \mathbf{p}_{j-1}, \mathbf{p}_{j+1}, \dots, \mathbf{p}_k]. \quad (85)$$

例如, 设  $\sigma = [\mathbf{p}_0, \mathbf{p}_1, \mathbf{p}_2]$ , 那么

$$\begin{aligned} \partial\sigma &= [\mathbf{p}_1, \mathbf{p}_2] - [\mathbf{p}_0, \mathbf{p}_2] + [\mathbf{p}_0, \mathbf{p}_1] \\ &= [\mathbf{p}_0, \mathbf{p}_1] + [\mathbf{p}_1, \mathbf{p}_2] + [\mathbf{p}_2, \mathbf{p}_0], \end{aligned}$$

这与三角形的有向边界的普通概念一致.

注意, 当  $1 \le i \le k$  时, 在(85)式中出现的单形  $\sigma_i = [\mathbf{p}_0, \dots, \mathbf{p}_{i-1}, \mathbf{p}_{i+1}, \dots, \mathbf{p}_k]$ , 以  $Q^{k-1}$  为参数域, 并由

$$\sigma_i(u) = \mathbf{p}_0 + Bu \quad (u \in Q^{k-1}) \quad (86)$$

确定, 这里的  $B$  是由

$$\begin{aligned} Be_i &= \mathbf{p}_i - \mathbf{p}_0 \quad (\text{当 } 1 \le i \le j-1), \\ Be_i &= \mathbf{p}_{i+1} - \mathbf{p}_0 \quad (\text{当 } j \le i \le k-1) \end{aligned}$$

确定的从  $R^{k-1}$  到  $R^n$  的线性映射.

在(85)式中出现的另一单形

$$\sigma_0 = [\mathbf{p}_1, \mathbf{p}_2, \dots, \mathbf{p}_k]$$

是由映射

$$\sigma_0(u) = \mathbf{p}_1 + Bu$$

得出的, 这里当  $1 \le i \le k-1$  时,  $Be_i = \mathbf{p}_{i+1} - \mathbf{p}_1$ .

**10.30 可微单形及可微链** 设  $T$  是开集  $E \subset R^n$  到开集  $V \subset R^m$  内的  $C^1$  映射;  $T$  不必是一一的. 如果  $\sigma$  是  $E$  中的有向仿射  $k$ -单形, 那么复合映射  $\Phi = T \circ \sigma$  (有时写成较简单的形式  $T\sigma$ ) 是  $V$  中的以  $Q^k$  为参数域的  $k$ -曲面. 称  $\Phi$  为  $C^1$  类的有向  $k$ -单形.

$V$  中  $C^1$  类的有向  $k$ -单形  $\Phi_1, \dots, \Phi_r$  的有限集  $\Psi$  叫做  $V$  中的  $C^1$  类的  $k$ -链. 设  $\omega$  是  $V$  中的  $k$ -形式, 我们定义

$$\int_{\Psi} \omega = \sum_{i=1}^{r} \int_{\Phi_i} \omega \quad (87)$$

并且应用相应的记号  $\Psi = \Sigma \Phi_i$ .

如果  $\Gamma = \Sigma \sigma_i$  是仿射链, 并且如果  $\Phi_i = T \circ \sigma_i$ , 那么又写成  $\Psi = T \circ \Gamma$ , 或写成

$$T(\Sigma \sigma_i) = \Sigma T\sigma_i. \quad (88)$$

有向  $k$ -单形  $\Phi = T \circ \sigma$  的边界  $\partial\Phi$  定义为  $(k-1)$ -链

$$\partial\Phi = T(\partial\sigma). \quad (89)$$

为了说明(89)式是合理的, 可以想一想, 如果  $T$  是仿射的, 那么  $\Phi = T \circ \sigma$  是有向仿射  $k$ -单形, 这时(89)式就不应该是定义, 而应该看作(85)式的推论了. 所以(89)式是推广了这种特殊情况.

如果  $\Phi$  是属于  $\mathcal{C}$  类的,  $\partial\Phi$  就是属于  $\mathcal{C}$  类的. 这可以直接推知.

最后, 定义  $k$ -链  $\Psi = \Sigma \Phi_i$  的边界  $\partial\Psi$  为  $(k-1)$ -链.

$$\partial\Psi = \Sigma \partial\Phi_i. \quad (90)$$

**10.31 正向边界** 到现在为止, 我们已把边界与链联系上了, 但还没有与  $R^n$  的子集联系上. 关于边界的这种看法, 对于 Stokes 定理的叙述和证明, 是最适当不过了. 然而在应用中, 特别是在  $R^2$  或  $R^3$  的应用中, 谈某些集合的“有向边界”也是很通常和很方便的. 现在简要地谈一下.

设  $Q^n$  是  $R^n$  中的标准单形,  $\sigma_0$  是以  $Q^n$  为参数域的恒等映射. 在 10.26 段中已知,  $\sigma_0$  可以看做  $R^n$  中的正向  $n$ -单形. 它的边界  $\partial\sigma_0$  是仿射  $(n-1)$ -链. 这个链叫做集  $Q^n$  的正向边界.

例如  $Q^3$  的正向边界是

$$[e_1, e_2, e_3] - [0, e_2, e_3] + [0, e_1, e_3] - [0, e_1, e_2].$$

今令  $T$  为  $Q^n$  到  $R^n$  中的  $\mathcal{C}$  类 1-1 映射, 并设它的函数行列式是正的(至少在  $Q^n$  内部). 设  $E = T(Q^n)$ . 由反函数定理,  $E$  是  $R^n$  中某个开集的闭包. 我们定义集  $E$  的正向边界为  $(n-1)$ -链

$$\partial T = T(\partial\sigma_0),$$

并且可以把这个  $(n-1)$ -链记作  $\partial E$ .

在这里显然会发生这样的疑问: 如果  $E = T_1(Q^n) = T_2(Q^n)$ , 并且如果  $T_1$  与  $T_2$  的函数行列式都是正的, 是否必然  $\partial T_1 = \partial T_2$  呢? 即是说, 等式

$$\int_{\partial T_1} \omega = \int_{\partial T_2} \omega$$

是否对于每个  $(n-1)$ -形式  $\omega$  成立呢? 答案是肯定的, 但我们打算略去它的证明. (看个例子, 把本节的结尾与习题 17 作一对比).

还可以推进一步. 设

$$\Omega = E_1 \cup \cdots \cup E_r,$$

这里  $E_i = T_i(Q^2)$ , 每个  $T_i$  与上面的  $T$  有同样的性质. 并且诸  $E_i$  的内部两两不交. 那么, 就把  $(n-1)$ -链

$$\partial T_1 + \cdots + \partial T_r = \partial \Omega$$

叫做  $\Omega$  的正向边界.

例如,  $R^2$  中的单位正方形  $I^2$  是  $\sigma_1(Q^2)$  与  $\sigma_2(Q^2)$  的并, 这里

$$\sigma_1(u) = u, \quad \sigma_2(u) = e_1 + e_2 - u.$$

$\sigma_1$  及  $\sigma_2$  的函数行列式都是  $1 > 0$ . 因为

$$\sigma_1 = [\mathbf{0}, e_1, e_2], \quad \sigma_2 = [e_1 + e_2, e_2, e_1],$$

所以

$$\begin{aligned}\partial \sigma_1 &= [e_1, e_2] - [\mathbf{0}, e_2] + [\mathbf{0}, e_1], \\ \partial \sigma_2 &= [e_2, e_1] - [e_1 + e_2, e_1] + [e_1 + e_2, e_2];\end{aligned}$$

这两个边界之和为

$$\partial I^2 = [\mathbf{0}, e_1] + [e_1, e_1 + e_2] + [e_1 + e_2, e_2] + [e_2, \mathbf{0}],$$

即是  $I^2$  的正向边界. 注意  $[e_1, e_2]$  抵消了  $[e_2, e_1]$ .

如果  $\Phi$  是  $R^m$  中以  $I^2$  为参数域的 2-曲面, 那么  $\Phi$  (当作 2-形式上的函数) 与 2-链

$$\Phi \cdot \sigma_1 + \Phi \cdot \sigma_2$$

相同. 于是

$$\partial \Phi = \partial(\Phi \cdot \sigma_1) + \partial(\Phi \cdot \sigma_2) = \Phi(\partial \sigma_1) + \Phi(\partial \sigma_2) = \Phi(\partial I^2).$$

换句话说, 如果  $\Phi$  的参数域是正方形  $I^2$ , 我们不必回到单形  $Q^2$ , 而可以直接从  $\partial I^2$  得到  $\partial \Phi$ .

其他例子可在习题 17-19 中找到.

**10.32 例** 对于  $0 \le u \le \pi$ ,  $0 \le v \le 2\pi$ , 定义

$$\Sigma(u, v) = (\sin u \cos v, \sin u \sin v, \cos u).$$

于是  $\Sigma$  是  $R^3$  中的 2-曲面, 它的参数域是长方形  $D \subset R^2$ , 它的值域是  $R^3$  中的单位球. 它的边界是

$$\partial \Sigma = \Sigma(\partial D) = \gamma_1 + \gamma_2 + \gamma_3 + \gamma_4$$

这里的

$$\begin{aligned}\gamma_1(u) &= \Sigma(u, 0) = (\sin u, 0, \cos u), \\ \gamma_2(v) &= \Sigma(\pi, v) = (0, 0, -1), \\ \gamma_3(u) &= \Sigma(\pi - u, 2\pi) = (\sin u, 0, -\cos u), \\ \gamma_4(v) &= \Sigma(0, 2\pi - v) = (0, 0, 1),\end{aligned}$$

$u, v$  的参数区间为  $[0, \pi], [0, 2\pi]$ .

因为  $\gamma_2$  及  $\gamma_4$  是常量, 它们的导数是 0, 因此任何 1-形式在  $\gamma_2$  或  $\gamma_4$  上的积分是 0 [见例 10.12(a)].

因  $\gamma_3(u) = \gamma_1(\pi - u)$ , 直接应用 (35) 式, 就能证明

$$\int_{\gamma_3} \omega = - \int_{\gamma_1} \omega$$

对于任何 1-形式  $\omega$  成立; 于是  $\int_{\partial \Sigma} \omega = 0$ , 进而推知  $\partial \Sigma = 0$ .

(按照地理学的术语,  $\partial \Sigma$  从北极  $N$  出发, 沿子午线跑到南极  $S$ , 在  $S$  停一下, 沿同一子午线回到  $N$ , 最后停在  $N$ . 沿子午线的这两段路方向相反, 所以相应的两个线积分彼此消掉. 在习题 32 中也有一条曲线, 它在边界上出现两次, 但是没有消掉).

## Stokes 定理

**10.33 定理** 设  $\Psi$  是开集  $V \subset \mathbb{R}^m$  中的  $\mathcal{C}^k$  类  $k$ -链,  $\omega$  是  $V$  中的  $\mathcal{C}^{k-1}$  类  $(k-1)$ -形式, 那么

$$\int_{\Psi} d\omega = \int_{\partial \Psi} \omega. \quad (91)$$

$k=m=1$  时, 这不过是微积分基本定理 (加一个可微性的假定).  $k=m=2$  的情形就是 Green 定理.  $k=m=3$  时得出所谓 Gauss“散度定理”.  $k=2, m=3$  的情况, 是由 Stokes 最先发现的. (Spivak 的书描述了一些历史背景). 这些特殊情况将在本章末进一步讨论.

**证** 只要对  $V$  中  $\mathcal{C}^k$  类的每个有向  $k$ -单形  $\Phi$  证明

$$\int_{\Phi} d\omega = \int_{\partial \Phi} \omega \quad (92)$$

就够了. 因为, 如果证明了 (92) 式, 再如果  $\Psi = \sum \Phi_i$ , 那么, 由 (87) 及 (90) 就可推出 (91) 式.

固定这样一个  $\Phi$ , 并且令

$$\sigma = [0, e_1, \dots, e_k]. \quad (93)$$

这样,  $\sigma$  是以  $Q^*$  为参数域而由恒等映射所确定的有向仿射  $k$ -单形. 因  $\Phi$  又是定义在  $Q^*$  上的(看定义 10.30)并且  $\Phi \in \mathscr{C}''$ , 所以存在着包含  $Q^*$  的开集  $E \subset R^k$ , 并且存在着  $E$  到  $V$  内并使得  $\Phi = T \circ \sigma$  的  $\mathscr{C}''$  映射  $T$ . 由定理 10.25 及 10.22(c), (92)式的左端等于

$$\int_{T\sigma} d\omega = \int_{\sigma} (d\omega)_T = \int_{\sigma} d(\omega_T).$$

再用一次定理 10.25, 并根据(89)式就知道(92)式的右端是

$$\int_{\partial(T\sigma)} \omega = \int_{T(\partial\sigma)} \omega = \int_{\partial\sigma} \omega_T.$$

因为  $\omega_T$  是  $E$  中的  $(k-1)$ -形式, 所以为了证明(92)式, 只要对于特殊的单形(93), 及  $E$  中的每个  $\mathscr{C}'$  类  $(k-1)$ -形式  $\lambda$  来证

$$\int_{\sigma} d\lambda = \int_{\partial\sigma} \lambda. \quad (94)$$

如果  $k=1$ , 有向 0-单形的定义说明, (94)式只不过是说, 对于  $[0, 1]$  上的每个连续可微函数  $f$  有关系式

$$\int_{0}^{1} f'(u) du = f(1) - f(0), \quad (95)$$

而由微积分基本定理, 这当然是正确的.

从现在起, 我们假定  $k > 1$ , 固定了整数  $r$  ( $1 \le r \le k$ ), 并且选定  $f \in \mathscr{C}'(E)$ . 我们说, 只要对于

$$\lambda = f(\mathbf{x}) dx_1 \wedge \cdots \wedge dx_{r-1} \wedge dx_{r+1} \wedge \cdots \wedge dx_k \quad (96)$$

这种情形来证(94)式就够了, 这是因为任何  $(k-1)$ -形式, 一定是如(96)这样一些特殊的  $(k-1)$ -形式之和, 其中  $r=1, \dots, k$ .

据(85)式, 单形(93)的边界是

$$\partial\sigma = [\mathbf{e}_1, \dots, \mathbf{e}_k] + \sum_{i=1}^{k} (-1)^i \tau_i,$$

这里

$$\tau_i = [\mathbf{0}, \mathbf{e}_1, \dots, \mathbf{e}_{i-1}, \mathbf{e}_{i+1}, \dots, \mathbf{e}_k],$$

$i=1, \dots, k$ . 令

$$\tau_0 = [\mathbf{e}_r, \mathbf{e}_1, \dots, \mathbf{e}_{r-1}, \mathbf{e}_{r+1}, \dots, \mathbf{e}_k].$$

注意  $\tau_0$  是由  $[\mathbf{e}_1, \dots, \mathbf{e}_k]$  将  $\mathbf{e}_r$  与其左邻逐次交换  $r-1$  次得到的. 所以

$$\partial\sigma = (-1)^{r-1} \tau_0 + \sum_{i=1}^{k} (-1)^i \tau_i, \quad (97)$$

每个  $\tau_i$  以  $Q^{k-1}$  为参数域.

如果  $\mathbf{x} = \tau_0(\mathbf{u})$  并且  $\mathbf{u} \in Q^{k-1}$ , 那么

$$x_j = \begin{cases} u_j & (1 \le j < r), \\ 1 - (u_1 + \cdots + u_{k-1}) & (j = r), \\ u_{j-1} & (r < j \le k). \end{cases} \quad (98)$$

如果  $1 \le i \le k$ ,  $\mathbf{u} \in Q^{k-1}$  且  $\mathbf{x} = \tau_i(\mathbf{u})$ , 那么,

$$x_j = \begin{cases} u_j & (1 \le j < i), \\ 0 & (j = i), \\ u_{j-1} & (i < j \le k). \end{cases} \quad (99)$$

对于  $0 \le i \le k$ , 令  $J_i$  为由  $\tau_i$  诱导出来的映射

$$(u_1, \dots, u_{k-1}) \to (x_1, \dots, x_{r-1}, x_{r+1}, \dots, x_k) \quad (100)$$

的函数行列式. 当  $i=0$  及  $i=r$  时, (98) 式及 (99) 式说明, (100) 式是恒等映射. 所以  $J_0=1$ ,  $J_r=1$ . 对于其他的  $i$  来说, 在 (99) 中的  $x_i=0$  说明,  $J_i$  有一行全是 0, 因之  $J_i=0$ . 这样, 由 (35) 式及 (96) 式得到

$$\int_{\tau_i} \lambda = 0 \quad (i \ne 0, i \ne r). \quad (101)$$

结果, 从 (97) 式推知

$$\begin{aligned} \int_{\partial \sigma} \lambda &= (-1)^{r-1} \int_{\tau_0} \lambda + (-1)^r \int_{\tau_r} \lambda \\ &= (-1)^{r-1} \int [f(\tau_0(\mathbf{u})) - f(\tau_r(\mathbf{u}))] d\mathbf{u}. \end{aligned} \quad (102)$$

另一方面,

$$\begin{aligned} d\lambda &= (D_r f)(\mathbf{x}) dx_r \wedge dx_1 \wedge \cdots \wedge dx_{r-1} \wedge dx_{r+1} \wedge \cdots \wedge dx_k \\ &= (-1)^{r-1} (D_r f)(\mathbf{x}) dx_1 \wedge \cdots \wedge dx_k, \end{aligned}$$

所以

$$\int_{\sigma} d\lambda = (-1)^{r-1} \int_{Q^k} (D_r f)(\mathbf{x}) d\mathbf{x}. \quad (103)$$

我们先对  $x_r$  在闭区间

$$[0, 1 - (x_1 + \cdots + x_{r-1} + x_{r+1} + \cdots + x_k)]$$

上积分以求 (103) 式的值. 令  $(x_1, \dots, x_{r-1}, x_{r+1}, \dots, x_k) = (u_1, \dots, u_{k-1})$  并借助 (98) 式, 可以知道 (103) 式中在  $Q^k$  上的积分, 等于 (102) 式中在  $Q^{k-1}$  上的积分. 这就是说 (94) 式成立, 而定理证完.

## 闭形式与恰当形式

**10.34 定义** 设  $\omega$  是开集  $E \subset \mathbb{R}^n$  上的  $k$ -形式. 如果存在着  $E$  中的  $(k-1)$ -形式  $\lambda$ , 适合  $\omega = d\lambda$ , 那么就说  $\omega$  在  $E$  中是恰当的.

如果  $\omega$  属于  $\mathcal{C}'$  类并且  $d\omega = 0$ , 那么  $\omega$  叫做闭的.

定理 10.20(b) 说明,  $\mathcal{C}'$  类的每个恰当形式是闭形式.

在某些集  $E$ , 例如在凸集上, 逆命题正确; 这就是定理 10.39 (通常称为 Poincaré 引理) 及定理 10.40 的内容. 然而, 例题 10.36 及 10.37 要提出不是恰当的闭形式.

**10.35 评注**

(a) 要判定一个已知  $k$ -形式是否是闭的, 只要把  $\omega$  的标准表示中的系数微一下分就行了. 例如, 开集  $E \subset \mathbb{R}^n$  上的  $f_i \in \mathcal{C}'(E)$  时, 1-形式

$$\omega = \sum_{i=1}^{n} f_i(\mathbf{x}) dx_i, \quad (104)$$

是闭的当且仅当对于  $\{1, \dots, n\}$  中的一切  $i, j$  及一切  $\mathbf{x} \in E$ , 诸等式

$$(D_j f_i)(\mathbf{x}) = (D_i f_j)(\mathbf{x}) \quad (105)$$

成立.

注意, (105) 式是“点态”条件; 它并不蕴含那种依赖于  $E$  的形状的整体性质.

另一方面, 要想证明  $\omega$  在  $E$  中是恰当的, 必须证明存在着  $E$  上的形式  $\lambda$ , 合于  $d\lambda = \omega$ . 这就等于在整个  $E$  中, 而不是局部的, 解一组偏微分方程. 例如为了证明 (104) 式在集  $E$  中是恰当的, 就必需求一函数 (或 0-形式)  $g \in \mathcal{C}'(E)$ , 要它合于

$$(D_i g)(\mathbf{x}) = f_i(\mathbf{x}) \quad (\mathbf{x} \in E, 1 \le i \le n). \quad (106)$$

当然, (105) 式是 (106) 式可解的必要条件.

(b) 设  $\omega$  是  $E$  中的恰当  $k$ -形式. 于是存在着  $E$  中的  $(k-1)$ -形式  $\lambda$  使  $d\lambda = \omega$ , 而 Stokes 定理断定, 对于  $E$  中的每个  $\mathcal{C}'$  类  $k$ -链  $\Psi$

$$\int_{\Psi} \omega = \int_{\partial \Psi} d\lambda = \int_{\partial \Psi} \lambda \quad (107)$$

如果  $\Psi_1$  及  $\Psi_2$  都是这样的链, 并且它们有相同的边界, 那么

$$\int_{\Psi_1} \omega = \int_{\Psi_2} \omega.$$

特别在  $E$  中的每个边界为 0 的  $k$ -链上,  $E$  中的恰当  $k$ -形式的积分为 0.

作为这件事的一个重要的特殊情况, 注意  $E$  中的恰当 1-形式在  $E$  中的闭 (可

微)曲线上的积分为 0.

(c) 设  $\omega$  是  $E$  中的闭  $k$ -形式. 于是  $d\omega=0$ , 并且 Stokes 定理断定, 对于  $E$  中属于  $\mathscr{C}''$  类的每个  $(k+1)$ -链  $\Psi$ ,

$$\int_{\partial\Psi} \omega = \int_{\Psi} d\omega = 0 \quad (108)$$

换句话说,  $E$  中的闭  $k$ -形式, 在作为  $E$  中  $(k+1)$ -链的边界这样的  $k$ -链上, 积分为 0.

(d) 设  $\Psi$  是  $E$  中的  $(k+1)$ -链,  $\lambda$  是  $E$  中的  $(k-1)$ -形式, 二者都属于  $\mathscr{C}''$  类. 因为  $d^2\lambda=0$ , 把 Stokes 定理使用两次就知道

$$\int_{\partial\partial\Psi} \lambda = \int_{\partial\Psi} d\lambda = \int_{\Psi} d^2\lambda = 0 \quad (109)$$

由此推知  $\partial^2\Psi=0$ . 换句话说, 边界的边界是 0.

关于这一点的更直接的证明见习题 16.

**10.36 例** 令  $E=R^2-\{0\}$  为去掉原点的平面. 1-形式

$$\eta = \frac{xdy - ydx}{x^2 + y^2} \quad (110)$$

在  $R^2-\{0\}$  中是闭的. 这极易用微分验证. 固定  $r>0$ , 并定义

$$\gamma(t) = (r\cos t, r\sin t) \quad (0 \le t \le 2\pi). \quad (111)$$

于是  $\gamma$  是  $R^2-\{0\}$  中的曲线(“有向 1-单形”). 因为  $\gamma(0)=\gamma(2\pi)$ , 所以

$$\partial\gamma = 0. \quad (112)$$

直接计算就知道

$$\int_{\gamma} \eta = 2\pi \neq 0. \quad (113)$$

评注 10.35(b) 及(c) 的讨论说明, 从(113)式能得到两个结论:

第一,  $\eta$  在  $R^2-\{0\}$  中不是恰当微分, 因若不然, (112)式就必然使(113)式为 0 了.

第二,  $\gamma$  不是  $R^2-\{0\}$  中任何( $\mathscr{C}''$  类) 2-链的边界, 因若不然, 由于  $\eta$  是闭的, 必然使得积分(113)式为 0 了.

**10.37 例** 令  $E=R^3-\{0\}$  是去掉原点的三维空间. 定义

$$\zeta = \frac{xdy \wedge dz + ydz \wedge dx + zdx \wedge dy}{(x^2 + y^2 + z^2)^{3/2}} \quad (114)$$

这里已将  $(x_1, x_2, x_3)$  换写成了  $(x, y, z)$ . 直接微分就知道  $d\zeta=0$ , 所以  $\zeta$  是  $R^3-\{0\}$  中的闭 2-形式.

令  $\Sigma$  是例 10.32 中所构造的, 在  $R^3 - \{0\}$  中的 2-链; 请回想一下,  $\Sigma$  是  $R^3$  中单位球的参数表示. 用例题 10.32 的矩形  $D$  作为参数域, 很容易算出

$$\int_{\Sigma} \zeta = \int_{D} \sin u \, du \, dv = 4\pi \neq 0. \quad (115)$$

像上面的例题那样, 能够推断  $\zeta$  不是  $R^3 - \{0\}$  中的恰当微分(因为如例题 10.32 所证  $\partial \Sigma = 0$ ), 并且虽然  $\partial \Sigma = 0$ , 球  $\Sigma$  也不能是  $R^3 - \{0\}$  中任何( $\mathscr{C}''$ 类)3-链的边界.

下一个结果在定理 10.39 的证明中将要用到.

**10.38 定理** 设  $E$  是  $R^n$  中的凸开集,  $f \in \mathscr{C}'(E)$ ,  $p$  是整数,  $1 \le p \le n$ , 且

$$(D_j f)(x) = 0 \quad (p < j \le n, \quad x \in E). \quad (116)$$

于是存在  $F \in \mathscr{C}'(E)$  使得

$$(D_p F)(x) = f(x), \quad (D_j F)(x) = 0 \quad (p < j \le n, \quad x \in E). \quad (117)$$

证 把  $x$  写成  $x = (x', x_p, x'')$ , 这里

$$x' = (x_1, \dots, x_{p-1}), \quad x'' = (x_{p+1}, \dots, x_n).$$

(当  $p=1$  时, 缺  $x'$ , 当  $p=n$  时, 缺  $x''$ ). 设  $V$  是能与某个  $x''$  拼成  $(x', x_p, x'')$   $\in E$  的一切  $(x', x_p) \in R^p$  的集.  $V$  是  $E$  的射影, 必为  $R^p$  中的凸开集. 因为  $E$  是凸集并且(116)式成立,  $f(x)$  就与  $x''$  无关. 因此存在以  $V$  为定义域的函数  $\varphi$ , 对一切  $x \in E$  合于

$$f(x) = \varphi(x', x_p)$$

如果  $p=1$ ,  $V$  是  $R^1$  中的开区间(可能无界). 取  $c \in V$  并且定义

$$F(x) = \int_c^{x_1} \varphi(t) \, dt \quad (x \in E).$$

如果  $p > 1$ , 令  $U$  是能够对于某个  $x_p$  使得  $(x', x_p) \in V$  的所有  $x' \in R^{p-1}$  的集. 于是  $U$  是  $R^{p-1}$  的凸开集, 并且存在函数  $a \in \mathscr{C}'(U)$ , 它对每个  $x' \in U$  合于  $(x', a(x')) \in V$ . 换句话说,  $a$  的图像在  $V$  中(习题 29). 定义

$$F(x) = \int_{a(x')}^{x_p} \varphi(x', t) \, dt \quad (x \in E).$$

不论在哪种情况,  $F$  满足(117)式.

(注意: 如果  $b < a$ , 一般约定  $\int_a^b$  的意义是  $-\int_b^a$ ).

**10.39 定理** 设  $E \subset R^n$  是凸开集,  $k \ge 1$ ,  $\omega$  是  $E$  中的  $\mathscr{C}$  类  $k$ -形式且  $d\omega = 0$ , 那么  $E$  中必有一个  $(k-1)$ -形式  $\lambda$ , 合于  $\omega = d\lambda$ .

简单地说, 凸集中的闭形式是恰当的.

证 当  $p=1, \dots, n$  时, 用  $Y_p$  表示由  $E$  中的, 合于以下条件的一切  $k$ -形式  $\omega$  构成的集:  $\omega$  属于  $\mathcal{C}'$  类, 标准表示

$$\omega = \sum_I f_I(\mathbf{x}) dx_I \quad (118)$$

中不含  $dx_{p+1}, \dots, dx_n$ . 换句话说, 如果有某个  $\mathbf{x} \in E$  使  $f_I(\mathbf{x}) \neq 0$ , 就会  $I \subset \{1, \dots, p\}$ .

现在对  $p$  作归纳法

首先假定  $\omega \in Y_1$ . 于是  $\omega = f(\mathbf{x}) dx_1$ . 因为  $d\omega = 0$ , 对于  $1 < j \le n$ ,  $\mathbf{x} \in E$  有  $(D_j f)(\mathbf{x}) = 0$ . 由定理 10.38, 存在着一个  $F \in \mathcal{C}'(E)$  使得  $D_1 F = f$  而对  $1 < j \le n$  有  $D_j F = 0$ . 因此

$$dF = (D_1 F)(\mathbf{x}) dx_1 = f(\mathbf{x}) dx_1 = \omega.$$

现在取  $p > 1$ , 并做如下的归纳假定: 属于  $Y_{p-1}$  的每个闭  $k$ -形式是  $E$  中的恰当形式.

选  $\omega \in Y_p$  使  $d\omega = 0$ . 据 (118) 式,

$$\sum_I \sum_{j=1}^n (D_j f_I)(\mathbf{x}) dx_j \wedge dx_I = d\omega = 0. \quad (119)$$

考虑合于  $p < j \le n$  的一个固定的  $j$ . 在 (118) 式中出现的每个  $I$  在  $\{1, \dots, p\}$  中. 如果  $I_1, I_2$  是两个这样的  $k$ -指标. 并且设  $I_1 \neq I_2$ , 那么  $(k+1)$ -指标  $(I_1, j)$  与  $(I_2, j)$  就不同, 所以不能抵消, 而由 (119) 式推知 (118) 中的每个系数满足

$$(D_j f_I)(\mathbf{x}) = 0 \quad (\mathbf{x} \in E, p < j \le n). \quad (120)$$

现在在 (118) 式中, 把含  $dx_p$  的项集中到一起, 并把  $\omega$  写成

$$\omega = a + \sum_{I_0} f_{I_0}(\mathbf{x}) dx_{I_0} \wedge dx_p, \quad (121)$$

的形式, 其中  $a \in Y_{p-1}$ , 每个  $I_0$  是  $\{1, \dots, p-1\}$  中的递增  $(k-1)$ -指标, 并且  $I = (I_0, p)$ . 据 (120) 式, 定理 10.38 可以提供合于

$$D_p F_{I_0} = f_{I_0}, \quad D_j F_{I_0} = 0 \quad (p < j \le n). \quad (122)$$

的函数  $F_{I_0} \in \mathcal{C}'(E)$ .

令

$$\beta = \sum_{I_0} F_{I_0}(\mathbf{x}) dx_{I_0} \quad (123)$$

而定义  $\gamma = \omega - (-1)^{k-1} d\beta$ . 因为  $\beta$  是  $(k-1)$ -形式, 从而

$$\begin{aligned}\gamma &= \omega - \sum_{l_0} \sum_{j=1}^{p} (D_j F_{l_0})(x) dx_{l_0} \wedge dx_j \\ &= \alpha - \sum_{l_0} \sum_{j=1}^{p-1} (D_j F_{l_0})(x) dx_{l_0} \wedge dx_j,\end{aligned}$$

它显然在  $Y_{p-1}$  中. 因为  $d\omega=0$ ,  $d^2\beta=0$ , 所以必然  $d\gamma=0$ . 因此, 由归纳假定知道, 在  $E$  中有某个  $(k-1)$ -形式  $\mu$ , 它使  $\gamma=d\mu$ . 如果令  $\lambda=\mu+(-1)^{k-1}\beta$ , 就得到  $\omega=d\lambda$ .

这就由归纳法完成了证明.

**10.40 定理** 固定  $k$ ,  $1 \le k \le n$ . 令  $E \subset \mathbb{R}^n$  是开集, 其中每个闭  $k$ -形式是恰当的. 再令  $T$  是把  $E$  映满开集  $U \subset \mathbb{R}^n$  的 1-1 "映射", 它的逆  $S$  又属于 ".

那么  $U$  中的每个闭  $k$ -形式是  $U$  中的恰当形式.

注意, 由定理 10.39, 每个凸开集  $E$  满足本定理的题设.  $E$  和  $U$  之间的关系可以说成是它们 "等价".

于是在与凸开集 "等价" 的任意集中, 每个闭形式是恰当形式

**证** 令  $\omega$  是  $U$  中的  $k$ -形式且  $d\omega=0$ . 由定理 10.22(c),  $\omega_T$  是  $E$  中的  $k$ -形式且  $d(\omega_T)=0$ . 因此  $\omega_T=d\lambda$ ,  $\lambda$  是  $E$  中的  $(k-1)$ -形式. 由定理 10.23 及再一次使用定理 10.22(c), 得到

$$\omega = (\omega_T)_S = (d\lambda)_S = d(\lambda_S).$$

因  $\lambda_S$  是  $U$  中的  $(k-1)$ -形式, 所以  $\omega$  是  $U$  中的恰当形式.

**10.41 评注** 在应用中, 方格(看定义 2.17)时常是比单形更方便的参数域. 如果我们的全部论述都基于方格, 而不基于单形的话, Stokes 定理的证明中出现的计算将会简单些. (在 Spivak 的书中就是这样做的.) 我们宁愿要单形的理由是, 有向单形边界的定义, 看来是比方格边界的定义容易些也自然些. (见习题 19). 又把集分割成单形(称为"三角剖分")在拓扑学中起着重要作用. 而在拓扑学的某些方面与微分形式之间, 又存在着密切的联系. 这些在 10.35 段内曾暗示过. Singer 及 Thorpe 的书对于这个论题有很好的介绍.

因为每个方格能被三角剖分, 所以可以当做链. 在二维的情形, 这已在例 10.32 中做了; 对于三维的情况, 见习题 18.

Poincaré 引理(定理 10.39)有许多证明的方法. 例如可参看 Spivak 书的第 94 页, 或 Fleming 书的 280 页. 对一些特殊情况的两种简单证法, 在习题 24 及习题 27 中指出来了.

## 向量分析

在本章行将结束时, 我们把前面的材料, 对  $\mathbb{R}^3$  中有关向量分析的定理, 作一点应用. 这些定理是关于微分形式定理的一些特殊情况, 但又时常是以不同的

术语来叙述的. 所以我们面对的任务是把一种说法翻译成另外的说法.

**10.42 向量场** 令  $\mathbf{F} = F_1 \mathbf{e}_1 + F_2 \mathbf{e}_2 + F_3 \mathbf{e}_3$  为开集  $E \subset \mathbb{R}^3$  到  $\mathbb{R}^3$  内的连续映射. 因为  $\mathbf{F}$  给  $E$  的每个点联系上一个向量, 所以有时把  $\mathbf{F}$  叫做向量场, 特别在物理中是如此. 联系着每个这样的  $\mathbf{F}$ , 有一个 1-形式

$$\lambda_F = F_1 dx + F_2 dy + F_3 dz \quad (124)$$

及一个 2-形式

$$\omega_F = F_1 dy \wedge dz + F_2 dz \wedge dx + F_3 dx \wedge dy. \quad (125)$$

这里以及本章下余各处, 都用惯用的记法  $(x, y, z)$  代替  $(x_1, x_2, x_3)$ .

反之, 显然  $E$  中的每个 1-形式  $\lambda$ , 必定是  $E$  中某个向量场  $\mathbf{F}$  的  $\lambda_F$ , 并且每个 2-形式, 必是某个  $\mathbf{F}$  的  $\omega_F$ . 因此, 在  $\mathbb{R}^3$  中 1-形式及 2-形式的研究, 就是这样与向量场的研究共同发展的.

如果  $u \in \mathcal{C}^1(E)$  是实函数, 那么, 它的梯度

$$\nabla u = (D_1 u) \mathbf{e}_1 + (D_2 u) \mathbf{e}_2 + (D_3 u) \mathbf{e}_3$$

是  $E$  中向量场的一个例子.

今设  $\mathbf{F}$  是  $E$  中的  $\mathcal{C}^1$  类的向量场. 它的旋度  $\nabla \times \mathbf{F}$  是用

$$\begin{aligned} \nabla \times \mathbf{F} = & (D_2 F_3 - D_3 F_2) \mathbf{e}_1 + (D_3 F_1 - D_1 F_3) \mathbf{e}_2 \\ & + (D_1 F_2 - D_2 F_1) \mathbf{e}_3 \end{aligned}$$

定义的,  $E$  中的向量场, 而它的散度  $\nabla \cdot \mathbf{F}$  是在  $E$  中由

$$\nabla \cdot \mathbf{F} = D_1 F_1 + D_2 F_2 + D_3 F_3$$

定义的实函数.

这些量有各种物理解释. 至于它们的细节, 介绍大家去看 O. D. Kellogg 的书.

下面是梯度、散度和旋度之间的某些联系.

**10.43 定理** 设  $E$  是  $\mathbb{R}^3$  中的开集,  $u \in \mathcal{C}^2(E)$ ,  $\mathbf{G}$  是  $E$  中  $\mathcal{C}^1$  类的向量场.

(a) 如果  $\mathbf{F} = \nabla u$ , 那么  $\nabla \times \mathbf{F} = \mathbf{0}$

(b) 如果  $\mathbf{F} = \nabla \times \mathbf{G}$ , 那么  $\nabla \cdot \mathbf{F} = 0$

此外, 如  $E$  能  $\mathcal{C}^1$  等价于凸集, 那么 (a) 及 (b) 的逆命题也成立, 其中要假定  $\mathbf{F}$  是  $E$  中的  $\mathcal{C}^1$  类的向量场:

(a') 如果  $\nabla \times \mathbf{F} = \mathbf{0}$ , 那么  $\mathbf{F}$  是某个  $u \in \mathcal{C}^2(E)$  的梯度:  $\mathbf{F} = \nabla u$ .

(b') 如果  $\nabla \cdot \mathbf{F} = 0$ , 那么  $\mathbf{F}$  是  $E$  中某个  $\mathcal{C}^1$  类向量场  $\mathbf{G}$  的旋度场:  $\mathbf{F} = \nabla \times \mathbf{G}$

证 如果把  $\nabla u$ ,  $\nabla \times \mathbf{F}$  及  $\nabla \cdot \mathbf{F}$  的定义与 (124) 式及 (125) 式所给的微分形式  $\lambda_F$  及  $\omega_F$  相比较, 就得到下面的四个命题:

$$\mathbf{F} = \nabla u \quad \text{当且仅当} \quad \lambda_F = du,$$

$$\begin{aligned}\nabla \times \mathbf{F} &= 0 & \text{当且仅当} & \quad d\lambda_F = 0, \\ \mathbf{F} &= \nabla \times \mathbf{G} & \text{当且仅当} & \quad \omega_F = d\lambda_G, \\ \nabla \cdot \mathbf{F} &= 0 & \text{当且仅当} & \quad d\omega_F = 0.\end{aligned}$$

现在, 如果  $\mathbf{F} = \nabla u$ , 那么  $\lambda_F = du$ , 所以  $d\lambda_F = d^2 u = 0$ . (定理 10.20), 这表示  $\nabla \times \mathbf{F} = \mathbf{0}$ . 于是(a)获证.

至于(a'), 题设等于说在  $E$  中  $d\lambda_F = 0$ . 据定理 10.40, 有某个 0-形式  $u$ , 使  $\lambda_F = du$ . 因此,  $\mathbf{F} = \nabla u$ .

(b)和(b')的证明顺着完全一样的模式进行.

### 10.44 体积元素 $k$ 形式

$$dx_1 \wedge \cdots \wedge dx_k$$

叫做  $R^k$  中的体积元素. 体积元素时常记作  $dV$  (如果希望明显地指出维数时, 就记成  $dV_k$ ), 当  $\Phi$  是  $R^k$  中的正向  $k$ -曲面, 而  $f$  是  $\Phi$  的值域上的连续函数时, 便用

$$\int_{\Phi} f(x) dx_1 \wedge \cdots \wedge dx_k = \int_{\Phi} f dV \quad (126)$$

这个记号.

用这个术语的理由非常简单: 设  $D$  是  $R^k$  中的参数域, 如果  $\Phi$  是  $D$  到  $R^k$  中的 1-1 映射, 并带有正的函数行列式  $J_{\Phi}$ , 那么, 据(35)式及定理 10.9, (126)式的左端就是

$$\int_D f(\Phi(u)) J_{\Phi}(u) du = \int_{\Phi(D)} f(x) dx.$$

特别当  $f=1$  时, (126)式便确定  $\Phi$  的体积. 我们在(36)式中已经见过它的一个特殊情形.

关于  $dV_2$ , 常用记号  $dA$ .

**10.45 Green 定理** 设  $E$  是  $R^2$  中的开集,  $\alpha \in \mathcal{C}'(E)$ ,  $\beta \in \mathcal{C}'(E)$ ,  $\Omega$  是  $E$  的闭子集, 并且  $\Omega$  有 10.31 段中所说的正向边界  $\partial\Omega$ . 那么

$$\int_{\partial\Omega} (\alpha dx + \beta dy) = \int_{\Omega} \left( \frac{\partial \beta}{\partial x} - \frac{\partial \alpha}{\partial y} \right) dA. \quad (127)$$

证 令  $\lambda = \alpha dx + \beta dy$ , 于是

$$\begin{aligned}d\lambda &= (D_2 \alpha) dy \wedge dx + (D_1 \beta) dx \wedge dy \\ &= (D_1 \beta - D_2 \alpha) dA.\end{aligned}$$

所以(127)式无异于

$$\int_{\partial\Omega} \lambda = \int_{\Omega} d\lambda.$$

据定理 10.33, 上式成立.

取  $\alpha(x, y) = -y$  而  $\beta(x, y) = x$ , (127) 式就变成  $\Omega$  的面积

$$\frac{1}{2} \int_{\partial \Omega} (x dy - y dx) = A(\Omega). \quad (128)$$

取  $\alpha = 0$ ,  $\beta = x$ , 就得一个类似的公式. 例题 10.12(b) 含有它的一个特殊情况.

**10.46  $R^3$  中的面积元素** 令  $\Phi$  是  $R^3$  中的  $C^1$  类 2-曲面, 其参数域  $D \subset R^2$ . 给每点  $(u, v) \in D$  结合一个向量

$$N(u, v) = \frac{\partial(y, z)}{\partial(u, v)} e_1 + \frac{\partial(z, x)}{\partial(u, v)} e_2 + \frac{\partial(x, y)}{\partial(u, v)} e_3. \quad (129)$$

(129) 式中的诸函数行列式与方程

$$(x, y, z) = \Phi(u, v). \quad (130)$$

相对应.

如果  $f$  是  $\Phi(D)$  上的连续函数,  $f$  在  $\Phi$  上的面积分就定义为

$$\int_{\Phi} f dA = \int_{D} f(\Phi(u, v)) |N(u, v)| \, du \, dv. \quad (131)$$

特别当  $f=1$  时就得到  $\Phi$  的面积, 即

$$A(\Phi) = \int_{D} |N(u, v)| \, du \, dv. \quad (132)$$

下面的讨论, 说明 (131) 式及其特殊情况 (132) 式是合理的定义. 它又刻画了向量  $N$  的几何特征.

设  $\Phi = \varphi_1 e_1 + \varphi_2 e_2 + \varphi_3 e_3$ , 固定一点  $p_0 = (u_0, v_0) \in D$ , 令  $N = N(p_0)$ , 并令

$$\alpha_i = (D_1 \varphi_i)(p_0), \quad \beta_i = (D_2 \varphi_i)(p_0) \quad (i = 1, 2, 3). \quad (133)$$

然后让  $T \in L(R^2, R^3)$  是由

$$T(u, v) = \sum_{i=1}^{3} (\alpha_i u + \beta_i v) e_i \quad (134)$$

给出的线性变换. 注意, 按照定义 9.11,  $T = \Phi'(p_0)$ .

现在假定  $T$  的秩是 2. (如果  $T$  的秩是 1 或 0, 那么  $N=0$ , 下面提到的切平面就退化为一条线或一个点了), 于是仿射映射

$$(u, v) \to \Phi(p_0) + T(u, v)$$

的值域是一个平面  $\Pi$ , 叫做  $\Phi$  在  $p_0$  的切平面 [有人爱把  $\Pi$  叫做在  $\Phi(p_0)$  的切平

面，而不说在  $p_0$  的切平面；如果  $\Phi$  不是一对一的，这就要陷入困难了].

把(133)式用于(129)式中，就得到

$$N = (\alpha_2\beta_3 - \alpha_3\beta_2)e_1 + (\alpha_3\beta_1 - \alpha_1\beta_3)e_2 + (\alpha_1\beta_2 - \alpha_2\beta_1)e_3. \quad (135)$$

而(134)说明

$$Te_1 = \sum_{i=1}^{3} \alpha_i e_i, \quad Te_2 = \sum_{i=1}^{3} \beta_i e_i. \quad (136)$$

直接计算就得到

$$N \cdot (Te_1) = 0 = N \cdot (Te_2). \quad (137)$$

因此  $N$  垂直于  $\Pi$ . 所以把它叫做  $\Phi$  在  $p_0$  的法线.

再据(135)式及(136)式进行直接计算，能证明  $N$  的第二个性质： $R^3$  中把  $\{e_1, e_2, e_3\}$  变成  $\{Te_1, Te_2, N\}$  的线性变换的行列式是  $|N|^2 > 0$  (习题 30). 于是 3-单形

$$[0, Te_1, Te_2, N] \quad (138)$$

是正向的.

下面用到  $N$  的第三个性质，它是前两性质的推论：上面所提到的以  $|N|^2$  为值的行列式，是用  $[0, Te_1]$ ,  $[0, Te_2]$ ,  $[0, N]$  作棱的平行六面体的体积. 由(137),  $[0, N]$  垂直于其他两棱. 所以，以

$$0, Te_1, Te_2, T(e_1 + e_2) \quad (139)$$

为顶点的平行四边形的面积是  $|N|$

这个平行四边形是  $R^2$  中单位正方形在  $T$  之下的象. 如果  $E$  是  $R^2$  中的矩形，(由  $T$  的线性)能推知平行四边形  $T(E)$  的面积是

$$A(T(E)) = |N| A(E) = \int_E |N(u_0, v_0)| \, dudv. \quad (140)$$

我们断定，当  $\Phi$  是仿射映射时，(132)式正确. 为了证明定义(132)在一般情况下正确，把  $D$  分成许多小矩形，在每个小矩形中取一点  $(u_0, v_0)$ ，并在每个矩形内用相应的切平面代替  $\Phi$ . 通过(140)所得到的诸平行四边形面积之和，就是  $A(\Phi)$  的一个近似值. 最后，能够从(132)式，用阶跃函数逼近  $f$  的办法来证明(131)式的正确性.

**10.47 例** 设  $0 < a < b$ ,  $a, b$  都是固定的.  $K$  是由

$$0 \le t \le a, \quad 0 \le u \le 2\pi, \quad 0 \le v \le 2\pi$$

确定的 3-方格. 方程

$$x = t \cos u$$

$$\begin{aligned} y &= (b + t \sin u) \cos v \\ z &= (b + t \sin u) \sin v \end{aligned} \quad (141)$$

描写的是把  $R^3$  映到  $R^3$  内的映射  $\Psi$ , 它在  $K$  的内部是 1-1 的, 因此  $\Psi(K)$  是个实心环, 它的函数行列式是

$$J_\Psi = \frac{\partial(x, y, z)}{\partial(t, u, v)} = t(b + t \sin u),$$

它在  $K$  上取正值, 除非是在面  $t=0$  上. 如果在  $K$  上将  $J_\Psi$  积分, 就得到实心环的体积

$$\text{vol}(\Psi(K)) = 2\pi^2 a^2 b$$

今考虑 2-链  $\Phi = \partial\Psi$  (看习题 19),  $\Psi$  把  $K$  的两个面  $u=0$  及  $u=2\pi$  映满同一个柱面带, 但指向相反.  $\Psi$  把面  $v=0$  及  $v=2\pi$  映满同一个圆盘, 但指向相反.  $\Psi$  把面  $t=0$  映满一个圆, 这圆要把 0 算成 2-链  $\partial\Psi$  的一部分. (相应的函数行列式为 0). 所以  $\Phi$  只不过是当在 (141) 中令  $t=a$  时, 以正方域  $0 \le u \le 2\pi$ ,  $0 \le v \le 2\pi$  为参数域  $D$ , 所得到的 2-曲面.

按照 (129) 及 (141),  $\Phi$  在  $(u, v) \in D$  的法线是向量

$$N(u, v) = a(b + a \sin u) n(u, v),$$

这里

$$n(u, v) = (\cos u) e_1 + (\sin u \cos v) e_2 + (\sin u \sin v) e_3.$$

因为  $|n(u, v)| = 1$ , 所以得到  $|N(u, v)| = a(b + a \sin u)$ , 如果把它在  $D$  上积分, (131) 式就给出了环面的面积

$$A(\Phi) = 4\pi^2 ab$$

如果把  $N = N(u, v)$  看成是从  $\Phi(u, v)$  指向  $\Phi(u, v) + N(u, v)$  的一个有向线段, 那么  $N$  指向外, 这就是说, 从  $\Psi(K)$  离去. 当  $t=a$  时也如此, 因为  $J_\Psi > 0$ .

例如, 取  $u=v=\frac{\pi}{2}$ ,  $t=a$ . 这给出  $z$  在  $\Psi(K)$  上的最大值, 而对于这样选取的  $(u, v)$ ,  $N = a(b+a)e_3$  指向上方.

**10.48  $R^3$  中 1-形式的积分** 令  $\gamma$  是开集  $E \subset R^3$  中的  $C^1$  曲线, 其参数闭区间为  $[0, 1]$ , 就如 10.42 中那样,  $F$  是  $E$  中的向量场, 再按 (124) 式定义  $\lambda_F$ .  $\lambda_F$  在  $\gamma$  上的积分能按确定的方式写出. 我们现在就来描述这种方式.

对于任何  $u \in [0, 1]$ ,

$$\gamma'(u) = \gamma'_1(u) e_1 + \gamma'_2(u) e_2 + \gamma'_3(u) e_3$$

叫做  $\gamma$  在  $u$  的切向量. 定义  $t=t(u)$  为  $\gamma'(u)$  方向上的单位向量. 于是

$$\gamma'(u) = |\gamma'(u)| t(u).$$

[如果对某个  $u$ ,  $\gamma'(u)=0$ , 则令  $t(u)=e_1$ ; 选用其他的也可以]. 据(35)式,

$$\begin{aligned}\int_{\gamma} \lambda_F &= \sum_{i=1}^{3} \int_{0}^{1} F_i(\gamma(u)) \gamma'_i(u) du \\ &= \int_{0}^{1} F(\gamma(u)) \cdot \gamma'(u) du \\ &= \int_{0}^{1} F(\gamma(u)) \cdot t(u) |\gamma'(u)| du.\end{aligned}\quad (142)$$

定理 6.27 使得有理由把  $|\gamma'(u)| du$  叫做沿着  $\gamma$  的弧长元素. 习惯上把它记作  $ds$ , 而(142)式也就写成

$$\int_{\gamma} \lambda_F = \int \gamma(F \cdot t) ds. \quad (143)$$

的形式.

因为  $t$  是  $\gamma$  的单位切向量,  $F \cdot t$  叫做  $F$  沿着  $\gamma$  的切线分量.

(143)式的右端应该当作(142)式最后一个积分的缩写. 关键是  $F$  在  $\gamma$  的值域上定义, 但  $t$  在  $[0, 1]$  上定义; 所以  $F \cdot t$  必须做适当的解释. 当然, 当  $\gamma$  是 1-1 的时候,  $t(u)$  能换成  $t(\gamma(u))$ , 而这种困难也就不出现了.

**10.49  $R^3$  中 2-形式的积分** 设  $\Phi$  是开集  $E \subset R^3$  中的  $C^1$  类 2-曲面, 其参数域  $D \subset R^2$ .  $F$  为  $E$  中的向量场, 并由(125)式定义  $\omega_F$ . 像在上一段中那样, 我们要给  $\omega_F$  在  $\Phi$  上的积分另找一个表示法.

由(35)式及(129)式.

$$\begin{aligned}\int_{\Phi} \omega_F &= \int_{\Phi} (F_1 dy \wedge dz + F_2 dz \wedge dx + F_3 dx \wedge dy) \\ &= \int_{D} \left\{ (F_1 \circ \Phi) \frac{\partial(y, z)}{\partial(u, v)} + (F_2 \circ \Phi) \frac{\partial(z, x)}{\partial(u, v)} \right. \\ &\quad \left. + (F_3 \circ \Phi) \frac{\partial(x, y)}{\partial(u, v)} \right\} dudv \\ &= \int_{D} F(\Phi(u, v)) \cdot N(u, v) dudv.\end{aligned}$$

今令  $n=n(u, v)$  是  $N(u, v)$  方向上的单位向量. [如果对于某个  $(u, v) \in D$  有  $N(u, v)=0$ , 取  $n(u, v)=e_1$ ]. 于是  $N = |N| n$ , 因此上边最后这个积分变成

$$\int_{D} F(\Phi(u, v)) \cdot n(u, v) |N(u, v)| dudv.$$

据(131)式, 我们最后能把它写成

$$\int_{\Phi} \omega_F = \int_{\partial \Phi} (F \cdot n) dA \quad (144)$$

的形式. 至于  $F \cdot n$  的意义, 10.48 段之末的评注在这里依然适用.

现在我们能够叙述 Stokes 定理的最原始的形式了.

**10.50 Stokes 公式** 设  $F$  是开集  $E \subset \mathbb{R}^3$  中的  $\mathcal{C}^1$  类向量场,  $\Phi$  是  $E$  中的  $\mathcal{C}^1$  类 2-曲面, 那么

$$\int_{\Phi} (\nabla \times F) \cdot n dA = \int_{\partial \Phi} (F \cdot t) ds. \quad (145)$$

证 令  $H = \nabla \times F$ . 那么, 像定理 10.43 的证明中那样, 得到

$$\omega_H = d\lambda_F. \quad (146)$$

因此,

$$\begin{aligned} \int_{\Phi} (\nabla \times F) \cdot n dA &= \int_{\Phi} (H \cdot n) dA = \int_{\Phi} \omega_H \\ &= \int_{\Phi} d\lambda_F = \int_{\partial \Phi} \lambda_F = \int_{\partial \Phi} (F \cdot t) ds. \end{aligned}$$

这里先用了  $H$  的定义, 再用到(144)式, 其中的  $F$  换作  $H$ , 再用(146)式, 然后——主要的一步——用定理 10.33, 最后用到按照明显的方式从曲线推广到 1-链的(143)式.

**10.51 散度定理** 设  $F$  是开集  $E \subset \mathbb{R}^3$  中的  $\mathcal{C}^1$  类向量场,  $\Omega$  是  $E$  的带有正向边界  $\partial \Omega$  (见 10.31 段) 的闭子集. 那么

$$\int_{\Omega} (\nabla \cdot F) dV = \int_{\partial \Omega} (F \cdot n) dA. \quad (147)$$

证 由(125)式

$$d\omega_F = (\nabla \cdot F) dx \wedge dy \wedge dz = (\nabla \cdot F) dV.$$

因此, 根据定理 10.33, 把它用于 2-形式  $\omega_F$ , 再根据(144)式得到

$$\int_{\Omega} (\nabla \cdot F) dV = \int_{\Omega} d\omega_F = \int_{\partial \Omega} \omega_F = \int_{\partial \Omega} (F \cdot n) dA.$$

### 习题

1. 设  $H$  是  $\mathbb{R}^k$  中的紧凸集且其内部不空,  $f \in \mathcal{C}^1(H)$ , 在  $H$  的余集中令  $f(x) = 0$ , 按定义 10.3 定义  $\int_H f$ .

证明  $\int_H f$  与其中  $k$  个积分的施行次序无关.

提示: 像在例题 10.4 中那样, 将  $f$  用  $R^k$  上的连续函数来逼近, 要这些连续函数的支集在  $H$  内.

2. 设  $\varphi_i \in \mathcal{C}(R^1)$  的支集在  $(2^{-i}, 2^{1-i})$  内,  $\int \varphi_i = 1, i = 1, 2, 3, \dots$  令

$$f(x, y) = \sum_{i=1}^{\infty} [\varphi_i(x) - \varphi_{i+1}(x)] \varphi_i(y),$$

那么  $f$  在  $R^2$  上有紧支集, 除了在  $(0, 0)$  以外,  $f$  连续并且

$$\int dy \int f(x, y) dx = 0 \quad \text{而} \quad \int dx \int f(x, y) dy = 1.$$

注意,  $f$  在  $(0, 0)$  的每个邻域无界.

3. (a) 设  $F$  是定理 10.7 所说的, 令  $A = F'(0)$ ,  $F_1(x) = A^{-1}F(x)$ . 那么  $F_1'(0) = I$ . 试证在  $0$  的某邻域内, 对某些本原映射  $G_1, \dots, G_n$ .

$$F_1(x) = G_n \circ G_{n-1} \circ \dots \circ G_1(x).$$

这可以产生定理 10.7 的另一种叙述法:

$$F(x) = F'(0) G_n \circ G_{n-1} \circ \dots \circ G_1(x).$$

(b) 证明把  $R^2$  映满  $R^2$  的映射  $(x, y) \to (y, x)$ , 在原点的任何邻域内不能是任何两个本原映射的复合. (这说明这些对换  $B_i$  不能从定理 10.7 的叙述中略去).

4. 对于  $(x, y) \in R^2$ , 定义

$$F(x, y) = (e^x \cos y - 1, e^x \sin y).$$

试证  $F = G_2 \circ G_1$ , 这里

$$G_1(x, y) = (e^x \cos y - 1, y)$$

$$G_2(u, v) = (u, (1 + u) \tan v)$$

在  $(0, 0)$  的某邻域内是本原映射.

计算  $G_1, G_2, F$  在  $(0, 0)$  的函数行列式. 定义

$$H_2(x, y) = (x, e^x \sin y)$$

而求

$$H_1(u, v) = (h(u, v), v)$$

使得在  $(0, 0)$  的某邻域内  $F_1 = H_1 \circ H_2$ .

5. 设  $K$  是任意度量空间的紧子集, 叙述并证明与定理 10.8 类似的定理(把定理 10.8 的证明中出现的函数  $\varphi_i$  换成第 4 章习题 22 中所构造的那种函数).

6. 证明定理 10.8 中的函数  $\psi_i$  能被换成可微的, 甚至是无穷次可微的, 借

以加强定理 10.8 的结论. (在构造辅助函数  $\varphi$  时用第 8 章习题 1).

7. (a) 证明单形  $Q^k$  是  $R^k$  的含有  $0, e_1, \dots, e_k$  的最小凸子集.

(b) 证明仿射映射把凸集变为凸集.

8. 设  $H$  是  $R^2$  中以  $(1, 1), (3, 2), (4, 5), (2, 4)$  为顶点的平行四边形. 求把  $(0, 0)$  变为  $(1, 1)$ ,  $(1, 0)$  变为  $(3, 2)$ ,  $(0, 1)$  变为  $(2, 4)$  的仿射变换  $T$ . 证明  $J_T = 5$ . 用  $T$  把积分

$$\alpha = \int_H e^{x+y} dx dy$$

变成  $I^2$  上的积分以求  $\alpha$ .

9. 在矩形

$$0 \le r \le a, \quad 0 \le \theta \le 2\pi$$

上用方程

$$x = r \cos \theta, \quad y = r \sin \theta$$

定义  $(x, y) = T(r, \theta)$ . 证明  $T$  把这个矩形映满以  $(0, 0)$  为中心, 以  $a$  为半径的闭圆盘  $D$ ,  $T$  在矩形内部是 1-1 的,  $J_T(r, \theta) = r$ . 如果  $f \in \mathcal{C}(D)$ , 证明在极坐标下积分的公式是:

$$\int_D f(x, y) dx dy = \int_0^a \int_0^{2\pi} f(T(r, \theta)) r dr d\theta.$$

提示: 设  $D_0$  为  $D$  的内部减去从  $(0, 0)$  到  $(0, a)$  这段闭区间. 就这样情形, 定理 10.9 便能用于支集在  $D_0$  内的连续函数  $f$ . 再像例题 10.4 那样把这个限制去掉.

10. 在习题 9 中令  $a \to \infty$ , 证明: 对于  $|x| + |y| \to \infty$  时下降得足够快的连续函数  $f$  来说,

$$\int_{R^2} f(x, y) dx dy = \int_0^\infty \int_0^{2\pi} f(T(r, \theta)) r dr d\theta,$$

(做出更精确的阐述.) 把这个公式用于函数

$$f(x, y) = \exp(-x^2 - y^2)$$

以导出第 8 章的公式 (101).

11. 在带形区域

$$0 < s < \infty, \quad 0 < t < 1$$

上, 令  $u = s - st$ ,  $v = st$  来定义  $(u, v) = T(s, t)$ . 证明  $T$  是把这带形区域映满  $R^2$  中正象限 (即  $u > 0$ ,  $v > 0$ )  $Q$  的 1-1 映射. 证明  $J_T(s, t) = s$

对于  $x > 0$ ,  $y > 0$ , 在  $Q$  上积分

$$u^{x-1} e^{-u} v^{y-1} e^{-v}$$

用定理 10.9 把这个积分变成带形区域上的积分, 再按这种方法导出第 8 章的公式(96)来.

(为了这里的应用, 必须把定理 10.9 推广到能包括某些广义积分. 请读者先做这项推广).

12. 令  $I^k$  是一切合于  $0 \le u_i \le 1$  ( $i = 1, \dots, k$ ) 的  $u = (u_1, \dots, u_k) \in R^k$  的集;  $Q^k$  是合于  $x_i \ge 0$ ,  $\sum x_i \le 1$  的一切  $x = (x_1, \dots, x_k) \in R^k$  的集. ( $I^k$  是单位立方体;  $Q^k$  是  $R^k$  中的标准单形). 用

$$\begin{aligned} x_1 &= u_1 \\ x_2 &= (1 - u_1)u_2 \\ &\dots \dots \dots \dots \dots \dots \\ x_k &= (1 - u_1)\cdots(1 - u_{k-1})u_k \end{aligned}$$

定义  $x = T(u)$ . 证明

$$\sum_{i=1}^{k} x_i = 1 - \prod_{i=1}^{k} (1 - u_i).$$

证明  $T$  把  $I^k$  映满  $Q^k$ ,  $T$  在  $I^k$  内部是 1-1 的, 它的逆  $S$  定义在  $Q^k$  内部, 而由  $u_1 = x_1$  及

$$u_i = \frac{x_i}{1 - x_1 - \cdots - x_{i-1}}$$

$(i=2, \dots, k)$  确定. 证明

$$J_T(u) = (1 - u_1)^{k-1} (1 - u_2)^{k-2} \cdots (1 - u_{k-1}),$$

及

$$J_S(x) = [(1-x_1)(1-x_1-x_2)\cdots(1-x_1-\cdots-x_{k-1})]^{-1}.$$

13. 设  $r_1, \dots, r_k$  为非负整数, 证明

$$\int_{Q^k} x_1^{r_1} \cdots x_k^{r_k} dx = \frac{r_1! \cdots r_k!}{(k+r_1+\cdots+r_k)!}.$$

提示: 用习题 12, 定理 10.9 及 8.20.

注意, 特殊情况  $r_1 = \dots = r_k = 0$  表示  $Q^k$  的体积是  $1/k!$ .

14. 证明公式(46).

15. 设  $\omega$  及  $\lambda$  分别为  $k$ -形式及  $m$ -形式. 证明

$$\omega \wedge \lambda = (-1)^{km} \lambda \wedge \omega.$$

16. 设  $k \ge 2$ ,  $\sigma = [p_0, p_1, \dots, p_k]$  是有向仿射  $k$ -单形, 直接从边界算子  $\partial$  的定义证明  $\partial^2 \sigma = 0$ . 由此推证对每个链  $\Psi$  必然  $\partial^2 \Psi = 0$ .

提示: 首先对  $k=2$ ,  $k=3$  定向. 一般来说, 如果  $i < j$ , 令  $\sigma_{ij}$  为从  $\sigma$  中删去

$p_i$  及  $p_j$  所得的  $(k-2)$ -单形. 证明每个  $\sigma_{ij}$  在  $\partial^2 \sigma$  中出现两次, 且符号相反.

17. 令  $J^2 = \tau_1 + \tau_2$ , 这里

$$\tau_1 = [\mathbf{0}, \mathbf{e}_1, \mathbf{e}_1 + \mathbf{e}_2], \quad \tau_2 = -[\mathbf{0}, \mathbf{e}_2, \mathbf{e}_2 + \mathbf{e}_1].$$

阐明为什么把  $J^2$  叫做  $R^2$  中的正向单位正方形是合理的. 证明  $\partial J^2$  是四个仿射 1-单形的和. 找出这些 1-单形来.  $\partial(\tau_1 - \tau_2)$  是什么?

18. 考虑  $R^3$  中的有向仿射 3-单形

$$\sigma_1 = [\mathbf{0}, \mathbf{e}_1, \mathbf{e}_1 + \mathbf{e}_2, \mathbf{e}_1 + \mathbf{e}_2 + \mathbf{e}_3]$$

证明  $\sigma_1$  (当作线性变换) 的行列式是 1. 于是  $\sigma_1$  是正向的.

令  $\sigma_2, \dots, \sigma_6$  是如下得到的五个另外的有向 3-单形: 除去  $(1, 2, 3)$  以外 1, 2, 3 还有五种不同的排列  $(i_1, i_2, i_3)$ . 每个  $(i_1, i_2, i_3)$  联系一个单形

$$s(i_1, i_2, i_3)[\mathbf{0}, \mathbf{e}_{i_1}, \mathbf{e}_{i_1} + \mathbf{e}_{i_2}, \mathbf{e}_{i_1} + \mathbf{e}_{i_2} + \mathbf{e}_{i_3}],$$

这里  $s$  是在行列式定义里出现的符号 (这就是在习题 17 中怎样从  $\tau_1$  得到  $\tau_2$  的).

证明  $\sigma_2, \dots, \sigma_6$  是正向的

令  $J^3 = \sigma_1 + \dots + \sigma_6$ , 那么可以把  $J^3$  叫做  $R^3$  中的正向单位立方体.

证明  $\partial J^3$  是 12 个有向仿射 2-单形之和 (这些是覆盖单位立方体  $I^3$  曲面的 12 个三角形).

证明  $\mathbf{x} = (x_1, x_2, x_3)$  在  $\sigma_1$  的值域中当且仅当  $0 \le x_3 \le x_2 \le x_1 \le 1$ .

证明  $\sigma_1, \dots, \sigma_6$  的值域内部不交, 而它们的并能够覆盖  $I^3$ . (与习题 13 比较; 注意  $3! = 6$ ).

19. 令  $J^2$  及  $J^3$  的定义如习题 17 及 18 中那样. 定义

$$B_{01}(u, v) = (0, u, v), \quad B_{11}u, v = (1, u, v),$$

$$B_{02}(u, v) = (u, 0, v), \quad B_{12}u, v = (u, 1, v),$$

$$B_{03}(u, v) = (u, v, 0), \quad B_{13}u, v = (u, v, 1).$$

这些都是仿射映射, 并把  $R^2$  映入  $R^3$  内.

令  $\beta_n = B_n(J^2)$ , 其中  $r=0, 1, i=1, 2, 3$ . 每个  $\beta_n$  是一个仿射有向 2-链 (看 10.30 段). 试证

$$\partial J^3 = \sum_{i=1}^{3} (-1)^i (\beta_{0i} - \beta_{1i}),$$

与习题 18 一致.

20. 说明公式

$$\int_{\partial} f d\omega = \int_{\partial} f \omega - \int_{\partial} (df) \wedge \omega$$

成立的条件, 并证明它推广了分部积分公式.

提示:  $d(f\omega) = (df) \wedge \omega + f d\omega$ .

21. 像在例题 10.36 中那样, 考虑  $R^2 - \{0\}$  中的 1-形式

$$\eta = \frac{xdy - ydx}{x^2 + y^2}.$$

(a) 施行导出(113)式的计算, 并证明  $d\eta = 0$ .

(b) 令  $\gamma(t) = (r\cos t, r\sin t)$ ,  $r$  是某个大于 0 的数, 又令  $\Gamma$  是在  $R^2 - \{0\}$  中的, 以  $[0, 2\pi]$  为参数域并且使  $\Gamma(0) = \Gamma(2\pi)$  的 "闭" 曲线, 又使闭区间  $[r(t), \Gamma(t)]$  对任何  $t \in [0, 2\pi]$  不包含  $0$ . 证明

$$\int_{\Gamma} \eta = 2\pi.$$

提示: 对于  $0 \le t \le 2\pi$ ,  $0 \le u \le 1$ , 定义

$$\Phi(t, u) = (1 - u)\Gamma(t) + u\gamma(t).$$

于是  $\Phi$  的  $R^2 - \{0\}$  中的 2-曲面. 它的参数域是上面指出的矩形. 由于抵消(像例题 10.32 中那样),

$$\partial\Phi = \Gamma - \gamma.$$

因  $d\eta = 0$ , 用 Stokes 定理推出

$$\int_{\Gamma} \eta = \int_{\gamma} \eta.$$

(c) 取  $\Gamma(t) = (a\cos t, b\sin t)$ , 其中正数  $a, b$  是固定的. 用(b)条证明

$$\int_{0}^{2\pi} \frac{ab}{a^2 \cos^2 t + b^2 \sin^2 t} dt = 2\pi.$$

(d) 证明在  $x \neq 0$  的任意凸开集中

$$\eta = d\left(\arctan \frac{y}{x}\right),$$

而在  $y \neq 0$  的任意凸开集中

$$\eta = d\left(-\arctan \frac{x}{y}\right).$$

阐明为什么虽然  $\eta$  在  $R^2 - \{0\}$  中不是恰当的, 但这还能说明记号  $\eta = d\theta$  是合理的.

(e) 证明(b)能由(d)导出.

(f) 设  $\Gamma$  是  $R^2 - \{0\}$  中的任意闭 "闭" 曲线, 证明

$$\frac{1}{2\pi} \int_{\Gamma} \eta = \text{Ind}(\Gamma).$$

(曲线的指标的定义见第 8 章习题 23).

22. 像在例题 10.37 中那样, 在  $R^3 - \{0\}$  中用

$$\zeta = \frac{x dy \wedge dz + y dz \wedge dx + z dx \wedge dy}{r^3}$$

来定义  $\zeta$ , 这里  $r = (x^2 + y^2 + z^2)^{\frac{1}{2}}$ , 设  $D$  为矩形域  $0 \le u \le \pi$ ,  $0 \le v \le 2\pi$ . 又令  $\Sigma$  是  $R^3$  中以  $D$  为参数域的 2-曲面.

$$x = \sin u \cos v, \quad y = \sin u \sin v, \quad z = \cos u.$$

(a) 证明在  $R^3 - \{0\}$  中  $d\zeta = 0$ .

(b) 令参数域为  $E \subset D$ , 那么曲面  $S$  只是  $\Sigma$  的一部分, 叫做  $\Sigma$  的约束. 证明

$$\int_S \zeta = \int_E \sin u \, du \, dv = A(S),$$

像 10.43 段那样, 这里的  $A$  指的是面积. 注意, 这就把 (115) 式作为特殊情况包含了进来.

(c) 设  $g, h_1, h_2, h_3$  是  $[0, 1]$  上的  $C^1$  函数,  $g > 0$ , 令  $(x, y, z) = \Phi(s, t)$  是以  $I^2$  为参数域而由

$$x = g(t)h_1(s), \quad y = g(t)h_2(s), \quad z = g(t)h_3(s).$$

定义的 2-曲面  $\Phi$ . 直接从 (35) 式证明

$$\int_{\Phi} \zeta = 0.$$

注意,  $\Phi$  的值域的形状: 对固定的  $s$ ,  $\Phi(s, t)$  历经通过  $0$  的某直线上的一个开区间. 因此  $\Phi$  的值域在以原点为顶点的一个“锥”上.

(d) 令  $E$  为  $D$  中的闭矩形, 它的边与  $D$  的边平行. 假定  $f \in C^1(D)$ ,  $f > 0$ . 令  $\Omega$  是以  $E$  为参数域, 而由

$$\Omega(u, v) = f(u, v) \Sigma(u, v)$$

确定的二曲面. 像在 (b) 中那样定义  $S$ , 证明

$$\int_{\Omega} \zeta = \int_S \zeta = A(S).$$

(因  $S$  是  $\Omega$  到单位球内的“径向射影”, 这从结果来看, 把  $\int_{\Omega} \zeta$  叫做  $\Omega$  的值域在原点所对的“立体角”是合理的.)

提示: 考虑由

$$\Psi(t, u, v) = [1 - t + tf(u, v)]\Sigma(u, v)$$

定出的 3-曲面  $\Psi$ , 这里的  $(u, v) \in E$ ,  $0 \le t \le 1$ . 对于固定的  $v$ , 映射

$$(t, u) \to \Psi(t, u, v)$$

是 2-曲面  $\Phi$ , (c) 可以用于  $\Phi$ , 这样来证明  $\int_{\Phi} \zeta = 0$ .  $u$  固定时也是这样. 由(a)及 Stokes 定理

$$\int_{\partial \Psi} \zeta = \int_{\Phi} d\zeta = 0.$$

(e) 如习题 21, 取

$$\eta = \frac{xdy - ydx}{x^2 + y^2},$$

令  $\lambda = -(z/r)\eta$ . 于是  $\lambda$  是开集  $V \subset \mathbb{R}^3$  中的 1-形式,  $V$  中  $x^2 + y^2 > 0$ . 证明

$$\zeta = d\lambda.$$

借以证明  $\zeta$  在  $V$  中是恰当的.

(f) 不要用(c), 从(e)导出(d).

提示: 首先假定在  $E$  上  $0 < u < \pi$ . 由(e)

$$\int_{\Omega} \zeta = \int_{\partial \Omega} \lambda \quad \text{且} \quad \int_{\Sigma} \zeta = \int_{\partial \Sigma} \lambda.$$

用习题 21(d), 并注意  $z/r$  在  $\Sigma(u, v)$  与  $\Omega(u, v)$  上相同, 以证明  $\lambda$  的这两个积分相等.

(g) 是否在过原点的每条直线的余集中  $\zeta$  都是恰当的?

23. 固定  $n$ . 对  $1 \le k \le n$  定义  $r_k = (x_1^2 + \cdots + x_k^2)^{\frac{1}{2}}$ , 令  $E_k$  是使  $r_k > 0$  的一切  $x \in \mathbb{R}^n$  的集, 又令  $\omega_k$  是  $E_k$  中由

$$\omega_k = (r_k)^{-k} \sum_{i=1}^{k} (-1)^{i-1} x_i dx_1 \wedge \cdots \wedge dx_{i-1} \wedge dx_{i+1} \wedge \cdots \wedge dx_k$$

确定的  $(k-1)$ -形式.

注意, 按习题 21 及习题 22 的名词来说,  $\omega_2 = \eta$ ,  $\omega_3 = \zeta$ . 再注意

$$E_1 \subset E_2 \subset \cdots \subset E_n = \mathbb{R}^n - \{0\}.$$

(a) 证明在  $E_k$  中  $d\omega_k = 0$ .

(b) 对于  $k=2, \dots, n$ , 证明

$$\omega_k = d(f_k \omega_{k-1}) = (df_k) \wedge \omega_{k-1},$$

然后借此证明  $\omega_k$  在  $E_{k-1}$  中是恰当的, 这里的  $f_k(x) = (-1)^k g_k(x_k/r_k)$  而

$$g_k(t) = \int_{-1}^{t} (1-s^2)^{(k-3)/2} ds \quad (-1 < t < 1).$$

提示:  $f_k$  满足微分方程

$$\mathbf{x} \cdot (\nabla f_k)(\mathbf{x}) = 0$$

且

$$(D_k f_k)(\mathbf{x}) = \frac{(-1)^k (r_{k-1})^{k-1}}{(r_k)^k}.$$

(c)  $\omega_n$  在  $E_n$  中是否为恰当的.

(d) 注意, (b) 是习题 22(e) 的推广. 试把习题 21 及习题 22 中一些其他的论断推广到  $\omega_n$ ,  $n$  是任意的.

24. 令  $\omega = \sum a_i(\mathbf{x}) dx_i$  是凸开集  $E \subset \mathbb{R}^n$  中的  $\mathcal{C}^1$  类 1-形式. 假设  $d\omega = 0$ , 而按照下面的提纲证明  $\omega$  在  $E$  中是恰当的:

固定  $\mathbf{p} \in E$ . 定义

$$f(\mathbf{x}) = \int_{[\mathbf{p}, \mathbf{x}]} \omega \quad (\mathbf{x} \in E),$$

把 Stokes 定理用于  $E$  中的仿射有向 2-单形  $[\mathbf{p}, \mathbf{x}, \mathbf{y}]$ . 对于  $\mathbf{x} \in E$ ,  $\mathbf{y} \in E$  导出

$$f(\mathbf{y}) - f(\mathbf{x}) = \sum_{i=1}^{n} (y_i - x_i) \int_{0}^{1} a_i((1-t)\mathbf{x} + t\mathbf{y}) dt.$$

因之  $(D_i f)(\mathbf{x}) = a_i(\mathbf{x})$ .

25. 假定  $\omega$  是开集  $E \subset \mathbb{R}^n$  中的, 能使  $E$  中的每个闭曲线  $\gamma$  合于

$$\int_{\gamma} \omega = 0$$

的  $\mathcal{C}^1$  类的 1-形式. 模仿习题 24 中草拟的部分论证, 来证明  $\omega$  在  $E$  内恰当.

26. 假定  $\omega$  是  $\mathbb{R}^3 - \{\mathbf{0}\}$  中的  $\mathcal{C}^1$  类 1-形式且  $d\omega = 0$ . 证明  $\omega$  在  $\mathbb{R}^3 - \{\mathbf{0}\}$  中是恰当的.

提示:  $\mathbb{R}^3 - \{\mathbf{0}\}$  中的每个闭连续可微曲线是  $\mathbb{R}^3 - \{\mathbf{0}\}$  的某个 2-曲面的边界. 应用 Stokes 定理及习题 25.

27. 令  $E$  是  $\mathbb{R}^3$  中的开 3-方格, 它的棱与坐标轴平行. 设  $(a, b, c) \in E$ , 而对  $i=1, 2, 3$ ,  $f_i \in \mathcal{C}^1(E)$ ,

$$\omega = f_1 dy \wedge dz + f_2 dz \wedge dx + f_3 dx \wedge dy,$$

并假定在  $E$  中  $d\omega = 0$ . 定义

$$\lambda = g_1 dx + g_2 dy,$$

这里当  $(x, y, z) \in E$  时,

$$g_1(x, y, z) = \int_c^z f_2(x, y, s) ds - \int_b^y f_3(x, t, c) dt,$$

$$g_2(x, y, z) = - \int_c^x f_1(x, y, s) ds.$$

证明在  $E$  中  $d\lambda = \omega$ .

计算当  $\omega = \zeta$  时的这些积分值, 因而求出习题 22(e) 中出现的形式  $\lambda$ .

28. 固定  $b > a > 0$ , 对  $a \le r \le b$ ,  $0 \le \theta \le 2\pi$  定义

$$\Phi(r, \theta) = (r \cos \theta, r \sin \theta).$$

( $\Phi$  的值域是  $R^2$  中的圆环.) 令  $\omega = x^3 dy$ , 计算

$$\int_{\Phi} d\omega \text{ 及 } \int_{\partial\Phi} \omega$$

来验证它们相等.

29. 证明存在函数  $a$ , 它有定理 10.38 证明中用到的那些性质, 并证明所得函数  $F$  是  $C^1$  类的. (如果  $E$  是开方格或开球, 这些论断就都是无关紧要的了. 因为  $a$  可取作常数. 参考定理 9.42.)

30. 设  $N$  是由 (135) 式给出的向量. 证明

$$\det \begin{bmatrix} \alpha_1 & \beta_1 & \alpha_2 \beta_3 - \alpha_3 \beta_2 \\ \alpha_2 & \beta_2 & \alpha_3 \beta_1 - \alpha_1 \beta_3 \\ \alpha_3 & \beta_3 & \alpha_1 \beta_2 - \alpha_2 \beta_1 \end{bmatrix} = |N|^2.$$

再验证方程 (137).

31. 令  $E \subset R^3$  是开集, 假定  $g \in C^1(E)$ ,  $h \in C^1(E)$ , 并考虑向量场

$$\mathbf{F} = g \nabla h.$$

(a) 证明

$$\nabla \cdot \mathbf{F} = g \nabla^2 h + (\nabla g) \cdot (\nabla h),$$

这里  $\nabla^2 h = \nabla \cdot (\nabla h) = \sum \partial^2 h / \partial x_i^2$  是  $h$  的所谓“Laplace 算子”.

(b) 如果  $\Omega$  是  $E$  的闭子集且有正向边界  $\partial\Omega$  (如定理 10.51) 证明

$$\int_{\Omega} [g \nabla^2 h + (\nabla g) \cdot (\nabla h)] dV = \int_{\partial\Omega} g \frac{\partial h}{\partial n} dA.$$

这里 (按照习惯) 我们已经把  $(\Delta h) \cdot \mathbf{n}$  写成了  $\frac{\partial h}{\partial n}$ . (如此,  $\partial h / \partial n$  是  $h$  在  $\partial\Omega$  的外法线方向的方向导数, 即所谓  $h$  的法向导数). 将  $g$  与  $h$  的位置互换得到式子,

$$\int_{\Omega} [h \nabla^2 g + (\nabla h) \cdot (\nabla g)] dV = \int_{\partial\Omega} h \frac{\partial g}{\partial n} dA$$

再从第一式中减去它, 得

$$\int_{\Omega} (g \nabla^2 h - h \nabla^2 g) dV = \int_{\partial\Omega} \left( g \frac{\partial h}{\partial n} - h \frac{\partial g}{\partial n} \right) dA.$$

这两个公式通常叫做 Green 恒等式.

(c) 假定  $h$  在  $E$  中是调和的, 这指的是  $\nabla^2 h = 0$ . 取  $g=1$  便推知

$$\int_{\partial\Omega} \frac{\partial h}{\partial n} dA = 0.$$

取  $g=h$ , 便推知: 在  $\partial\Omega$  上  $h=0$  时, 在  $\Omega$  内就也  $h=0$ .

(d) 证明 Green 恒等式在  $R^2$  中也成立.

32. 固定  $\delta$ ,  $0 < \delta < 1$ . 令  $D$  是合于  $0 \le \theta \le \pi$ ,  $-\delta \le t \le \delta$  的一切  $(\theta, t) \in R^2$  的集. 又令  $\Phi$  是  $R^3$  中以  $D$  为参数域, 而由

$$\begin{aligned} x &= (1 - t \sin \theta) \cos 2\theta \\ y &= (1 - t \sin \theta) \sin 2\theta \\ z &= t \cos \theta \end{aligned}$$

给出的 2-曲面, 这里  $(x, y, z) = \Phi(\theta, t)$ . 注意  $\Phi(\pi, t) = \Phi(0, -t)$ , 而在  $D$  的其余部分上,  $\Phi$  是 1-1 的.

$\Phi$  的值域  $M = \Phi(D)$  是著名的 Möbius 带. 它是不可定向曲面的最简单的例子.

证明下面所述各种论断: 置  $p_1 = (0, -\delta)$ ,  $p_2 = (\pi, -\delta)$ ,  $p_3 = (\pi, \delta)$ ,  $p_4 = (0, \delta)$ ,  $p_5 = p_1$ . 设  $\gamma_i = [p_i, p_{i+1}]$ ,  $i=1, \dots, 4$ , 而  $\Gamma_i = \Phi \circ \gamma_i$ . 于是

$$\partial\Phi = \Gamma_1 + \Gamma_2 + \Gamma_3 + \Gamma_4.$$

令  $a = (1, 0, -\delta)$ ,  $b = (1, 0, \delta)$ . 那么

$$\Phi(p_1) = \Phi(p_3) = a, \quad \Phi(p_2) = \Phi(p_4) = b,$$

而  $\partial\Phi$  可描述如下:

$\Gamma_1$  从  $a$  到  $b$  螺旋上升; 它在  $(x, y)$ -平面上的射影绕原点 +1 圈 (参看第 8 章习题 23).

$$\Gamma_2 = [b, a]$$

$\Gamma_3$  从  $a$  到  $b$  螺旋上升, 它在  $(x, y)$ -平面上的射影绕原点 -1 圈

$$\Gamma_4 = [b, a]$$

因此,  $\partial\Phi = \Gamma_1 + \Gamma_3 + 2\Gamma_2$ .

如果我们从  $a$  沿  $\Gamma_1$  到  $b$ , 再继续沿  $M$  的“边缘”前进最后回到  $a$  处, 所描出的曲线是

$$\Gamma = \Gamma_1 - \Gamma_3.$$

这曲线又可在参数区间 $[0, 2\pi]$ 上用方程

$$\begin{aligned}x &= (1 + \delta \sin \theta) \cos 2\theta \\y &= (1 + \delta \sin \theta) \sin 2\theta \\z &= -\delta \cos \theta\end{aligned}$$

来表示.

应当强调  $\Gamma \neq \partial \Phi$ : 令  $\eta$  是习题 21 及 22 中所讨论的 1-形式. 因  $d\eta = 0$ , Stokes 定理说明

$$\int_{\partial \Phi} \eta = 0.$$

然而, 尽管  $\Gamma$  是  $M$  的“几何”边界, 却有

$$\int_{\Gamma} \eta = 4\pi.$$

为了避开这种混乱的可能来源, Stokes 公式(定理 10.50)每只对于可定向曲面  $\Phi$  来叙述.


