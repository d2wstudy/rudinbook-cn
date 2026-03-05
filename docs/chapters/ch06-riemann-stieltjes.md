# 第 6 章 RIEMANN-STIELTJES 积分

本章以 Riemann 积分的定义为基础, 而 Riemann 积分又明显地依赖于实轴的序结构. 因此, 开始时, 我们先讨论区间上实值函数的积分, 后几节再推广到区间上的复值和向量值函数的积分. 到第 10 及 11 两章再讨论在不是区间的集上的积分.

## 积分的定义和存在性

**6.1 定义** 设  $[a, b]$  是给定的区间.  $[a, b]$  的分法  $P$  指的是有限点集  $x_0, x_1, \dots, x_n$ , 其中

$$a = x_0 \le x_1 \le \dots \le x_{n-1} \le x_n = b.$$

把这里每个数减去它的前邻数的差记作

$$\Delta x_i = x_i - x_{i-1} \quad (i = 1, \dots, n)$$

现在假设  $f$  是定义在  $[a, b]$  上的有界实函数. 对应于  $[a, b]$  的每个分法  $P$ , 令

$$M_i = \sup f(x) \quad (x_{i-1} \le x \le x_i),$$

$$m_i = \inf f(x) \quad (x_{i-1} \le x \le x_i),$$

$$U(P, f) = \sum_{i=1}^{n} M_i \Delta x_i,$$

$$L(P, f) = \sum_{i=1}^{n} m_i \Delta x_i,$$

最后置

$$\int_a^b f dx = \inf U(P, f), \quad (1)$$

$$\int_a^b f dx = \sup L(P, f). \quad (2)$$

其中最大下界与最小上界是对  $[a, b]$  的所有分法而取的. (1) 和 (2) 的左端分别称为  $f$  在  $[a, b]$  上的 Riemann 上积分与下积分.

如果上积分与下积分相等, 就说  $f$  在  $[a, b]$  上 Riemann 可积, 记作  $f \in \mathcal{R}$  (即是  $\mathcal{R}$  表示 Riemann 可积函数的集合). 并且用

$$\int_a^b f dx \quad (3)$$

或

$$\int_a^b f(x) dx \quad (4)$$

表示(1)和(2)的共同值.

这就是  $f$  在  $[a, b]$  上的 Riemann 积分. 因为  $f$  是有界的, 所以存在着两个数  $m$  和  $M$ , 使得

$$m \le f(x) \le M \quad (a \le x \le b)$$

因此, 对于每个  $P$ ,

$$m(b-a) \le L(P, f) \le U(P, f) \le M(b-a).$$

从而数  $L(P, f)$  和  $U(P, f)$  组成一个有界集. 这说明, 对于每个有界函数  $f$ , 上积分与下积分都有定义. 关于它们是否相等的问题, 即是  $f$  的可积性问题, 是更为细致的问题. 我们将不去孤立地研究 Riemann 积分, 而马上去考虑更一般的情形.

**6.2 定义** 设  $\alpha$  是  $[a, b]$  上的一个单调递增函数(因  $\alpha(a)$  和  $\alpha(b)$  有限, 从而  $\alpha$  在  $[a, b]$  上有界). 对应于  $[a, b]$  的每个分法  $P$ , 记

$$\Delta\alpha_i = \alpha(x_i) - \alpha(x_{i-1})$$

显然  $\Delta\alpha_i \ge 0$ . 对于  $[a, b]$  上任意的有界实函数  $f$ , 令

$$U(P, f, \alpha) = \sum_{i=1}^{n} M_i \Delta\alpha_i,$$

$$L(P, f, \alpha) = \sum_{i=1}^{n} m_i \Delta\alpha_i,$$

这里  $M_i$ ,  $m_i$  与定义 6.1 中的含义相同, 并且定义

$$\int_a^b f d\alpha = \inf U(P, f, \alpha), \quad (5)$$

$$\int_a^b f d\alpha = \sup L(P, f, \alpha), \quad (6)$$

其中的  $\inf$  及  $\sup$  都是对所有分法而取的.

如果(5)和(6)的左端相等, 我们就用

$$\int_a^b f d\alpha \quad (7)$$

有时也用

$$\int_a^b f(x) d\alpha(x) \quad (8)$$

表示它们的共同值.

这就是  $[a, b]$  上  $f$  关于  $\alpha$  的 Riemann-Stieltjes 积分 (或简称为 Stieltjes 积分).

如果 (7) 存在, 即 (5) 和 (6) 相等, 我们就说  $f$  关于  $\alpha$  在 Riemann 意义上可积, 并记作  $f \in \mathcal{R}(\alpha)$ .

取  $\alpha(x) = x$ , 即见 Riemann 积分是 Riemann-Stieltjes 积分的特殊情形. 但是我们要明确指出, 在一般情形,  $\alpha$  甚至不一定是连续的.

关于这个概念还要说几句话. 与 (8) 相比我们宁愿采用 (7) 式, 因为在 (8) 中出现的字母  $x$  丝毫不增加 (7) 的内容. 我们用哪个字母去代表所谓的“积分变量”是无关紧要的. 例如, (8) 就与

$$\int_a^b f(y) d\alpha(y)$$

相同. 积分依赖于  $f$ ,  $\alpha$ ,  $a$  和  $b$ , 但与积分变量无关, 也可把它略去.

积分变量所起的作用很像求和的指标: 两个记号

$$\sum_{i=1}^{n} c_i, \sum_{k=1}^{n} c_k$$

是相同的, 因为每一个指的都是  $c_1 + c_2 + \dots + c_n$ .

当然, 添上积分变量也无妨, 而且在许多情形这样做实际上是方便的.

现在我们研究积分 (7) 的存在. 有些话现在说一次, 以后不再每次说明, 假定  $f$  是有界实函数, 而  $\alpha$  在  $[a, b]$  上单调递增, 当不会产生误解时, 我们将用  $\int$  代替  $\int_a^b$ .

**6.3 定义** 我们称分法  $P^*$  是  $P$  的加细, 如果  $P^* \supset P$  (即  $P$  的每个点都是  $P^*$  的点). 设有两个分法  $P_1$  和  $P_2$ , 如果  $P^* = P_1 \cup P_2$ , 便称  $P^*$  是它们的共同加细.

**6.4 定理** 如果  $P^*$  是  $P$  的加细, 那么

$$L(P, f, \alpha) \le L(P^*, f, \alpha) \quad (9)$$

而且

$$U(P^*, f, \alpha) \le U(P, f, \alpha). \quad (10)$$

**证** 为了证 (9), 先设  $P^*$  只比  $P$  多一个点. 设这个附加的点是  $x^*$ , 并假定  $x_{i-1} < x^* < x_i$ , 其中  $x_{i-1}$  和  $x_i$  是  $P$  的两个相邻的点. 令

$$w_i = \inf(f(x)) \quad (x_{i-1} \le x \le x^*),$$

$$w_2 = \inf f(x) \quad (x^* \le x \le x_i).$$

显然  $w_1 \ge m_i$  及  $w_2 \ge m_i$ . 与前面一样, 这里的

$$m_i = \inf f(x) \quad (x_{i-1} \le x \le x_i),$$

因此,

$$\begin{aligned} & L(P^*, f, \alpha) - L(P, f, \alpha) \\ &= w_1[\alpha(x^*) - \alpha(x_{i-1})] + w_2[\alpha(x_i) - \alpha(x^*)] - m_i[\alpha(x_i) - \alpha(x_{i-1})] \\ &= (w_1 - m_i)[\alpha(x^*) - \alpha(x_{i-1})] + (w_2 - m_i)[\alpha(x_i) - \alpha(x^*)] \ge 0 \end{aligned}$$

如果  $P^*$  比  $P$  多含  $k$  个点, 我们把上述论证重复  $k$  次, 就得到(9)式. (10)式的论证是类似的.

**6.5 定理**  $\int_a^b f d\alpha \le \overline{\int_a^b} f d\alpha$ .

**证** 设  $P^*$  是两个分法  $P_1$  和  $P_2$  的共同加细. 由定理 6.4,

$$L(P_1, f, \alpha) \le L(P^*, f, \alpha) \le U(P^*, f, \alpha) \le U(P_2, f, \alpha)$$

因此

$$L(P_1, f, \alpha) \le U(P_2, f, \alpha) \quad (11)$$

让  $P_2$  保持不变, 而对所有的  $P_1$  取  $\sup$ , (11)式就给出

$$\overline{\int_a^b} f d\alpha \le U(P_2, f, \alpha) \quad (12)$$

在(12)中, 对所有的  $P_2$  取  $\inf$ , 就得到本定理.

**6.6 定理** 在  $[a, b]$  上  $f \in \mathcal{R}(\alpha)$  当且仅当对于任意的  $\epsilon > 0$ , 存在一个分法  $P$  使得

$$U(P, f, \alpha) - L(P, f, \alpha) < \epsilon \quad (13)$$

**证** 对于任意的  $P$ , 有

$$L(P, f, \alpha) \le \int_a^b f d\alpha \le \overline{\int_a^b} f d\alpha \le U(P, f, \alpha).$$

所以(13)式意味着

$$0 \le \overline{\int_a^b} f d\alpha - \underline{\int_a^b} f d\alpha < \epsilon$$

因此, 如果(13)式对于每个  $\epsilon > 0$  都能成立, 就必然有

$$\overline{\int} f d\alpha = \underline{\int} f d\alpha$$

这就是  $f \in \mathcal{R}(\alpha)$ .

反之, 假设  $f \in \mathcal{R}(\alpha)$  并给定  $\epsilon > 0$ , 于是存在分法  $P_1$  和  $P_2$ , 使得

$$U(P_2, f, \alpha) - \underline{\int} f d\alpha < \frac{\epsilon}{2}, \quad (14)$$

$$\overline{\int} f d\alpha - L(P_1, f, \alpha) < \frac{\epsilon}{2}, \quad (15)$$

把  $P$  选为  $P_1$  和  $P_2$  的共同加细, 那么定理 6.4, 连同(14)式和(15)式说明

$$\begin{aligned} U(P, f, \alpha) &\le U(P_2, f, \alpha) < \underline{\int} f d\alpha + \frac{\epsilon}{2} < L(P_1, f, \alpha) + \epsilon \\ &\le L(P, f, \alpha) + \epsilon. \end{aligned}$$

于是, 对于这个分法  $P$ , (13)成立.

定理 6.6 给可积性提供了一个方便的判别法. 在运用它之前, 先说一点有密切关系的事项.

**6.7 定理**

(a) 如果(13)式对某个  $P$  及某个  $\epsilon$  成立, 那么(当还用这同一个  $\epsilon$  时)(13)式对  $P$  加细后仍成立.

(b) 如果对于  $P = \{x_0, \dots, x_n\}$ , (13)式成立, 而  $s_i, t_i$  是  $[x_{i-1}, x_i]$  内的任意点, 那么

$$\sum_{i=1}^{n} |f(s_i) - f(t_i)| \Delta\alpha_i < \epsilon.$$

(c) 如果  $f \in \mathcal{R}(\alpha)$  并且(b)的题设还成立, 那么

$$\left| \sum_{i=1}^{n} f(t_i) \Delta\alpha_i - \int_a^b f d\alpha \right| < \epsilon.$$

证 由定理 6.4 得出(a), 在(b)中所做的题设之下,  $f(s_i)$  及  $f(t_i)$  都位于  $[m_i, M_i]$  内, 所以  $|f(s_i) - f(t_i)| \le M_i - m_i$  因此

$$\sum_{i=1}^{n} |f(s_i) - f(t_i)| \Delta\alpha_i \le U(P, f, \alpha) - L(P, f, \alpha),$$

这就证出了(b). 从几个明显的不等式

$$L(P, f, \alpha) \le \sum f(t_i) \Delta\alpha_i \le U(P, f, \alpha)$$

及

$$L(P, f, \alpha) \le \int f d\alpha \le U(P, f, \alpha)$$

证明了(c).

**6.8 定理** 如果  $f$  在  $[a, b]$  上连续, 那么在  $[a, b]$  上,  $f \in \mathcal{R}(\alpha)$ .

**证** 给定了  $\varepsilon > 0$ , 选  $\eta > 0$  使得

$$[a(b) - \alpha(a)]\eta < \varepsilon.$$

因为  $f$  在  $[a, b]$  上一致连续(定理 4.19). 所以存在着  $\delta > 0$ , 当  $x \in [a, b]$ ,  $t \in [a, b]$  并且  $|x - t| < \delta$  时

$$|f(x) - f(t)| < \eta \quad (16)$$

假若  $P$  是  $[a, b]$  的任何合于  $\Delta x_i < \delta (i = 1, 2, \dots, n)$  的分法, 那么由(16) 便有

$$M_i - m_i \le \eta \quad (i = 1, \dots, n) \quad (17)$$

因此

$$\begin{aligned} U(P, f, \alpha) - L(P, f, \alpha) &= \sum_{i=1}^{n} (M_i - m_i) \Delta \alpha_i \\ &\le \eta \sum_{i=1}^{n} \Delta \alpha_i = \eta [a(b) - \alpha(a)] < \varepsilon. \end{aligned}$$

根据定理 6.6 知道  $f \in \mathcal{R}(\alpha)$ .

**6.9 定理** 如果  $f$  在  $[a, b]$  上单调,  $\alpha$  在  $[a, b]$  上连续, 那么  $f \in \mathcal{R}(\alpha)$ . (当然, 仍然假定  $\alpha$  单调).

**证** 假设给定了  $\varepsilon > 0$ . 对于任意正整数  $n$ , 选分法  $P$ , 使得

$$\Delta \alpha_i = \frac{\alpha(b) - \alpha(a)}{n}, \quad (i = 1, 2, \dots, n)$$

因为  $\alpha$  连续, 所以这是能作到的(定理 4.23).

我们假定  $f$  单调递增(递减的情形与此相仿), 那么

$$M_i = f(x_i), m_i = f(x_{i-1}), \quad (i = 1, 2, \dots, n).$$

因此只要把  $n$  取得充分大, 便有

$$\begin{aligned} U(P, f, \alpha) - L(P, f, \alpha) &= \frac{\alpha(b) - \alpha(a)}{n} \sum_{i=1}^{n} [f(x_i) - f(x_{i-1})] \\ &= \frac{\alpha(b) - \alpha(a)}{n} \cdot [f(b) - f(a)] < \varepsilon. \end{aligned}$$

由定理 6.6 知道  $f \in \mathcal{R}(\alpha)$ .

**6.10 定理** 假设  $f$  在  $[a, b]$  上有界, 只有有限个间断点.  $\alpha$  在  $f$  的每个间断点上连续, 那么  $f \in \mathcal{R}(\alpha)$ .

**证** 假设给定了  $\varepsilon > 0$ . 令  $M = \sup |f(x)|$ . 设  $E$  是使  $f$  间断的点的集. 由于  $E$  有限, 而  $\alpha$  在  $E$  的每点连续, 我们可以取有限个不相交的闭区间  $[u_j, v_j] \subset [a, b]$  把  $E$  盖住, 同时要对应的各差数  $\alpha(v_j) - \alpha(u_j)$  的和小于  $\varepsilon$ . 进而我们能够把这些区间安置得让  $E \cap (a, b)$  的每个点在某个  $[u_j, v_j]$  内部.

从  $[a, b]$  去掉开区间  $(u_j, v_j)$ . 剩下的集  $K$  是紧的. 因而  $f$  在  $K$  上一致连续. 于是有一个  $\delta > 0$ , 保证  $s \in K, t \in K, |s-t| < \delta$  时  $|f(s) - f(t)| < \varepsilon$ .

现在照下边说的方法给  $[a, b]$  作分法  $P = \{x_0, x_1, \dots, x_n\}$ : 每个  $u_j$  在  $P$  里出现, 每个  $v_j$  在  $P$  里出现, 任何开区间  $(u_j, v_j)$  没有点在  $P$  里出现. 如果  $x_{i-1}$  不是  $u_j$  之一, 那么  $\Delta x_i < \delta$ .

注意, 对于每个  $i$ ,  $M_i - m_i < 2M$ , 并且  $M_i - m_i \le \varepsilon$ , 除非  $x_{i-1}$  是  $u_j$  之一. 于是照着定理 6.8 的证明那样

$$U(P, f, \alpha) - L(P, f, \alpha) \le [\alpha(b) - \alpha(a)]\varepsilon + 2M\varepsilon$$

因为  $\varepsilon$  是任意的, 定理 6.6 说明  $f \in \mathcal{R}(\alpha)$ .

**附注:** 如果  $f$  与  $\alpha$  有一个共同的间断点,  $f$  便未必属于  $\mathcal{R}(\alpha)$ . 习题 3 说明了这一点.

**6.11 定理** 假设在  $[a, b]$  上  $f \in \mathcal{R}(\alpha)$ ,  $m \le f \le M$ .  $\phi$  在  $[m, M]$  上连续, 并且在  $[a, b]$  上  $h(x) = \phi(f(x))$ . 那么在  $[a, b]$  上  $h \in \mathcal{R}(\alpha)$ .

**证** 选定  $\varepsilon > 0$ . 因为  $\phi$  在  $[m, M]$  上一致连续, 所以有  $\delta > 0$  合于  $\delta < \varepsilon$ , 并且当  $s, t \in [m, M]$  时, 只要  $|s-t| \le \delta$  便能使  $|\phi(s) - \phi(t)| < \varepsilon$ .

因为  $f \in \mathcal{R}(\alpha)$ , 所以有  $[a, b]$  的分法  $P = \{x_0, x_1, \dots, x_n\}$  使得

$$U(P, f, \alpha) - L(P, f, \alpha) < \delta^2. \quad (18)$$

设  $M_i, m_i$  的意义和定义 6.1 所说的相同, 而  $M_i^*, m_i^*$  是关于  $h$  的类似的数. 把  $1, 2, \dots, n$  这些数分作两类: 如果  $M_i - m_i < \delta$ , 便使  $i \in A$ , 如果  $M_i - m_i \ge \delta$ , 便使  $i \in B$ .

当  $i \in A$  时,  $\delta$  的选取法表明  $M_i^* - m_i^* \le \varepsilon$ .

当  $i \in B$  时,  $M_i^* - m_i^* \le 2K$ . 这里  $K = \sup |\phi(t)|, m \le t \le M$ . 根据 (18), 得到

$$\delta \sum_{i \in B} \Delta \alpha_i \le \sum_{i \in B} (M_i - m_i) \Delta \alpha_i < \delta^2 \quad (19)$$

所以  $\sum_{i \in B} \Delta \alpha_i < \delta$ , 因而

$$U(P, h, \alpha) - L(P, h, \alpha)$$

$$\begin{aligned}
&= \sum_{i \in A} (M_i^* - m_i^*) \Delta a_i + \sum_{i \in B} (M_i^* - m_i^*) \Delta a_i \\
&\le \epsilon [\alpha(b) - \alpha(a)] + 2K\delta < \epsilon [\alpha(b) - \alpha(a) + 2K]
\end{aligned}$$

因为  $\epsilon$  是任意的, 由定理 6.6 有  $h \in \mathcal{R}(\alpha)$ .

评注: 这定理提出一个问题, 即是: 什么样的函数恰好 Riemann 可积? 答案在定理 11.33(b).

### 积分的性质

**6.12 定理**

(a) 如果在  $[a, b]$  上  $f_1 \in \mathcal{R}(\alpha)$  且  $f_2 \in \mathcal{R}(\alpha)$ , 那么

$$f_1 + f_2 \in \mathcal{R}(\alpha),$$

对任意的常数  $c$ ,  $cf \in \mathcal{R}(\alpha)$ , 并且

$$\begin{aligned}
\int_a^b (f_1 + f_2) d\alpha &= \int_a^b f_1 d\alpha + \int_a^b f_2 d\alpha, \\
\int_a^b c f d\alpha &= c \int_a^b f d\alpha.
\end{aligned}$$

(b) 如果在  $[a, b]$  上  $f_1(x) \le f_2(x)$ , 那么

$$\int_a^b f_1 d\alpha \le \int_a^b f_2 d\alpha.$$

(c) 如果在  $[a, b]$  上  $f \in \mathcal{R}(\alpha)$ , 并且  $a < c < b$ , 那么在  $[a, c]$  及  $[c, b]$  上  $f \in \mathcal{R}(\alpha)$ , 121 并且

$$\int_a^c f d\alpha + \int_c^b f d\alpha = \int_a^b f d\alpha.$$

(d) 如果在  $[a, b]$  上  $f \in \mathcal{R}(\alpha)$  并且在  $[a, b]$  上  $|f(x)| \le M$ , 那么

$$\left| \int_a^b f d\alpha \right| \le M [\alpha(b) - \alpha(a)].$$

(e) 如果  $f \in \mathcal{R}(\alpha_1)$  并且  $f \in \mathcal{R}(\alpha_2)$ , 那么  $f \in \mathcal{R}(\alpha_1 + \alpha_2)$  并且

$$\int_a^b f d(\alpha_1 + \alpha_2) = \int_a^b f d\alpha_1 + \int_a^b f d\alpha_2;$$

如果  $f \in \mathcal{R}(\alpha)$  而  $c$  是个正常数, 那么  $f \in \mathcal{R}(c\alpha)$  而且

$$\int_a^b f d(c\alpha) = c \int_a^b f d\alpha.$$

证 如果  $f=f_1+f_2$  而  $P$  是  $[a, b]$  的任意分法, 就能得到

$$\begin{aligned} L(P, f_1, \alpha) + L(P, f_2, \alpha) &\le L(P, f, \alpha) \le U(P, f, \alpha) \\ &\le U(P, f_1, \alpha) + U(P, f_2, \alpha). \end{aligned} \quad (20)$$

如果  $f_1 \in \mathcal{R}(\alpha)$ ,  $f_2 \in \mathcal{R}(\alpha)$ , 并设  $\varepsilon > 0$  已经给定. 便存在分法  $P_j (j=1, 2)$  使得

$$U(P_j, f_j, \alpha) - L(P_j, f_j, \alpha) < \varepsilon.$$

如果把  $P_1$  和  $P_2$  换成它们的共同加细  $P$ , 这些不等式仍然成立. 于是(20)说明

$$U(P, f, \alpha) - L(P, f, \alpha) < 2\varepsilon.$$

这就证明了  $f \in \mathcal{R}(\alpha)$ .

用这同一个  $P$  可以得到

$$U(P, f_j, \alpha) < \int f_j d\alpha + \varepsilon \quad (j = 1, 2),$$

因此, (20)说明

$$\int f d\alpha \le U(P, f, \alpha) < \int f_1 d\alpha + \int f_2 d\alpha + 2\varepsilon.$$

因为  $\varepsilon$  是任意的, 所以能断定

$$\int f d\alpha \le \int f_1 d\alpha + \int f_2 d\alpha. \quad (21)$$

如果在(21)式中用  $-f_1$  和  $-f_2$  取代  $f_1$  和  $f_2$ , 不等式便掉转方向, 从而证明了等式成立.

定理 6.12 的其他断语的证明都十分类似, 不需作详细叙述. 在(c)条中的要点在于, 当逼近  $\int f d\alpha$  时, (经过加细)我们可以限于考虑包含点  $c$  的分法.

**6.13 定理** 如果在  $[a, b]$  上  $f \in \mathcal{R}(\alpha)$ ,  $g \in \mathcal{R}(\alpha)$ , 那么

(a)  $fg \in \mathcal{R}(\alpha)$ ;

(b)  $|f| \in \mathcal{R}(\alpha)$  而且  $\left| \int_a^b f d\alpha \right| \le \int_a^b |f| d\alpha$ .

证 如果取  $\phi(t) = t^2$ , 定理 6.11 说明, 当  $f \in \mathcal{R}(\alpha)$  时,  $f^2 \in \mathcal{R}(\alpha)$ . 利用恒等式

$$4fg = (f+g)^2 - (f-g)^2$$

就能完成(a)的证明

如果取  $\phi(t) = |t|$ , 定理 6.11 同样说明  $|f| \in \mathcal{R}(\alpha)$ , 选择  $c = \pm 1$ , 使得

$$c \int f d\alpha \ge 0.$$

于是由于  $cf \le |f|$ , 所以

$$\left| \int f d\alpha \right| = \left| c \int f d\alpha \right| = \left| \int c f d\alpha \right| \le \int |f| d\alpha.$$

**6.14 定义** 单位阶跃函数  $I$  的定义是

$$I(x) = \begin{cases} 0 & x \le 0, \\ 1 & x > 0. \end{cases}$$

**6.15 定理** 如果  $a < s < b$ ,  $f$  在  $[a, b]$  上有界,  $f$  在  $s$  点连续, 而  $\alpha(x) = I(x-s)$ , 那么

$$\int_a^b f d\alpha = f(s).$$

证 取分法  $P = \{x_0, x_1, x_2, x_3\}$ , 其中  $x_0 = a$ , 而  $x_1 = s < x_2 < x_3 = b$ . 于是

$$U(P, f, \alpha) = M_2, L(P, f, \alpha) = m_2.$$

因为  $f$  在  $s$  点连续, 我们知道, 当  $x_2 \to s$  时,  $M_2$  与  $m_2$  都趋于  $f(s)$ .

**6.16 定理** 假定对于  $n=1, 2, 3, \dots$ ,  $c_n \ge 0$ ,  $\sum c_n$  收敛.  $\{s_n\}$  是  $(a, b)$  之内的一串不同的点, 并且

$$\alpha(x) = \sum_{n=1}^{\infty} c_n I(x - s_n). \quad (22)$$

设  $f$  在  $[a, b]$  上连续, 那么

$$\int_a^b f d\alpha = \sum_{n=1}^{\infty} c_n f(s_n). \quad (23)$$

证 用比较检验法可以证明级数 (22) 对于每个  $x$  收敛. 它的和  $\alpha(x)$  显然是单调的,  $\alpha(a)=0$ ,  $\alpha(b) = \sum c_n$  (这是在评注 4.31 里出现的那种函数.)

假设已经给定了  $\epsilon > 0$ , 再选一个能实现

$$\sum_{N+1}^{\infty} c_n < \epsilon$$

的  $N$ . 令

$$\alpha_1(x) = \sum_{n=1}^{N} c_n I(x - s_n), \alpha_2(x) = \sum_{N+1}^{\infty} c_n I(x - s_n).$$

根据定理 6.12 和 6.15,

$$\int_a^b f d\alpha_1 = \sum_{i=1}^{N} c_n f(s_n). \quad (24)$$

由于  $\alpha_2(b) - \alpha_2(a) < \epsilon$ ,

$$\left| \int_a^b f d\alpha_2 \right| \le M\epsilon, \quad (25)$$

其中  $M = \sup |f(x)|$ . 既然  $a = \alpha_1 + \alpha_2$  那么从(24)和(25)可以推得

$$\left| \int_a^b f d\alpha - \sum_{i=1}^{N} c_n f(s_n) \right| \le M\epsilon \quad (26)$$

让  $N \to \infty$ , 就得到(23).

**6.17 定理** 假定  $\alpha$  单调递增. 在  $[a, b]$  上  $\alpha' \in \mathcal{R}$ . 设  $f$  是  $[a, b]$  上的有界实函数, 于是  $f \in \mathcal{R}(\alpha)$  当且仅当  $f\alpha' \in \mathcal{R}$ . 这时候,

$$\int_a^b f d\alpha = \int_a^b f(x) \alpha'(x) dx. \quad (27)$$

证 假设给定了  $\epsilon > 0$ , 并将定理 6.6 用于  $\alpha'$ : 有  $[a, b]$  的一个分法  $P = \{x_0, x_1, \dots, x_n\}$ , 使得

$$U(P, \alpha') - L(P, \alpha') < \epsilon \quad (28)$$

由中值定理知道有  $t_i \in [x_{i-1}, x_i]$ , 使得

$$\Delta\alpha_i = \alpha'(t_i) \Delta x_i \quad (i = 1, 2, \dots, n)$$

如果  $s_i \in [x_{i-1}, x_i]$ , 那么据(28)及定理 6.7(b)便有

$$\sum_{i=1}^{n} |\alpha'(s_i) - \alpha'(t_i)| \Delta x_i < \epsilon. \quad (29)$$

命  $M = \sup |f(x)|$ . 因为

$$\sum_{i=1}^{n} f(s_i) \Delta\alpha_i = \sum_{i=1}^{n} f(s_i) \alpha'(t_i) \Delta x_i,$$

从(29)式即得

$$\left| \sum_{i=1}^{n} f(s_i) \Delta\alpha_i - \sum_{i=1}^{n} f(s_i) \alpha'(s_i) \Delta x_i \right| \le M\epsilon. \quad (30)$$

特别地, 对于  $s_i \in [x_{i-1}, x_i]$  的一切选取法,

$$\sum_{i=1}^{n} f(s_i) \Delta\alpha_i \le U(P, f\alpha') + M\epsilon.$$

所以

$$U(P, f, \alpha) \le U(P, f\alpha') + M\epsilon.$$

同样的论证可以从(30)推得

$$U(P, f\alpha') \le U(P, f, \alpha) + M\epsilon$$

于是

$$|U(P, f, \alpha) - U(P, f, \alpha')| \le M\epsilon. \quad (31)$$

注意，如果把  $P$  换作它的任何加细，(28)依然正确. 从而(31)依然正确. 我们断定

$$\left| \int_a^b f d\alpha - \int_a^b f(x) \alpha'(x) dx \right| \le M\epsilon.$$

但  $\epsilon$  是任意的，所以对于任何有界的  $f$

$$\int_a^b f d\alpha = \int_a^b f(x) \alpha'(x) dx. \quad (32)$$

按照完全一样的方法可以从(30)推得下积分的相等. 本定理随之成立.

**6.18 评注** 前面两条定理显示了 Stieltjes 积分方法所固有的普遍性和适应性. 假若  $\alpha$  是纯阶跃函数[这经常是指(22)式那样形状的函数]积分就变成有限或无限的级数. 假若  $\alpha$  有可积的导数, 积分就变作普通的 Riemann 积分. 这就能够 在许多情形之下同时研究级数和积分而不必分别讨论了.

为了说明这一点, 试看一个物理问题. 有一段单位长的直导线, 有一轴垂直于此导线于一端点, 导线关于这轴的惯性矩是

$$\int_0^1 x^2 dm, \quad (33)$$

这里  $m(x)$  是区间  $[0, x]$  之内所含的质量. 如果认为导线的密度  $\rho$  是连续的, 即是说如果  $m'(x) = \rho(x)$ , 那么(33)变为

$$\int_0^1 x^2 \rho(x) dx \quad (34)$$

另一方面, 如果导线由集中于若干点  $x_i$  的质量  $m_i$  组成; (33)就变为

$$\sum_i x_i^2 m_i \quad (35)$$

所以(34)式与(35)式是(33)式的特殊情形, 然而(33)式包括的还要多; 例如  $m$  连续而不是处处可微的情形.

**6.19 定理(换元)** 假设  $\varphi$  是严格递增的连续函数, 它把闭区间  $[A, B]$  映满  $[a, b]$ . 假设  $\alpha$  在  $[a, b]$  上单调递增, 而且在  $[a, b]$  上  $f \in \mathcal{R}(\alpha)$ . 在  $[A, B]$  上定义  $\beta$  与  $g$  为

$$\beta(y) = \alpha(\varphi(y)), g(y) = f(\varphi(y)). \quad (36)$$

那么  $g \in \mathcal{R}(\beta)$  而且

$$\int_A^B g d\beta = \int_a^b f da. \quad (37)$$

证 对应于  $[a, b]$  的每个分法  $P = \{x_0, \dots, x_n\}$ , 有  $[A, B]$  的一个分法  $Q = \{y_0, \dots, y_n\}$ , 其中  $x_i = \varphi(y_i)$ .  $[A, B]$  的所有分法都是按照这个方法求得的. 因为  $f$  在  $[x_{i-1}, x_i]$  上所取的值, 都与  $g$  在  $[y_{i-1}, y_i]$  上所取的值恰好一样, 故而知道

$$U(Q, g, \beta) = U(P, f, \alpha), L(Q, g, \beta) = L(P, f, \alpha). \quad (38)$$

因为  $f \in \mathcal{R}(\alpha)$ , 可以把  $P$  选得使  $U(P, f, \alpha)$  和  $L(P, f, \alpha)$  都靠近于  $\int_a^b f d\alpha$ . 那么 (38) 与定理 6.6 合在一起就说明  $g \in \mathcal{R}(\beta)$ , 因而 (37) 成立. 证明完毕.

让我们注意下边的特殊情形:

取  $\alpha(x) = x$ , 那么  $\beta = \varphi$ . 假设在  $[A, B]$  上  $\varphi' \in \mathcal{R}$ . 如果将定理 6.17 用于 (37) 的左端, 就得到

$$\int_a^b f(x) dx = \int_A^B f(\varphi(y)) \varphi'(y) dy. \quad (39)$$

## 积分与微分

在本节, 我们仍限于考虑实函数. 我们将要证明, 在某种意义上说, 积分和微分是互逆的运算.

**6.20 定理** 设在  $[a, b]$  上  $f \in \mathcal{R}$ . 对于  $a \le x \le b$ , 令

$$F(x) = \int_a^x f(t) dt.$$

那么  $F$  在  $[a, b]$  上连续; 如果  $f$  又在  $[a, b]$  的  $x_0$  点连续, 那么  $F$  便在  $x_0$  可微, 并且

$$F'(x_0) = f(x_0)$$

证 因  $f \in \mathcal{R}$ , 所以  $f$  有界. 假设对于  $a \le t \le b$ ,  $|f(t)| \le M$ . 如果  $a \le x < y \le b$ , 那么由定理 6.12 的 (c) 和 (d) 知道

$$|F(y) - F(x)| = \left| \int_x^y f(t) dt \right| \le M(y - x),$$

给定了  $\epsilon > 0$ , 只要  $|y - x| < \epsilon/M$ , 就会有

$$|F(y) - F(x)| < \epsilon$$

这就证明了  $F$  的连续性 (而且实际上是一致连续性).

现在假设  $f$  在  $x_0$  点连续. 给定了  $\epsilon > 0$ , 选一个  $\delta > 0$  使得在  $|t - x_0| < \delta$  并  $a \le t \le b$  时,

$$|f(t) - f(x_0)| < \varepsilon.$$

因此, 如果

$$x_0 - \delta < s \le x_0 \le t < x_0 + \delta \text{ 而且 } a \le s < t \le b,$$

根据定理 6.12(d), 便有

$$\left| \frac{F(t) - F(s)}{t - s} - f(x_0) \right| = \left| \frac{1}{t - s} \int_s^t [f(u) - f(x_0)] du \right| < \varepsilon.$$

这就直接推得  $F'(x_0) = f(x_0)$  了.

**6.21 微积分基本定理** 如果在  $[a, b]$  上  $f \in \mathcal{R}$ . 在  $[a, b]$  上又有可微函数  $F$  适合  $F' = f$ , 那么

$$\int_a^b f(x) dx = F(b) - F(a).$$

证 假设给定了  $\varepsilon > 0$ , 选  $[a, b]$  的分法  $P = \{x_0, \dots, x_n\}$  使得  $U(P, f) - L(P, f) < \varepsilon$ . 由中值定理知存在一些点  $t_i \in [x_{i-1}, x_i]$ , 它们对于  $i = 1, \dots, n$  使得

$$F(x_i) - F(x_{i-1}) = f(t_i) \Delta x_i.$$

由此

$$\sum_{i=1}^{n} f(t_i) \Delta x_i = F(b) - F(a)$$

现在, 从定理 6.7(c) 推得

$$\left| F(b) - F(a) - \int_a^b f(x) dx \right| < \varepsilon.$$

因为它对于任何  $\varepsilon > 0$  成立, 证明就完成了.

**6.22 定理(分部积分)** 假定  $F$  和  $G$  都是  $[a, b]$  上的可微函数.  $F' = f \in \mathcal{R}$ ,  $G' = g \in \mathcal{R}$ . 那么

$$\int_a^b F(x) g(x) dx = F(b)G(b) - F(a)G(a) - \int_a^b f(x)G(x) dx.$$

证 令  $H(x) = F(x)G(x)$ , 然后将定理 6.21 用于  $H$  和它的导数. 注意, 根据定理 6.13,  $H' \in \mathcal{R}$ .

### 向量值函数的积分

**6.23 定义** 设  $f_1, \dots, f_k$  是  $[a, b]$  上的实函数, 并设  $f = (f_1, \dots, f_k)$  是将  $[a, b]$  映入  $R^k$  内的映射. 如果  $\alpha$  在  $[a, b]$  上单调递增, 那么说  $f \in \mathcal{R}(\alpha)$ , 指的就是对于  $j = 1, 2, \dots, k$ ,  $f_j \in \mathcal{R}(\alpha)$ . 果真如此的话, 就定义

$$\int_a^b f d\alpha = \left( \int_a^b f_1 d\alpha, \dots, \int_a^b f_k d\alpha \right).$$

换句话说,  $\int f d\alpha$  是  $R^k$  中的点, 而  $\int f_j d\alpha$  是它的第  $j$  个坐标.

显然, 定理 6.12 的(a), (c), (e)三条, 对于这些向量值的积分是成立的; 这只要把前面的结果用于每个坐标就成了. 关于定理 6.17, 6.20 及 6.21, 同样也对. 作为例证, 我们把定理 6.21 的类似定理叙述一下.

**6.24 定理** 设  $f$  及  $F$  是把  $[a, b]$  映入  $R^k$  的映射,  $f$  在  $[a, b]$  上  $\in \mathcal{R}$  并且  $F' = f$ , 那么

$$\int_a^b f(t) dt = F(b) - F(a)$$

但是, 与 6.13(b)类似的定理, 有些新的特点, 至少在它的证明上是如此.

**6.25 定理** 如果  $f$  是把  $[a, b]$  映入  $R^k$  内的映射, 并且对于  $[a, b]$  上的某个单调递增函数  $\alpha$ ,  $f \in \mathcal{R}(\alpha)$ , 那么  $|f| \in \mathcal{R}(\alpha)$ , 而且

$$\left| \int_a^b f d\alpha \right| \le \int_a^b |f| d\alpha \quad (40)$$

证 如果  $f_1, \dots, f_k$  是  $f$  的分量, 那么

$$|f| = (f_1^2 + \dots + f_k^2)^{1/2}. \quad (41)$$

根据定理 6.11, 每个函数  $f_j^2$  属于  $\mathcal{R}(\alpha)$ ; 因此它们的和也属于  $\mathcal{R}(\alpha)$ . 因为  $x^2$  是  $x$  的连续函数, 定理 4.17 说明, 对于任意实数  $M$ , 平方根函数在  $[0, M]$  上连续. 如果再一次应用定理 6.11, 那么(41)式表明  $|f| \in \mathcal{R}(\alpha)$ .

为了证明(40)式, 置  $\mathbf{y} = (y_1, \dots, y_k)$ , 其中  $y_i = \int f_i d\alpha$ . 于是  $\mathbf{y} = \int f d\alpha$ , 并且

$$\begin{aligned} |\mathbf{y}|^2 &= \sum y_i^2 = \sum y_i \int f_i d\alpha \\ &= \int \left( \sum y_i f_i \right) d\alpha. \end{aligned}$$

根据 Schwarz 不等式

$$\sum y_i f_i(t) \le |\mathbf{y}| |f(t)| \quad (a \le t \le b) \quad (42)$$

因此, 由定理 6.12(b)就有

$$|\mathbf{y}|^2 \le |\mathbf{y}| \int |f| d\alpha.$$

如果  $\mathbf{y} = \mathbf{0}$ , (40)就是显然的. 如果  $\mathbf{y} \neq \mathbf{0}$ , 用  $|\mathbf{y}|$  除(43)式就得到(40).

## 可求长曲线

我们用一个几何趣味的论题来结束这一章，这也给前面一些理论提供一项应用。  $k=2$  的情形（即是平面曲线的情形）在研究复变数的解析函数时相当重要。

**6.26 定义** 将闭区间  $[a, b]$  映入  $R^k$  的映射  $\gamma$  叫做  $R^k$  里的曲线。为了重视参数区间  $[a, b]$ ，也可以说  $\gamma$  是  $[a, b]$  上的曲线。

假如  $\gamma$  是一对一的， $\gamma$  就称作弧。

假如  $\gamma(a) = \gamma(b)$ ，就说  $\gamma$  是闭曲线。

应当注意这里定义的曲线是映射而不是点集。结合着  $R^k$  里的每个曲线  $\gamma$ ，总有  $R^k$  的一个子集，即是  $\gamma$  的值域，但是不同的曲线可以有相同的值域。

我们给  $[a, b]$  的每个分法  $P = \{x_0, \dots, x_n\}$  和  $[a, b]$  上的每个曲线  $\gamma$ ，配置一个数

$$\Delta(P, \gamma) = \sum_{i=1}^{n} |\gamma(x_i) - \gamma(x_{i-1})|.$$

这个和里的第  $i$  项就是  $R^k$  里  $\gamma(x_{i-1})$  与  $\gamma(x_i)$  两点间的距离。所以  $\Delta(P, \gamma)$  就是按照顺序以  $\gamma(x_0), \gamma(x_1), \dots, \gamma(x_n)$  为顶点的折线的长。当分法越来越密时，这折线就越来越接近于  $\gamma$  的值域。这样看来，我们把

$$\Delta(\gamma) = \sup \Delta(P, \gamma)$$

定义作  $\gamma$  之长是合理的；这里的  $\sup$  是对  $[a, b]$  的一切分法来取的。

假若  $\Delta(\gamma) < \infty$ ，就说  $\gamma$  是可求长的。

有许多情形， $\Delta(\gamma)$  能用 Riemann 积分表示。我们将要对于连续可微的曲线  $\gamma$ ，即是导数  $\gamma'$  连续的曲线证明这一点。

**6.27 定理** 假如  $\gamma'$  在  $[a, b]$  上连续， $\gamma$  便是可求长的，而且

$$\Delta(\gamma) = \int_a^b |\gamma'(t)| dt.$$

**证** 如果  $a \le x_{i-1} < x_i \le b$ ，那么

$$|\gamma(x_i) - \gamma(x_{i-1})| = \left| \int_{x_{i-1}}^{x_i} \gamma'(t) dt \right| \le \int_{x_{i-1}}^{x_i} |\gamma'(t)| dt.$$

所以对于  $[a, b]$  的每个分法  $P$ ，

$$\Delta(P, \gamma) \le \int_a^b |\gamma'(t)| dt,$$

从而

$$\Delta(\gamma) \le \int_a^b |\gamma'(t)| dt.$$

今证明反向的不等式, 假设给定了  $\varepsilon > 0$ . 既然  $\gamma'$  在  $[a, b]$  上一致连续, 便有  $\delta > 0$ , 使得

$$|\gamma'(s) - \gamma'(t)| < \varepsilon$$

在  $|s - t| < \delta$  时成立. 设  $P = \{x_0, \dots, x_n\}$  是  $[a, b]$  的分法, 对于一切  $i$ ,  $\Delta x_i < \delta$ . 如果  $x_{i-1} \le t \le x_i$ , 必然

$$|\gamma'(t)| \le |\gamma'(x_i)| + \varepsilon.$$

所以

$$\begin{aligned} \int_{x_{i-1}}^{x_i} |\gamma'(t)| dt &\le |\gamma'(x_i)| \Delta x_i + \varepsilon \Delta x_i \\ &= \left| \int_{x_{i-1}}^{x_i} [\gamma'(t) + \gamma'(x_i) - \gamma'(t)] dt \right| + \varepsilon \Delta x_i \\ &\le \left| \int_{x_{i-1}}^{x_i} \gamma'(t) dt \right| + \left| \int_{x_{i-1}}^{x_i} [\gamma'(x_i) - \gamma'(t)] dt \right| + \varepsilon \Delta x_i \\ &\le |\gamma(x_i) - \gamma(x_{i-1})| + 2\varepsilon \Delta x_i. \end{aligned}$$

把这些不等式相加, 就得到

$$\begin{aligned} \int_a^b |\gamma'(t)| dt &\le \Delta(P, \gamma) + 2\varepsilon(b-a) \\ &\le \Delta(\gamma) + 2\varepsilon(b-a). \end{aligned}$$

由于  $\varepsilon$  是任意的

$$\int_a^b |\gamma'(t)| dt \le \Delta(\gamma).$$

证明就完成了.

### 习题

1. 假设  $\alpha$  在  $[a, b]$  上递增,  $a \le x_0 \le b$ ,  $\alpha$  在  $x_0$  连续,  $f(x_0) = 1$ , 并且当  $x \neq x_0$  时  $f(x) = 0$ . 试证  $f \in \mathcal{R}(\alpha)$  并且  $\int_a^b f d\alpha = 0$ .

2. 假设在  $[a, b]$  上  $f \ge 0$ ,  $f$  连续, 并且  $\int_a^b f(x) dx = 0$ . 试证, 对于所有的  $x \in [a, b]$ ,  $f(x) = 0$  (与习题 1 比较).

3. 三个函数  $\beta_1, \beta_2, \beta_3$  定义如下: 对于  $j = 1, 2, 3$ , 当  $x < 0$  时  $\beta_j(x) = 0$ , 当  $x > 0$  时  $\beta_j(x) = 1$ ; 并且  $\beta_1(0) = 0$ ,  $\beta_2(0) = 1$ ,  $\beta_3(0) = \frac{1}{2}$ . 设  $f$  是  $[-1, 1]$  上的有界函数.

(a) 证明  $f \in \mathcal{R}(\beta_1)$  当且仅当  $f(0+) = f(0)$ , 在这个情形还有

$$\int f d\beta_1 = f(0).$$

(b) 对  $\beta_2$  陈述并说明类似的结果.

(c) 证明  $f \in \mathcal{R}(\beta_3)$  当且仅当  $f$  在 0 点连续.

(d) 如果  $f$  在 0 点连续, 证明

$$\int f d\beta_1 = \int f d\beta_2 = \int f d\beta_3 = f(0)$$

4. 如果对于一切无理点  $x$ ,  $f(x)=0$ , 对于一切有理点  $x$ ,  $f(x)=1$ . 证明对于任意的  $a < b$ , 在  $[a, b]$  上  $f \notin \mathcal{R}$ .

5. 假如  $f$  是  $[a, b]$  上的有界实函数, 在  $[a, b]$  上  $f^2 \in \mathcal{R}$ . 是否必然  $f \in \mathcal{R}$ ? 如果假定  $f^3 \in \mathcal{R}$ , 答案是否改变?

6. 设  $P$  是 2.44 所作的 Cantor 集. 设  $f$  是  $[0, 1]$  上的有界实函数, 它在  $P$  以外的每点连续, 试证在  $[0, 1]$  上  $f \in \mathcal{R}$ . 提示:  $P$  能被有限个开区间盖住, 这些区间的总长可以任意小. 照定理 6.10 那样处理.

7. 假定  $f$  是  $(0, 1]$  上的实函数, 对于每个  $c > 0$ , 在  $[c, 1]$  上  $f \in \mathcal{R}$ . 定义

$$\int_0^1 f(x) dx = \lim_{c \to 0^+} \int_c^1 f(x) dx$$

只须这极限存在(而且是有限的).

(a) 若是在  $[0, 1]$  上  $f \in \mathcal{R}$ , 证明这定义和旧定义相同.

(b) 作一个函数  $f$ , 使上述的极限存在, 然而用  $|f|$  换了  $f$  这极限便不存在.

8. 假若  $a$  是固定的,  $b$  是大于  $a$  的任意数, 在  $[a, b]$  上  $f \in \mathcal{R}$ . 定义

$$\int_a^{+\infty} f(x) dx = \lim_{b \to +\infty} \int_a^b f(x) dx,$$

只要这极限存在(而且是有限的). 这时便说左端的积分收敛. 如果把  $f$  换作  $|f|$  它仍然收敛, 就说它绝对收敛.

假定  $f(x) \ge 0$ , 并且在  $[1, \infty]$  上单调递减. 试证

$$\int_1^{+\infty} f(x) dx$$

收敛, 当且仅当

$$\sum_{n=1}^{+\infty} f(n)$$

收敛(这是关于级数收敛性的“积分”检验法).

9. 证明分部积分有时能用于习题 7.8 所定义的“非正常”积分(列出适当的假

设, 编成定理, 再加以证明). 例如证明

$$\int_{0}^{\infty} \frac{\cos x}{1+x} dx = \int_{0}^{\infty} \frac{\sin x}{(1+x)^2} dx.$$

证明这两个积分之中有一个绝对收敛, 另一个则不然.

10. 设  $p$  与  $q$  都是正实数, 满足

$$\frac{1}{p} + \frac{1}{q} = 1,$$

证明下列各命题:

(a) 假若  $u \ge 0$ , 且  $v \ge 0$ , 那么

$$uv \le \frac{u^p}{p} + \frac{v^q}{q}$$

当且仅当  $u^p = v^q$  时等号适用.

(b) 假若  $f \in \mathcal{R}(\alpha)$ ,  $g \in \mathcal{R}(\alpha)$ ,  $f \ge 0$ ,  $g \ge 0$ , 而且

$$\int_{a}^{b} f^p d\alpha = 1 = \int_{a}^{b} g^q d\alpha,$$

那么

$$\int_{a}^{b} fg d\alpha \le 1.$$

(c) 假若  $f$  与  $g$  是属于  $\mathcal{R}(\alpha)$  的复值函数, 那么

$$\left| \int_{a}^{b} fg d\alpha \right| \le \left\{ \int_{a}^{b} |f|^p d\alpha \right\}^{\frac{1}{p}} \left\{ \int_{a}^{b} |g|^q d\alpha \right\}^{\frac{1}{q}}.$$

这是 Hölder 不等式. 当  $p=q=2$  时, 寻常叫做 Schwarz 不等式(注意定理 1.35 是这不等式的极特别的情形).

(d) 证明 Hölder 不等式对于习题 7.8 所说的“非正常”积分也真确.

11. 设  $\alpha$  是  $[a, b]$  上固定的递增函数. 对于  $u \in \mathcal{R}(\alpha)$  定义

$$\|u\|_2 = \left\{ \int_{a}^{b} |u|^2 d\alpha \right\}^{1/2}.$$

假若  $f, g, h \in \mathcal{R}(\alpha)$ , 像定理 1.37 的证明里那样, 作为 Schwarz 不等式的推论, 证明三角形不等式

$$\|f-h\|_2 \le \|f-g\|_2 + \|g-h\|_2.$$

12. 沿用第 11 题的记号, 假定  $f \in \mathcal{R}(\alpha)$ , 并且  $\epsilon > 0$ . 证明在  $[a, b]$  上存在着连续函数  $g$  满足  $\|f-g\|_2 < \epsilon$ .

提示: 设  $P = \{x_0, \dots, x_n\}$  是  $[a, b]$  的一个适当的分法, 如果  $x_{i-1} < t < x_i$ ,

定义

$$g(t) = \frac{x_i - t}{\Delta x_i} f(x_{i-1}) + \frac{t - x_{i-1}}{\Delta x_i} f(x_i)$$

13. 定义

$$f(x) = \int_x^{x+1} \sin(t^2) dt$$

(a) 求证  $x > 0$  时  $|f(x)| < \frac{1}{x}$

提示: 置  $t^2 = u$ , 再分部积分以证  $f(x)$  等于

$$\frac{\cos(x^2)}{2x} - \frac{\cos[(x+1)^2]}{2(x+1)} - \int_{x^2}^{(x+1)^2} \frac{\cos u}{4u^{3/2}} du$$

用  $-1$  代替  $\cos u$ .

(b) 证明

$$2xf(x) = \cos(x^2) - \cos[(x+1)^2] + r(x),$$

其中  $|r(x)| < c/x$ , 而  $c$  是常数.

(c) 求  $xf(x)$  当  $x \to \infty$  时的上、下极限.

(d)  $\int_0^\infty \sin(t^2) dt$  收敛吗?

14. 同样地讨论

$$f(x) = \int_x^{x+1} \sin(e^t) dt$$

求证

$$e^x |f(x)| < 2$$

和

$$e^x f(x) = \cos(e^x) - e^{-1} \cos(e^{x+1}) + r(x),$$

其中  $|r(x)| < Ce^{-x}$ ,  $C$  是某个常数.

15. 假设  $f$  是  $[a, b]$  上的连续可微的实函数,  $f(a) = f(b) = 0$ , 并且

$$\int_a^b f^2(x) dx = 1$$

求证

$$\int_a^b x f(x) f'(x) dx = -\frac{1}{2}$$

和

$$\int_a^b [f'(x)]^2 dx \cdot \int_a^b x^2 f^2(x) dx > \frac{1}{4}.$$

16. 对于  $1 < s < \infty$ , 定义

$$\zeta(s) = \sum_{n=1}^{\infty} \frac{1}{n^s},$$

(这是 Riemann 的  $\zeta$  函数, 在研究质数的分布时极为重要).

求证

$$(a) \zeta(s) = s \int_{1}^{\infty} \frac{\lfloor x \rfloor}{x^{s+1}} dx,$$

和

$$(b) \zeta(s) = \frac{s}{s-1} - s \int_{1}^{\infty} \frac{x - \lfloor x \rfloor}{x^{s+1}} dx,$$

其中  $\lfloor x \rfloor$  表示不大于  $x$  的最大整数.

证明(b)里的积分对于一切  $s > 0$  收敛.

提示: 为了证明(a)可以求  $[1, N]$  上的积分与定义  $\zeta(s)$  的级数的第  $N$  个部分和之差.

17. 假定  $a$  在  $[a, b]$  上单调递增,  $g$  连续, 而且对于  $a \le x \le b$ ,  $g(x) = G'(x)$ . 求证

$$\int_{a}^{b} a(x)g(x)dx = G(b)a(b) - G(a)a(a) - \int_{a}^{b} G da.$$

提示: 取实的  $g$  无损于一般性. 给定  $P = \{x_0, x_1, \dots, x_n\}$ , 选  $t_i \in (x_{i-1}, x_i)$  使  $g(t_i)\Delta x_i = G(x_i) - G(x_{i-1})$ . 证明

$$\sum_{i=1}^{n} a(x_i)g(t_i)\Delta x_i = G(b)a(b) - G(a)a(a) - \sum_{i=1}^{n} G(x_{i-1})\Delta a_i.$$

18. 设复平面里的曲线  $\gamma_1, \gamma_2, \gamma_3$ , 是由

$$\gamma_1(t) = e^{it}, \gamma_2(t) = e^{2it}, \gamma_3(t) = e^{2\pi it \sin(1/t)}$$

定义在  $[0, 2\pi]$  之上的. 求证这三个曲线的值域相同,  $\gamma_1$  与  $\gamma_2$  为可求长,  $\gamma_1$  的长是  $2\pi$ ,  $\gamma_2$  的长是  $4\pi$ , 而  $\gamma_3$  不可求长.

19. 设  $\gamma_1$  是定义在  $[a, b]$  上的  $R^k$  里的曲线;  $\phi$  是把  $[c, d]$  映满  $[a, b]$  的连续 1-1 映射, 而  $\phi(c) = a$ ; 再定义  $\gamma_2(s) = \gamma_1(\phi(s))$ . 求证  $\gamma_2$  是弧, 是闭曲线或是可求长曲线当且仅当  $\gamma_1$  也是这样的. 证明  $\gamma_2$  与  $\gamma_1$  的长相同.


