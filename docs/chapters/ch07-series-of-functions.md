# 第 7 章 函数序列与函数项级数

虽然下面的多数定理以及它们的证明不难推广到向量值函数，甚至推广到映入一般度量空间之内的映射，但在这一章里，我们只限于讨论复值函数（自然，它包括实值函数）。我们宁愿停止在这个简单范围之内，为的是把注意力集中在最重要的方面——调换两个极限过程时出现的若干问题。

## 主要问题的讨论

**7.1 定义** 假设  $n=1, 2, 3, \dots$ ， $\{f_n\}$  是一个定义在集  $E$  上的函数序列，再假设数列  $\{f_n(x)\}$  对于每个  $x \in E$  收敛。我们便可以由

$$f(x) = \lim_{n \to \infty} f_n(x) \quad (x \in E). \quad (1)$$

确定一个函数  $f$ 。

这时候，我们说  $\{f_n\}$  在  $E$  上收敛，并且  $f$  是  $\{f_n\}$  的极限或极限函数。有时也用一个带一点描述性的术语，即：如果 (1) 成立，就说“在  $E$  上  $\{f_n\}$  逐点收敛于  $f$ ”。类似地，如果对于每个  $x \in E$ ， $\sum f_n(x)$  收敛，并且如果我们定义

$$f(x) = \sum_{n=1}^{\infty} f_n(x) \quad (x \in E), \quad (2)$$

便说函数  $f$  是级数  $\sum f_n$  的和。

出现的主要问题是：在极限运算 (1) 与 (2) 之下，判断函数的一些重要性质是否能够保留下来。例如，假如函数  $f_n$  都是连续的，或可微的，或可积的，这些性质对于极限函数是不是也成立？ $f_n$  与  $f'$  或  $f_n$  的积分与  $f$  的积分之间的关系是什么？

所谓  $f$  在  $x$  点连续，即是说

$$\lim_{t \to x} f(t) = f(x).$$

因此，问一个连续函数序列的极限是否连续，就等同于问是否

$$\lim_{t \to x} \lim_{n \to \infty} f_n(t) = \lim_{n \to \infty} \lim_{t \to x} f_n(t), \quad (3)$$

换句话说，执行这两个极限过程的次序是否无所谓。在 (3) 式的左端，我们先让  $n \to \infty$ ，然后让  $t \to x$ ；在右端，先是  $t \to x$ ，然后  $n \to \infty$ 。

现在，我们用几个实例说明两个极限过程一般不能互相交换而不影响最后结果。然后证明在某些条件下，两个极限运算的次序是无所谓的。

第一个也是最简单的例子，涉及一个“双重序列”。

**7.2 例**  $m=1, 2, 3, \dots$ ,  $n=1, 2, 3, \dots$ , 置

$$s_{m,n} = \frac{m}{m+n}.$$

那么对于每个固定的  $n$ ,

$$\lim_{m \to \infty} s_{m,n} = 1,$$

于是

$$\lim_{n \to \infty} \lim_{m \to \infty} s_{m,n} = 1. \quad (4)$$

另一方面, 对于每个固定的  $m$ .

$$\lim_{n \to \infty} s_{m,n} = 0,$$

于是

$$\lim_{m \to \infty} \lim_{n \to \infty} s_{m,n} = 0. \quad (5)$$

**7.3 例** 设  $x$  是实数,  $n=0, 1, 2, \dots$ ,

$$f_n(x) = \frac{x^2}{(1+x^2)^n}$$

试看

$$f(x) = \sum_{n=0}^{\infty} f_n(x) = \sum_{n=0}^{\infty} \frac{x^2}{(1+x^2)^n}. \quad (6)$$

由于  $f_n(0)=0$ , 便应该  $f(0)=0$ . 当  $x \neq 0$  时, (6)式中最末的级数是收敛的几何级数, 以  $1+x^2$  为和(定理 3.26). 因此,

$$f(x) = \begin{cases} 0 & (x=0), \\ 1+x^2 & (x \neq 0), \end{cases} \quad (7)$$

所以, 连续函数的收敛级数可以有不连续的和.

**7.4 例**  $m=1, 2, 3, \dots$ , 置

$$f_m(x) = \lim_{n \to \infty} (\cos m! \pi x)^{2n}.$$

当  $m! x$  是整数时,  $f_m(x)=1$ , 对于一切其他  $x$  值,  $f_m(x)=0$ . 现在令

$$f(x) = \lim_{m \to \infty} f_m(x).$$

当  $x$  是无理数时, 对于每个  $m$  值,  $f_m(x)=0$ , 因而  $f(x)=0$ ; 当  $x$  是有理数时, 比如说  $x = \frac{p}{q}$ , 这里  $p$  和  $q$  是整数; 这时如果  $m \ge q$ ,  $m! x$  便是整数, 于是  $f(x)=1$ . 因此

$$\lim_{m \to \infty} \lim_{n \to \infty} (\cos m! \pi x)^{2n} = \begin{cases} 0 & (x \text{ 是无理数}), \\ 1 & (x \text{ 是有理数}). \end{cases} \quad (8)$$

因此就得到了一个处处间断的极限函数，它不是 Riemann 可积的(第 6 章，习题 4).

**7.5 例** 设  $x$  是实数， $n=1, 2, 3, \dots$ ,

$$f_n(x) = \frac{\sin nx}{\sqrt{n}}, \quad (9)$$

于是

$$f(x) = \lim_{n \to \infty} f_n(x) = 0.$$

那么  $f'(x)=0$ ，另外

$$f'_n(x) = \sqrt{n} \cos nx,$$

所以， $\{f'_n\}$  不收敛于  $f'$ 。例如，当  $n \to \infty$  时，

$$f'_n(0) = \sqrt{n} \to +\infty$$

而  $f'(0)=0$ .

**7.6 例** 设  $0 \le x \le 1$ ， $n=1, 2, 3, \dots$  令

$$f_n(x) = n^2 x(1-x^2)^n \quad (10)$$

对于  $0 < x \le 1$ ，根据定理 3.20(d)

$$\lim_{n \to \infty} f_n(x) = 0,$$

又因为  $f_n(0)=0$ ，所以

$$\lim_{n \to \infty} f_n(x) = 0 \quad (0 \le x \le 1). \quad (11)$$

略加计算就能证明

$$\int_0^1 x(1-x^2)^n dx = \frac{1}{2n+2},$$

因此，虽然有(11)式，但是当  $n \to \infty$  时，

$$\int_0^1 f_n(x) dx = \frac{n^2}{2n+2} \to +\infty$$

如果在(10)式中用  $n^2$  代替  $n$ ，(11)式仍然成立。但是现在得到的是

$$\lim_{n \to \infty} \int_0^1 f_n(x) dx = \lim_{n \to \infty} \frac{n}{2n+2} = \frac{1}{2},$$

而

$$\int_0^1 [\lim_{n \to \infty} f_n(x)] dx = 0.$$

所以，积分的极限和极限的积分，即使两者都是有限的，也未必相等。

这些例题说明，如果粗心地对调了两个极限过程会错误到什么样子. 鉴于这一点，我们定义一个新的收敛方式，它比定义 7.1 中规定的逐点收敛性要强些. 这种新的收敛方式能使我们达到正面的结果.

## 一致收敛性

**7.7 定义** 如果对每一个  $\varepsilon > 0$ ，有一个整数  $N$ ，使得  $n \ge N$  时，对于一切  $x \in E$ ，成立

$$|f_n(x) - f(x)| \le \varepsilon \quad (12)$$

我们就说，函数序列  $\{f_n\}$ ， $n=1, 2, 3, \dots$ ，在  $E$  上一致收敛于函数  $f$ .

显然，每个一致收敛序列一定逐点收敛. 很明显，这两个概念之间的差异在于：如果  $\{f_n\}$  在  $E$  上逐点收敛，那便存在着这样的函数  $f$ ，它对于每个  $\varepsilon > 0$ ，又对于每个  $x \in E$ ，有一个整数  $N$ . 如果  $n \ge N$ ，(12) 式就成立，这里的  $N$  既依赖于  $\varepsilon$ ，又依赖于  $x$ . 如果  $\{f_n\}$  在  $E$  上一致收敛，便对于每个  $\varepsilon > 0$ ，能够对于一切  $x \in E$ ，找出一个整数  $N$ ，当  $n \ge N$  时，(12) 式成立.

级数  $\sum f_n(x)$  的部分和，规定为

$$\sum_{i=1}^{n} f_i(x) = s_n(x)$$

如果部分和序列  $\{s_n\}$  在  $E$  上一致收敛，我们就说级数  $\sum f_n(x)$  在  $E$  上一致收敛.

下面是关于一致收敛性的 Cauchy 准则：

**7.8 定理** 定义在  $E$  上的函数序列  $\{f_n\}$  在  $E$  上一致收敛，当且仅当：对于每个  $\varepsilon > 0$ ，存在着一个整数  $N$ ，使得  $m \ge N$ ， $n \ge N$  和  $x \in E$  时，成立

$$|f_n(x) - f_m(x)| \le \varepsilon. \quad (13)$$

**证** 假设  $\{f_n\}$  在  $E$  上一致收敛，并且令  $f$  是极限函数. 那么，有一个整数  $N$ ，使得  $n \ge N$  和  $x \in E$  时成立

$$|f_n(x) - f(x)| \le \frac{\varepsilon}{2},$$

于是  $n \ge N$ ， $m \ge N$ ， $x \in E$  时

$$|f_n(x) - f_m(x)| \le |f_n(x) - f(x)| + |f(x) - f_m(x)| \le \varepsilon$$

反之，假设 Cauchy 条件成立. 根据定理 3.11，序列  $\{f_n\}$  对于每个  $x$  收敛于一个极限，我们可称它为  $f(x)$ . 于是，序列  $\{f_n\}$  在  $E$  上收敛于  $f$ . 我们必须证明这个收敛是一致的.

假设给定了  $\varepsilon > 0$ ，再选定使 (13) 式成立的  $N$ . 在 (13) 里把  $n$  固定了，而让  $m \to \infty$ . 由于当  $m \to \infty$  时， $f_m(x) \to f(x)$ ，这就得到了对于个个  $n \ge N$  和个个

$x \in E$  都能适用的

$$|f_n(x) - f(x)| \le \varepsilon \quad (14)$$

这就完成了证明.

下面的判别准则往往有用:

**7.9 定理** 假设

$$\lim_{n \to \infty} f_n(x) = f(x) \quad (x \in E).$$

令

$$M_n = \sup_{x \in E} |f_n(x) - f(x)|.$$

那么, 在  $E$  上  $f_n \to f$  是一致的, 当且仅当:  $n \to \infty$  时,  $M_n \to 0$ .

这是定义 7.7 的直接结果. 证明从略.

对于级数, 有一个判别一致收敛性十分方便的方法, 它归功于 Weierstrass.

**7.10 定理** 假设  $\{f_n\}$  是定义在  $E$  上的函数序列. 并且, 假设

$$|f_n(x)| \le M_n \quad (x \in E, n = 1, 2, 3, \dots).$$

如果  $\sum M_n$  收敛, 那么,  $\sum f_n$  便在  $E$  上一致收敛.

注意, 并没有说它的逆命题怎样(而实际上是不真的).

**证** 如果  $\sum M_n$  收敛, 那么, 对于任意的  $\varepsilon > 0$ , 只要  $m$  和  $n$  都充分地大, 便能够

$$\left| \sum_{i=n}^{m} f_i(x) \right| \le \sum_{i=n}^{m} M_i \le \varepsilon \quad (x \in E),$$

根据定理 7.8, 就得出一致收敛性.

### 一致收敛性与连续性

**7.11 定理** 假设在度量空间内的集  $E$  上  $f_n$  一致收敛于  $f$ . 设  $x$  是  $E$  的极限点. 再假设

$$\lim_{t \to x} f_n(t) = A_n \quad (n = 1, 2, 3, \dots). \quad (15)$$

那么  $\{A_n\}$  收敛, 并且

$$\lim_{t \to x} f(t) = \lim_{n \to \infty} A_n. \quad (16)$$

换句话说, 这结论就是

$$\lim_{t \to x} \lim_{n \to \infty} f_n(t) = \lim_{n \to \infty} \lim_{t \to x} f_n(t). \quad (17)$$

**证** 假设给定了  $\varepsilon > 0$ . 按  $\{f_n\}$  的一致收敛性, 存在着  $N$ , 使得  $n \ge N$ ,  $m \ge N$  和  $t \in E$  时成立

$$|f_n(t) - f_m(t)| \le \epsilon. \quad (18)$$

在(18)式中, 让  $t \to x$ . 得到的是, 当  $n \ge N$ ,  $m \ge N$  时

$$|A_n - A_m| \le \epsilon$$

于是  $\{A_n\}$  是 Cauchy 序列, 因而收敛, 比如说收敛于  $A$ .

其次

$$|f(t) - A| \le |f(t) - f_n(t)| + |f_n(t) - A_n| + |A_n - A|. \quad (19)$$

先选取  $n$ , 要求对于一切  $t \in E$  使得

$$|f(t) - f_n(t)| \le \frac{\epsilon}{3} \quad (20)$$

(根据一致收敛性, 这是能做到的), 并且使得

$$|A_n - A| \le \frac{\epsilon}{3}. \quad (21)$$

然后对于这个  $n$ , 选取  $x$  的一个邻域  $V$ , 使得  $t \in V \cap E$ ,  $t \neq x$  能保证

$$|f_n(t) - A_n| \le \frac{\epsilon}{3} \quad (22)$$

将(20)到(22)的三个不等式代入(19)式, 结果就是: 只需  $t \in V \cap E$ ,  $t \neq x$  便有

$$|f(t) - A| \le \epsilon,$$

这和(16)式等价.

**7.12 定理** 如果  $\{f_n\}$  是  $E$  上的连续函数的序列. 并且在  $E$  上,  $f_n$  一致收敛于  $f$ . 那么,  $f$  在  $E$  上连续.

这个非常重要的结果是定理 7.11 的直接推论.

它的逆命题不真. 也就是说, 虽然收敛不是一致的, 但是, 一个连续函数的序列也可以收敛于一个连续函数. 例题 7.6 就属于这一类(为看清这一点, 需要应用定理 7.9). 但是, 有一种情形, 我们可以断定逆命题是正确的:

**7.13 定理** 假定  $K$  是紧集. 并且

- (a)  $\{f_n\}$  是  $K$  上的连续函数序列,
- (b)  $\{f_n\}$  在  $K$  上逐点收敛于连续函数  $f$ ,
- (c) 对于一切  $x \in K$  和  $n=1, 2, 3, \dots$ ,  $f_n(x) \ge f_{n+1}(x)$ .

那么在  $K$  上  $f_n \to f$  是一致的.

**证** 令  $g_n = f_n - f$  于是  $g_n$  是连续的, 在每点上  $g_n \to 0$  并且  $g_n \ge g_{n+1}$ . 现在要证明  $g_n$  在  $K$  上一致收敛于 0.

假设给定了  $\epsilon > 0$ , 假设  $K_n$  是使  $g_n(x) \ge \epsilon$  的一切  $x \in E$  的集. 由于  $g_n$  连续,

那么  $K_n$  是闭的(定理 4.8), 所以是紧的(定理 2.35). 由于  $g_n \ge g_{n+1}$ , 我们得到  $K_n \supset K_{n+1}$ . 固定了  $x \in K$ . 由于  $g_n(x) \to 0$ , 我们知道只需  $n$  充分大, 便能使  $x \notin K_n$ , 所以  $x \notin \bigcap K_n$ . 换句话说,  $\bigcap K_n$  是空的, 从而对应于某个  $N$  的  $K_N$  是空的(定理 2.36). 必然对于一切  $x \in K$  和一切  $n \ge N$ , 有  $0 \le g_n(x) < \epsilon$ . 这就证明了这定理.

注意紧性是必不可少的. 例如:

$$f_n(x) = \frac{1}{nx+1} \quad (0 < x < 1; \quad n = 1, 2, 3, \dots)$$

在  $(0, 1)$  里  $f_n(x)$  单调地趋于零, 然而不是一致收敛.

**7.14 定义** 如果  $X$  是度量空间,  $\mathscr{C}(X)$  就表示以  $X$  为定义域的复值连续有界函数的集.

[注意, 如果  $X$  是紧集, 有界性就是多余的(定理 4.15). 所以如果  $X$  是紧集,  $\mathscr{C}(X)$  就由  $X$  上的一切复值连续函数组成.]

我们给每个  $f \in \mathscr{C}(X)$  配置上它的上确范数

$$\|f\| = \sup_{x \in X} |f(x)|.$$

因为假定了  $f$  是有界的, 那么  $\|f\| < \infty$ . 显然只有当  $f(x) = 0$  (对于每个  $x \in X$ ) 时, 才有  $\|f\| = 0$ . 如果  $h = f + g$ , 那么对于一切  $x \in X$ ,

$$|h(x)| \le |f(x)| + |g(x)| \le \|f\| + \|g\|$$

所以

$$\|f+g\| \le \|f\| + \|g\|.$$

如果定义  $f \in \mathscr{C}(X)$  与  $g \in \mathscr{C}(X)$  之间的距离是  $\|f-g\|$ , 那么它就满足关于度量的公理 2.15.

于是我们使  $\mathscr{C}(X)$  变成了度量空间.

定理 7.9 可以重述为

对于  $\mathscr{C}(X)$  的度量来说, 序列  $\{f_n\}$  收敛于  $f$ , 当且仅当  $f_n$  在  $X$  上一致收敛于  $f$ .

因此  $\mathscr{C}(X)$  的闭子集有时叫做一致闭的, 集  $\mathscr{A} \subset \mathscr{C}(X)$  的闭包叫做它的一致闭包, 等等.

**7.15 定理** 上边说的度量使得  $\mathscr{C}(X)$  变成了完备度量空间.

**证** 设  $\{f_n\}$  是  $\mathscr{C}(X)$  里的 Cauchy 序列. 这就是说, 对应于每个  $\epsilon > 0$  有一个  $N$  使得  $\|f_n - f_m\| < \epsilon$  在  $n \ge N$  及  $m \ge N$  时成立. 于是根据定理 7.8 有一个函数  $f$ , 它以  $X$  为定义域, 而  $\{f_n\}$  一致收敛于它. 根据定理 7.12,  $f$  是连续的. 不仅如此, 由于总有一个  $n$ , 使得  $|f(x) - f_n(x)| < 1$  对于一切  $x \in X$  成立, 而  $f_n$  又有界, 那么  $f$  是有界的.

所以  $f \in \mathcal{C}(X)$ , 而且由于  $f_n$  在  $X$  上一致收敛于  $f$ , 那么当  $n \to \infty$  时  $\|f - f_n\| \to 0$ .

### 一致收敛性与积分

**7.16 定理** 设  $\alpha$  在  $[a, b]$  上单调递增. 假定在  $[a, b]$  上  $f_n \in \mathcal{R}(\alpha)$ ,  $n=1, 2, 3, \dots$ , 再假定在  $[a, b]$  上  $f_n \to f$  是一致的, 那么在  $[a, b]$  上  $f \in \mathcal{R}(\alpha)$ , 而且

$$\int_a^b f d\alpha = \lim_{n \to \infty} \int_a^b f_n d\alpha. \quad (23)$$

(极限的存在性是本结论的一部分.)

**证** 只对于实函数证明这定理就够了. 令

$$\varepsilon_n = \sup |f_n(x) - f(x)|, \quad (24)$$

这上确界是在  $a \le x \le b$  上取的. 这时

$$f_n - \varepsilon_n \le f \le f_n + \varepsilon_n,$$

所以  $f$  的上下积分(参阅定义 6.2)满足

$$\int_a^b (f_n - \varepsilon_n) d\alpha \le \underline{\int} f d\alpha \le \overline{\int} f d\alpha \le \int_a^b (f_n + \varepsilon_n) d\alpha. \quad (25)$$

从而

$$0 \le \overline{\int} f d\alpha - \underline{\int} f d\alpha \le 2\varepsilon_n [\alpha(b) - \alpha(a)].$$

由于  $n \to \infty$  时,  $\varepsilon_n \to 0$  (定理 7.9), 可见  $f$  的上下积分相等.

所以  $f \in \mathcal{R}(\alpha)$ . 现在再一次运用(25), 就得到

$$\left| \int_a^b f d\alpha - \int_a^b f_n d\alpha \right| \le \varepsilon_n [\alpha(b) - \alpha(a)]. \quad (26)$$

因此(23)成立.

**推论** 假若在  $[a, b]$  上  $f_n \in \mathcal{R}(\alpha)$ , 而且

$$f(x) = \sum_{n=1}^{\infty} f_n(x) \quad (a \le x \le b),$$

这级数在  $[a, b]$  上一致收敛, 则

$$\int_a^b f d\alpha = \sum_{n=1}^{\infty} \int_a^b f_n d\alpha.$$

换句话说: 这级数可以逐项积分.

### 一致收敛性与微分

从例题 7.5 已经知道, 由  $\{f_n\}$  的一致收敛不能推出序列  $\{f_n'\}$  的什么性质. 当

$f_n \to f$  时, 为了断定  $f'_n \to f'$  需要有较强的假设.

**7.17 定理** 假设  $\{f_n\}$  是  $[a, b]$  上的可微函数序列, 并且  $[a, b]$  上有某点  $x_0$  使  $\{f_n(x_0)\}$  收敛. 如果  $\{f'_n\}$  在  $[a, b]$  上一致收敛, 那么  $\{f_n\}$  便在  $[a, b]$  上一致收敛于某函数  $f$ ; 并且

$$f'(x) = \lim_{n \to \infty} f'_n(x) \quad (a \le x \le b). \quad (27)$$

证 假设给定了  $\varepsilon > 0$ , 选取一个  $N$  要它使得当  $n \ge N$  与  $m \ge N$  时有

$$|f_n(x_0) - f_m(x_0)| < \frac{\varepsilon}{2} \quad (28)$$

及

$$|f'_n(t) - f'_m(t)| < \frac{\varepsilon}{2(b-a)} \quad (a \le t \le b). \quad (29)$$

假如把中值定理 5.19 用于函数  $f_n - f_m$ , 那么由 (29) 式可以说明, 当  $n \ge N$ ,  $m \ge N$  时, 对于  $[a, b]$  上任意的  $x$  与  $t$ , 有

$$|f_n(x) - f_m(x) - f_n(t) + f_m(t)| \le \frac{|x-t|}{2(b-a)} \varepsilon \le \frac{\varepsilon}{2} \quad (30)$$

根据 (28) 与 (30) 知道不等式

$$\begin{aligned} |f_n(x) - f_m(x)| &\le |f_n(x) - f_m(x) - f_n(x_0) + f_m(x_0)| \\ &\quad + |f_n(x_0) - f_m(x_0)| \end{aligned}$$

意味着

$$|f_n(x) - f_m(x)| < \varepsilon \quad (a \le x \le b, n \ge N, m \ge N),$$

于是  $\{f_n\}$  在  $[a, b]$  上一致收敛. 令

$$f(x) = \lim_{n \to \infty} f_n(x) \quad (a \le x \le b).$$

现在在  $[a, b]$  上固定一点  $x$ , 并且对于  $a \le t \le b$ ,  $t \neq x$  定义

$$\phi_n(t) = \frac{f_n(t) - f_n(x)}{t - x}, \quad \phi(t) = \frac{f(t) - f(x)}{t - x} \quad (31)$$

那么,

$$\lim_{t \to x} \phi_n(t) = f'_n(x) \quad (n = 1, 2, 3, \dots). \quad (32)$$

(30) 里的头一个不等式表明

$$|\phi_n(t) - \phi_m(t)| \le \frac{\varepsilon}{2(b-a)} \quad (n \ge N, m \ge N),$$

于是  $\{\phi_n\}$  对于  $a \le t \le b$ ,  $t \neq x$  一致收敛. 又因为  $\{f_n\}$  收敛于  $f$ , 那么由 (31) 可以

断言, 对于  $a \le t \le b$ ,  $t \neq x$  一定

$$\lim_{n \to \infty} \phi_n(t) = \phi(t) \quad (33)$$

一致地成立.

如果现在把定理 7.11 用于  $\{\phi_n\}$ , (32) 与 (33) 式表明

$$\lim_{t \to x} \phi(t) = \lim_{n \to \infty} f'_n(x);$$

根据  $\phi(t)$  的定义, 这就是 (27) 式.

**评注** 如果在前面的假设条件之外, 再添上  $f'_n$  的连续性, 就可以根据定理 7.16 和微积分基本定理, 给 (27) 式做一个短得多的证明.

**7.18 定理** 实轴上确有处处不可微的实连续函数.

**证** 定义

$$\varphi(x) = |x| \quad (-1 \le x \le 1) \quad (34)$$

再要求

$$\varphi(x+2) = \varphi(x). \quad (35)$$

以将  $\varphi(x)$  的定义扩展到所有实数  $x$ , 那么对于一切  $s$  与  $t$ ,

$$|\varphi(s) - \varphi(t)| \le |s - t|. \quad (36)$$

特别地  $\varphi$  在  $R^1$  上连续. 定义

$$f(x) = \sum_{n=0}^{\infty} \left(\frac{3}{4}\right)^n \varphi(4^n x). \quad (37)$$

由于  $0 \le \varphi \le 1$ , 定理 7.10 表明, 级数 (37) 在  $R^1$  上一致收敛. 根据定理 7.12,  $f$  在  $R^1$  上连续.

现在固定一个实数  $x$  和一个正数  $m$ , 令

$$\delta_m = \pm \frac{1}{2} \cdot 4^{-m} \quad (38)$$

其中的符号要选得让  $4^m x$  与  $4^m(x + \delta_m)$  之间没有整数. 这一定能做到, 原因是  $4^m |\delta_m| = \frac{1}{2}$ . 定义

$$\gamma_n = \frac{\varphi(4^n(x + \delta_m)) - \varphi(4^n x)}{\delta_m}. \quad (39)$$

当  $n > m$  时,  $4^n \delta_m$  是偶数, 所以  $\gamma_n = 0$ . 当  $0 \le n \le m$  时, (36) 意味着  $|\gamma_n| \le 4^n$ .

由于  $|\gamma_m| = 4^m$ , 我们可以断定

$$\left| \frac{f(x + \delta_m) - f(x)}{\delta_m} \right| = \left| \sum_{n=0}^{m} \left(\frac{3}{4}\right)^n \gamma_n \right| \ge 3^m - \sum_{n=0}^{m-1} 3^n = \frac{1}{2}(3^m + 1).$$

当  $m \to \infty$  时,  $\delta_m \to 0$ , 所以  $f$  在  $x$  点不可微.

### 等度连续的函数族

从定理 3.6 已经知道, 每个有界的复数序列必有收敛的子序列, 于是发生一个问题: 关于函数序列, 类似的结论是否仍然正确. 为了把问题说得更确切, 我们定义两种有界性.

**7.19 定义** 令  $\{f_n\}$  是定义在集  $E$  上的函数序列.

我们说  $\{f_n\}$  在  $E$  上逐点有界, 如果对于每个  $x \in E$ , 序列  $\{f_n(x)\}$  是有界的. 也就是说: 如果存在着一个定义在  $E$  上的有限值函数  $\phi$ , 使得

$$|f_n(x)| < \phi(x) \quad (x \in E, n = 1, 2, 3, \dots).$$

我们说  $\{f_n\}$  在  $E$  上一致有界. 如果存在着一个数  $M$ , 使得

$$|f_n(x)| < M \quad (x \in E, n = 1, 2, 3, \dots).$$

如果  $\{f_n\}$  在  $E$  上逐点有界, 并且  $E_1$  是  $E$  的一个可数的子集, 便总能找到一个子序列  $\{f_{n_k}\}$ , 使得  $\{f_{n_k}(x)\}$  对于每个  $x \in E_1$  收敛. 根据定理 7.23 的证明中所用的对角线手法, 这点总可以做到.

然而, 即使  $\{f_n\}$  是某个紧集  $E$  上一致有界的连续函数序列, 也未必有在  $E$  上逐点收敛的子序列. 在下面所设的例题里, 如果用我们现有的知识来证明这个事实将是十分麻烦的, 但是如借助于第 11 章的一个定理, 证明就十分简单.

**7.20 例** 令

$$f_n(x) = \sin nx \quad (0 \le x \le 2\pi, n = 1, 2, 3, \dots).$$

假设有一个数列  $\{n_k\}$ , 使得  $\{\sin n_k x\}$  对于每个  $x \in [0, 2\pi]$  收敛. 这时候, 必然

$$\lim_{k \to \infty} (\sin n_k x - \sin n_{k+1} x) = 0 \quad (0 \le x \le 2\pi);$$

由此

$$\lim_{k \to \infty} (\sin n_k x - \sin n_{k+1} x)^2 = 0 \quad (0 \le x \le 2\pi). \quad (40)$$

根据关于有界收敛序列积分的 Lebesgue 定理(定理 11.23), (40) 意味着

$$\lim_{k \to \infty} \int_0^{2\pi} (\sin n_k x - \sin n_{k+1} x)^2 dx = 0. \quad (41)$$

但是由简单计算得到

$$\int_0^{2\pi} (\sin n_k x - \sin n_{k+1} x)^2 dx = 2\pi,$$

这与(41)式矛盾.

另一个问题是: 每个收敛序列是否含有一致收敛的子序列. 下一个例题说

明, 这不是必然的; 即使序列在一个紧集上一致有界, 也是这样. (例题 7.6 表明, 有界函数序列可以收敛而不一致有界. 但是有界函数序列的一致收敛性包含着一致有界性, 却是显而易见的.)

**7.21 例** 设  $0 \le x \le 1$ ,  $n=1, 2, 3, \dots$

$$f_n(x) = \frac{x^2}{x^2 + (1-nx)^2}.$$

那么  $|f_n(x)| \le 1$ , 于是  $\{f_n\}$  在  $[0, 1]$  上一致有界. 还有

$$\lim_{n \to \infty} f_n(x) = 0 \quad (0 \le x \le 1),$$

可是

$$f_n\left(\frac{1}{n}\right) = 1 \quad (n = 1, 2, 3, \dots),$$

因此, 没有子序列能在  $[0, 1]$  上一致收敛.

关于这情形所需要的概念是等度连续, 下面就是它的定义.

**7.22 定义**  $f$  是定义在度量空间  $X$  内集  $E$  上的函数,  $\mathcal{F}$  是  $f$  的族. 说  $\mathcal{F}$  在  $E$  上等度连续, 就是说对于每个  $\epsilon > 0$ , 存在着一个  $\delta > 0$ , 只要  $d(x, y) < \delta$ ,  $x \in E, y \in E$  及  $f \in \mathcal{F}$  就能使得

$$|f(x) - f(y)| < \epsilon$$

这里  $d$  表示  $X$  的度量.

显然, 等度连续族的每个函数是一致连续的.

例 7.21 中的函数序列不是等度连续的.

一方面是等度连续性, 另一方面是连续函数的一致收敛性, 双方之间有十分密切的关系. 定理 7.24 与 7.25 将要说明这一点, 但是需要先说一下与连续性无关的选择法.

**7.23 定理** 假若  $\{f_n\}$  是在可数集  $E$  上逐点有界的复值函数序列, 那么  $\{f_n\}$  便有子序列  $\{f_{n_k}\}$ , 使得  $\{f_{n_k}(x)\}$  对于每个  $x \in E$  收敛.

**证** 设  $\{x_i\}$ ,  $i=1, 2, 3, \dots$ , 是由  $E$  的点排成的序列. 既然  $\{f_n(x_1)\}$  有界, 便存在着一个子序列  $\{f_{1,k}\}$  使得  $\{f_{1,k}(x_1)\}$  当  $k \to \infty$  时收敛.

现在, 我们筹划一个可以用阵列写出来的序列  $S_1, S_2, S_3, \dots$ ,

$$\begin{aligned} S_1: & \quad f_{1,1} \quad f_{1,2} \quad f_{1,3} \quad f_{1,4} \quad \dots \\ S_2: & \quad f_{2,1} \quad f_{2,2} \quad f_{2,3} \quad f_{2,4} \quad \dots \\ S_3: & \quad f_{3,1} \quad f_{3,2} \quad f_{3,3} \quad f_{3,4} \quad \dots \\ & \dots \dots \dots \dots \dots \dots \dots \dots \end{aligned}$$

要求它们有下面这些性质:

- (a) 对于  $n=2, 3, 4, \dots$ ,  $S_n$  是  $S_{n-1}$  的子序列;  
 (b) 当  $k \to \infty$  时,  $\{f_{n,k}(x_n)\}$  收敛 ( $\{f_n(x_n)\}$  的有界性保证能按这种方法选取  $S_n$ );

(c) 在每个序列里函数出现的先后是一样的. 即是说, 如果某函数在  $S_1$  中位于另一个函数之前. 那么, 它们便在每个  $S_n$  中保持同样的位置关系, 一直到其中有一个函数被去掉为止. 因此, 从上述阵列的某行过渡到下一行时, 函数可以向左移动, 而决不能向右移动.

现在取阵列的对角线上的这列函数, 即是考虑序列

$$S: f_{1,1} \quad f_{2,2} \quad f_{3,3} \quad f_{4,4} \quad \dots$$

根据(c), 序列  $S$  (可能要去掉它的前  $n-1$  项)是  $S_n$  的子序列,  $n=1, 2, 3, \dots$ , 因此, 由(b)得出  $n \to \infty$  时  $\{f_{n,n}(x_i)\}$  对于每个  $x_i \in E$  收敛.

**7.24 定理** 如果  $K$  是紧度量空间,  $f_n \in \mathcal{L}(K)$ ,  $n=1, 2, 3, \dots$ , 而且  $\{f_n\}$  在  $K$  上一致收敛, 那么  $\{f_n\}$  便在  $K$  上等度连续.

**证** 假设给定了  $\epsilon > 0$ , 既然  $\{f_n\}$  一致收敛, 便有正整数  $N$  使得

$$\|f_n - f_N\| < \epsilon \quad (n > N). \quad (42)$$

(参阅定义 7.14). 由于紧集上的连续函数一定一致连续, 所以有一个  $\delta > 0$ , 使得

$$|f_i(x) - f_i(y)| < \epsilon \quad (43)$$

只要  $1 \le i \le N$ , 而且  $d(x, y) < \delta$ .

若是  $n > N$  而且  $d(x, y) < \delta$ , 就应该

$$\begin{aligned} |f_n(x) - f_n(y)| &\le |f_n(x) - f_N(x)| + |f_N(x) - f_N(y)| \\ &\quad + |f_N(y) - f_n(y)| < 3\epsilon. \end{aligned}$$

这和(43)联合起来就把定理证明了.

**7.25 定理** 假若  $K$  是紧集,  $f_n \in \mathcal{L}(K)$ ,  $n=1, 2, 3, \dots$ , 而且  $\{f_n\}$  在  $K$  上逐点有界又等度连续, 那么

- (a)  $\{f_n\}$  在  $K$  上一致有界,  
 (b)  $\{f_n\}$  含有一致收敛的子序列.

**证**

(a) 假设给定了  $\epsilon > 0$ , 又按照定义 7.22 选了  $\delta > 0$ , 可以对于一切  $n$ , 由  $d(x, y) < \delta$  保证

$$|f_n(x) - f_n(y)| < \epsilon \quad (44)$$

既然  $K$  是紧集, 便有  $K$  里的有限多个点  $p_1, \dots, p_r$ , 使得每个  $x \in K$  至少对于一个  $p_i$  符合于  $d(x, p_i) < \delta$ . 既然  $\{f_n\}$  逐点有界, 便有  $M_i < \infty$  对于一切  $n$

有  $|f_n(p_i)| < M_i$ . 如果  $M = \max(M_1, \dots, M_n)$ , 那么对于每个  $x \in K$  总要  $|f_n(x)| < M + \epsilon$ , 这就把(a)证明了.

(b) 设  $E$  是  $K$  的可数稠密子集 (关于这样集  $E$  的存在, 参阅第 2 章习题 25). 定理 7.23 说明  $\{f_n\}$  有一个子序列  $\{f_{n_i}\}$  使得  $\{f_{n_i}(x)\}$  对于每个  $x \in E$  收敛.

为了简化记号, 令  $f_{n_i} = g_i$ . 现在证明  $\{g_i\}$  在  $K$  上一致收敛.

设  $\epsilon > 0$ , 再照本证明一开始那样取  $\delta > 0$ . 设  $V(x, \delta)$  是一切  $y \in K$  之合于  $d(x, y) < \delta$  的集. 由于  $E$  在  $K$  中稠密, 而  $K$  是紧的, 便有  $E$  的有限个点  $x_1, \dots, x_m$ , 使得

$$K \subset V(x_1, \delta) \cup \dots \cup V(x_m, \delta). \quad (45)$$

因为  $\{g_i(x)\}$  对于每个  $x \in E$  收敛, 所以有一个正整数  $N$  使得

$$|g_i(x_s) - g_j(x_s)| < \epsilon \quad (46)$$

其中  $i \ge N, j \ge N, 1 \le s \le m$ .

如果  $x \in K$ , (45) 就表示对于某个  $s$ ,  $x \in V(x_s, \delta)$ , 所以对于每个  $i$

$$|g_i(x) - g_j(x)| < \epsilon$$

如果  $i \ge N, j \ge N$ , 从 (46) 就应该有:

$$\begin{aligned} |g_i(x) - g_j(x)| &\le |g_i(x) - g_i(x_s)| + |g_i(x_s) - g_j(x_s)| \\ &\quad + |g_j(x_s) - g_j(x)| < 3\epsilon. \end{aligned}$$

证毕.

## Stone-Weierstrass 定理

**7.26 定理** 如果  $f$  是  $[a, b]$  上的一个连续复函数, 那么便有多项式  $P_n$  的序列, 使得

$$\lim_{n \to \infty} P_n(x) = f(x)$$

在  $[a, b]$  上一致地成立. 如果  $f$  是实函数,  $P_n$  可以是实多项式.

这就是 Weierstrass 最初发现的定理的形式.

**证** 我们可以假定  $[a, b] = [0, 1]$  而不失却普遍性, 还可以假设  $f(0) = f(1) = 0$ . 因为, 如果对于这种情形证明了这定理, 然后考虑

$$g(x) = f(x) - f(0) - x[f(1) - f(0)] \quad (0 \le x \le 1).$$

这里  $g(0) = g(1) = 0$ . 于是一旦  $g$  能作为一致收敛的多项式序列的极限. 那么, 显然  $f$  也是这样. 这因为  $f - g$  是多项式.

此外, 在  $[0, 1]$  以外的点  $x$  上定义  $f(x) = 0$ . 那么,  $f$  在整个实轴上一致连续.

置

$$Q_n(x) = c_n(1-x^2)^n \quad (n = 1, 2, 3, \dots), \quad (47)$$

这里的  $c_n$  是按照

$$\int_{-1}^{1} Q_n(x) dx = 1 \quad (n = 1, 2, 3, \dots). \quad (48)$$

选取的. 我们需要一点点关于  $c_n$  的数量阶的知识. 由于

$$\begin{aligned} \int_{-1}^{1} (1-x^2)^n dx &= 2 \int_{0}^{1} (1-x^2)^n dx \ge 2 \int_{0}^{1/\sqrt{n}} (1-x^2)^n dx \\ &\ge 2 \int_{0}^{1/\sqrt{n}} (1-nx^2) dx = \frac{4}{3\sqrt{n}} > \frac{1}{\sqrt{n}}, \end{aligned}$$

从(48)知道

$$c_n < \sqrt{n}. \quad (49)$$

上式中用到的不等式  $(1-x^2)^n \ge 1-nx^2$  是容易证明的, 这因为

$$(1-x^2)^n - 1 + nx^2$$

在  $x=0$  时等于 0, 并且它的导数在  $(0, 1)$  内是正的.

对于任意的  $\delta > 0$ , 由(49)式得

$$Q_n(x) \le \sqrt{n}(1-\delta^2)^n \quad (\delta \le |x| \le 1), \quad (50)$$

于是在  $\delta \le |x| \le 1$  中,  $Q_n \to 0$  一致地成立.

现在令

$$P_n(x) = \int_{-1}^{1} f(x+t) Q_n(t) dt \quad (0 \le x \le 1). \quad (51)$$

利用关于  $f$  的假定 [ $t < -x$  及  $t > 1-x$  时,  $f(x+t) = 0$ ], 再经过简单的变量代换, 可以得到

$$\begin{aligned} P_n(x) &= \int_{-x}^{1-x} f(x+t) Q_n(t) dt \\ &= \int_{0}^{1} f(t) Q_n(t-x) dt, \end{aligned}$$

并且上边最后一个积分显然是关于  $x$  的多项式. 于是,  $\{P_n\}$  是多项式序列. 如果  $f$  是实的, 那么它也是实的.

给定了  $\epsilon > 0$ , 然后取  $\delta > 0$ , 使得  $|y-x| < \delta$  时有

$$|f(y) - f(x)| < \frac{\epsilon}{2}.$$

设  $M = \sup |f(x)|$ . 用(48), (50)和  $Q_n(x) \ge 0$  的事实, 我们看到, 对于  $0 \le x \le 1$  以及所有足够大的  $n$ ,

$$\begin{aligned}
 |P_n(x) - f(x)| &= \left| \int_{-1}^{1} [f(x+t) - f(x)] Q_n(t) dt \right| \\
 &\le \int_{-1}^{1} |f(x+t) - f(x)| Q_n(t) dt \\
 &\le 2M \int_{-1}^{-\delta} Q_n(t) dt + \frac{\epsilon}{2} \int_{-\delta}^{\delta} Q_n(t) dt + 2M \int_{\delta}^{1} Q_n(t) dt \\
 &\le 4M \sqrt{n} (1 - \delta^2)^n + \frac{\epsilon}{2} < \epsilon
 \end{aligned}$$

这就证明了本定理.

对几个  $n$  的值画出  $Q_n$  的图像是有益的. 还要注意, 为了推导  $\{P_n\}$  的一致收敛性, 我们需要  $f$  的一致连续性.

证明定理 7.32 时, 并不需要定理 7.26 的全部结果, 而只需要下边这个特殊情形, 现在把它作为推论说一下.

**7.27 推论** 在每个闭区间  $[-a, a]$  上, 必有实多项式  $P_n$  的序列, 令于  $P_n(0) = 0$ , 而且

$$\lim_{n \to \infty} P_n(x) = |x|$$

在  $[-a, a]$  上一致地成立.

**证** 根据定理 7.26, 存在着实多项式序列  $\{P_n^*\}$ , 它在  $[-a, a]$  上一致收敛于  $|x|$ . 特别地, 当  $n \to \infty$  时  $P_n^*(0) \to 0$ . 多项式

$$P_n(x) = P_n^*(x) - P_n^*(0) \quad (n = 1, 2, 3, \dots)$$

便有我们所希望的性质.

现在我们把多项式的一些能使 Weierstrass 定理成立的性质摘出来.

**7.28 定义** 我们称定义在集  $E$  上的复函数族  $\mathcal{A}$  为代数, 如果对于一切  $f \in \mathcal{A}, g \in \mathcal{A}$  来说, (i)  $f+g \in \mathcal{A}$ , (ii)  $fg \in \mathcal{A}$ , (iii) 对于一切复常数  $c$ ,  $cf \in \mathcal{A}$ . 也就是说,  $\mathcal{A}$  对于加法、乘法以及数乘是封闭的. 我们还必须研究实函数的代数. 这时, (iii) 自然只要求对于一切实数  $c$  成立.

如果(代数)  $\mathcal{A}$  有一种性质是: 只要  $f_n \in \mathcal{A}$  ( $n=1, 2, 3, \dots$ ), 并且在  $E$  上  $f_n \to f$  一致成立, 便有  $f \in \mathcal{A}$ . 就说  $\mathcal{A}$  是一致闭的.

设  $\mathcal{B}$  是由  $\mathcal{A}$  内所有一致收敛函数序列的极限函数组成的集, 便称  $\mathcal{B}$  是  $\mathcal{A}$  的一致闭包.

例如, 所有多项式的集是一个代数. 因而 Weierstrass 定理可以叙述为:  $[a, b]$  上的连续函数的集是  $[a, b]$  上的多项式集的一致闭包.

**7.29 定理** 设  $\mathcal{B}$  是有界函数的代数  $\mathcal{A}$  的一致闭包. 那么  $\mathcal{B}$  是一致闭的代数.

证 如果  $f \in \mathcal{B}$  与  $g \in \mathcal{B}$ , 便有一致收敛的序列  $\{f_n\}, \{g_n\}$  合于  $f_n \to f, g_n \to g$ , 并且  $f_n \in \mathcal{A}, g_n \in \mathcal{A}$ . 因为我们在讨论有界函数, 那么不难证明

$$f_n + g_n \to f + g, \quad f_n g_n \to f g, \quad c f_n \to c f,$$

这里  $c$  是任意常数. 每种情形里的收敛都是一致的.

因此  $f+g \in \mathcal{B}, f g \in \mathcal{B}$ , 且  $c f \in \mathcal{B}$ , 于是  $\mathcal{B}$  是代数.

根据定理 2.27,  $\mathcal{B}$  是(一致)闭的.

**7.30 定义** 设  $\mathcal{A}$  是集  $E$  上的函数族. 说  $\mathcal{A}$  能分离  $E$  的点, 就是说对应于每对不同的点  $x_1, x_2 \in E$ , 总有一个函数  $f \in \mathcal{A}$ , 使得  $f(x_1) \neq f(x_2)$ .

如对应于每个  $x \in E$ , 有一个函数  $g \in \mathcal{A}$ , 使得  $g(x) \neq 0$ , 我们就说,  $\mathcal{A}$  不在  $E$  的点消失.

所有一元多项式的代数显然在  $R^1$  上有这些性质. 关于不能分离点的代数, 有一个例子是所有偶多项式的集(比如说定义在  $[-1, 1]$  上), 因为对于每个偶函数  $f$ , 都有  $f(-x) = f(x)$ .

下面的定理更能说明这些概念.

**7.31 定理** 设  $\mathcal{A}$  是定义在集  $E$  上的函数的代数,  $\mathcal{A}$  能分离  $E$  的点,  $\mathcal{A}$  又不在  $E$  的点消失. 假设  $x_1, x_2$  是  $E$  的不同的两点.  $c_1, c_2$  是常数(如果  $\mathcal{A}$  是实代数它们就是实数). 那么  $\mathcal{A}$  便含有一个函数  $f$ , 使得

$$f(x_1) = c_1, \quad f(x_2) = c_2.$$

证 这些假设说明  $\mathcal{A}$  里有函数  $g, h$  和  $k$  合于

$$g(x_1) \neq g(x_2), \quad h(x_1) \neq 0, \quad k(x_2) \neq 0.$$

置

$$u = gk - g(x_1)k, \quad v = gh - g(x_2)h.$$

于是  $u \in \mathcal{A}, v \in \mathcal{A}, u(x_1) = v(x_2) = 0, u(x_2) \neq 0, v(x_1) \neq 0$ , 所以

$$f = \frac{c_1 v}{v(x_1)} + \frac{c_2 u}{u(x_2)}$$

就有所希望的性质.

现在我们已经具备了 Stone 推广 Weierstrass 定理时所需要的一切资料.

**7.32 定理** 设  $\mathcal{A}$  是紧集  $K$  上的实连续函数的代数. 假如  $\mathcal{A}$  能分离  $K$  的点. 如果  $\mathcal{A}$  又不在  $K$  的点消失. 那么  $\mathcal{A}$  的一致闭包  $\mathcal{B}$  由  $K$  上的所有实连续函数组成.

我们将证明分为四步.

第一步. 如果  $f \in \mathcal{B}$ , 那么  $|f| \in \mathcal{B}$ .

证 设

$$a = \sup |f(x)| \quad (x \in K) \quad (52)$$

再给定  $\varepsilon > 0$ . 根据推论 7.27, 存在着实数  $c_1, \dots, c_n$ , 使得

$$\left| \sum_{i=1}^{n} c_i y^i - |y| \right| < \varepsilon \quad (-a \le y \le a). \quad (53)$$

因为  $\mathcal{B}$  是代数, 所以函数

$$g = \sum_{i=1}^{n} c_i f^i$$

是  $\mathcal{B}$  的成员. 由(52)和(53)得到

$$|g(x) - |f(x)|| < \varepsilon \quad (x \in K).$$

因为  $\mathcal{B}$  是一致闭的, 这就表示  $|f| \in \mathcal{B}$ .

**第二步.** 如果  $f \in \mathcal{B}$ ,  $g \in \mathcal{B}$ , 那么  $\max(f, g) \in \mathcal{B}$ ,  $\min(f, g) \in \mathcal{B}$ .

$\max(f, g)$  就是由

$$h(x) = \begin{cases} f(x) & \text{如果 } f(x) \ge g(x), \\ g(x) & \text{如果 } f(x) < g(x), \end{cases}$$

定义的函数  $h$ , 并且同样地定义  $\min(f, g)$ .

证 这第二步是第一步和恒等式

$$\begin{aligned} \max(f, g) &= \frac{f+g}{2} + \frac{|f-g|}{2}, \\ \min(f, g) &= \frac{f+g}{2} - \frac{|f-g|}{2}. \end{aligned}$$

的直接结果. 重叠地作下去, 这个结果自然可以推广到函数的任意有限集: 如果  $f_1, \dots, f_n \in \mathcal{B}$ , 那么

$$\min(f_1, \dots, f_n) \in \mathcal{B}.$$

**第三步.** 给定一个在  $K$  上连续的实函数  $f$ , 一点  $x \in K$ , 以及  $\varepsilon > 0$ , 便存在着一个函数  $g_x \in \mathcal{B}$  满足  $g_x(x) = f(x)$ , 而且

$$g_x(t) > f(t) - \varepsilon \quad (t \in K). \quad (54)$$

证 由于  $\mathcal{A} \subset \mathcal{B}$  而  $\mathcal{A}$  又满足定理 7.31 的假定, 所以  $\mathcal{B}$  也满足这些假定. 于是, 对于每个  $y \in E$ , 能找到一个函数  $h_y \in \mathcal{B}$ , 使得

$$h_y(x) = f(x), \quad h_y(y) = f(y). \quad (55)$$

根据  $h_y$  的连续性, 存在一个包含  $y$  点的开集  $J_y$ , 使得

$$h_y(t) > f(t) - \varepsilon \quad (t \in J_y). \quad (56)$$

既然  $K$  是紧集, 便有一个有有限个点  $y_1, \dots, y_n$  的集, 使得

$$K \subset J_{y_1} \cup \dots \cup J_{y_n}. \quad (57)$$

置

$$g_x = \max(h_{y_1}, \dots, h_{y_n}).$$

根据第二步知道  $g_x \in \mathcal{B}$ , 而且关系式(55)至(57)表明  $g_x$  也有其他所要求的性质.

**第四步.** 给定一个在  $K$  上连续的实函数  $f$  和  $\varepsilon > 0$ , 那么便存在着一个函数  $h \in \mathcal{B}$ , 使得

$$|h(x) - f(x)| < \varepsilon \quad (x \in K). \quad (58)$$

因为  $\mathcal{B}$  是一致闭的. 这个命题与本定理的结论是等价的.

**证** 在第三步里, 我们对于每个  $x \in K$ , 作出了一个函数  $g_x$ . 由于  $g_x$  的连续性, 存在着包含  $x$  点的开集  $V_x$ , 使得

$$g_x(t) < f(t) + \varepsilon \quad (t \in V_x). \quad (59)$$

因为  $K$  是紧的, 有一个有限点集  $x_1, \dots, x_m$ , 使得

$$K \subset V_{x_1} \cup \dots \cup V_{x_m}. \quad (60)$$

置

$$h = \min(g_{x_1}, \dots, g_{x_m}),$$

根据第二步知道  $h \in \mathcal{B}$ , 并且由(54)得

$$h(t) > f(t) - \varepsilon \quad (t \in K), \quad (61)$$

而由(59)与(60)得

$$h(t) < f(t) + \varepsilon \quad (t \in K). \quad (62)$$

最后, 由(61)与(62)便知(58)式成立.

**定理 7.32** 对于复代数不成立, 习题 21 中有反例. 然而, 假如给  $\mathcal{A}$  添一个额外条件:  $\mathcal{A}$  是自伴的, 这定理的结论就也适用于复代数了.  $\mathcal{A}$  是自伴的意味着每当  $f \in \mathcal{A}$  时, 它的复共轭  $\bar{f}$  必须也属于  $\mathcal{A}$ ; 这里  $\bar{f}$  由  $\bar{f}(x) = \overline{f(x)}$  定义.

**7.33 定理** 设  $\mathcal{A}$  是(定义在)紧集  $K$  上的复连续函数的自伴代数.  $\mathcal{A}$  能分离  $K$  的点,  $\mathcal{A}$  又不在  $K$  的点消失. 那么,  $\mathcal{A}$  的一致闭包  $\mathcal{B}$  由  $K$  上的所有复连续函数组成; 即是说  $\mathcal{A}$  在  $\mathcal{C}(K)$  内稠密.

**证** 设  $\mathcal{A}_R$  是  $K$  上属于  $\mathcal{A}$  的所有实函数的集.

如果  $f \in \mathcal{A}$ , 而  $f = u + iv$ ,  $u, v$  是实的. 那么,  $2u = f + \bar{f}$ . 并且由于  $\mathcal{A}$  是自伴的, 知道  $u \in \mathcal{A}_R$ . 假如  $x_1 \neq x_2$ , 那么就存在着  $f \in \mathcal{A}$ , 使得  $f(x_1) = 1$ ,

$f(x_2) = 0$ ; 因此  $0 = u(x_2) \neq u(x_1) = 1$ . 这表明  $\mathcal{A}_R$  能分离  $K$  的点. 如果  $x \in K$ , 便有某个  $g \in \mathcal{A}$  合于  $g(x) \neq 0$ . 那么又有一个复数  $\lambda$ , 使得  $\lambda g(x) > 0$ . 假如  $f = \lambda g$ ,  $f = u + iv$ , 从而  $u(x) > 0$ . 因此,  $\mathcal{A}_R$  不在  $K$  的点消失.

这样一来,  $\mathcal{A}_R$  适合定理 7.32 的假定, 所以  $K$  上的每个实连续函数必在  $\mathcal{A}_R$  的一致闭包之中, 从而在  $\mathcal{B}$  中. 假如  $f$  是  $K$  上的复连续函数,  $f = u + iv$ , 这时  $u \in \mathcal{B}, v \in \mathcal{B}$ , 因此,  $f \in \mathcal{B}$ . 到此证明完毕.

### 习题

1. 试证每一个一致收敛的有界函数序列一致有界.

2. 如果  $\{f_n\}$  与  $\{g_n\}$  在集  $E$  上一致收敛, 试证:  $\{f_n + g_n\}$  在  $E$  上一致收敛. 此外, 假如  $\{f_n\}$  与  $\{g_n\}$  都是有界函数的序列, 试证  $\{f_n g_n\}$  在  $E$  上一致收敛.

3. 作两个序列  $\{f_n\}$ ,  $\{g_n\}$ . 要它们在某个集  $E$  上一致收敛, 但是  $\{f_n g_n\}$  在  $E$  上不一致收敛 (当然,  $\{f_n g_n\}$  应在  $E$  上收敛).

4. 研究级数

$$f(x) = \sum_{n=1}^{\infty} \frac{1}{1+n^2 x}.$$

这级数对于  $x$  的什么值绝对收敛? 它在什么闭区间上一致收敛? 在什么闭区间上它失去一致收敛性? 是否在级数收敛的地方,  $f$  都是连续的?  $f$  是有界的吗?

5. 设

$$f_n(x) = \begin{cases} 0 & \left(x < \frac{1}{n+1}\right), \\ \sin^2 \frac{\pi}{x} & \left(\frac{1}{n+1} \le x \le \frac{1}{n}\right), \\ 0 & \left(\frac{1}{n} < x\right). \end{cases}$$

试证  $\{f_n\}$  收敛于一个连续函数, 但不是一致收敛的. 用级数  $\sum f_n$  证明: 绝对收敛不能推出一致收敛, 那怕是对于所有  $x$  都绝对收敛也不行.

6. 试证级数

$$\sum_{n=1}^{\infty} (-1)^n \frac{x^2 + n}{n^2}.$$

在每个有界闭区间上一致收敛, 但是对任何  $x$  值, 不绝对收敛.

7. 设  $n=1, 2, 3, \dots$ ,  $x$  是实数. 令

$$f_n(x) = \frac{x}{1+nx^2}.$$

试证  $\{f_n\}$  一致收敛于一个函数  $f$ , 并且等式

$$f'(x) = \lim_{n \to \infty} f'_n(x)$$

当  $x \neq 0$  时是正确的，而当  $x=0$  是错误的。

#### 8. 假设

$$I(x) = \begin{cases} 0 & (x \le 0), \\ 1 & (x > 0), \end{cases}$$

若  $\{x_n\}$  是  $(a, b)$  内相异点的序列，又若  $\sum |c_n|$  收敛，试证级数

$$f(x) = \sum_{n=1}^{\infty} c_n I(x - x_n) \quad (a \le x \le b)$$

一致收敛，对每个  $x \neq x_n$ ， $f$  连续。

#### 9. 设 $\{f_n\}$ 是连续函数的序列，在集 $E$ 上一致收敛于函数 $f$ 。试证

$$\lim_{n \to \infty} f_n(x_n) = f(x)$$

对于每个合于  $x_n \to x$  的点列  $\{x_n\}$  成立，这里  $x_n \in E$ ， $x \in E$ 。这命题的逆命题是否正确？

#### 10. 用 $(x)$ 表示 $x$ 的小数部分(定义见第 4 章习题 16)，考虑函数

$$f(x) = \sum_{n=1}^{\infty} \frac{(nx)}{n^2} \quad (x \text{ 为实数}).$$

求  $f$  的所有间断点，证明它们组成一个可数的稠密集。再证明  $f$  在任意有界闭区间上仍然 Riemann 可积。

#### 11. 假设 $\{f_n\}$ ， $\{g_n\}$ 都是在 $E$ 上定义的，并且

(a)  $\sum f_n$  的部分和一致有界，

(b) 在  $E$  上  $g_n \to 0$  是一致的，

(c) 对于每个  $x \in E$ ， $g_1(x) \ge g_2(x) \ge g_3(x) \ge \dots$ 。

试证  $\sum f_n g_n$  在  $E$  上一致收敛。提示：对照定理 3.42。

12. 假设  $g$  与  $f_n$  ( $n=1, 2, 3, \dots$ ) 都定义在  $(0, \infty)$  上，只要  $0 < t < T < \infty$ ，便都在  $[t, T]$  上 Riemann 可积。  $|f_n| \le g$ ，在  $(0, \infty)$  的每个紧子集上  $f_n \to f$  是一致的，而且

$$\int_0^{\infty} g(x) dx < \infty.$$

试证

$$\lim_{n \to \infty} \int_0^{\infty} f_n(x) dx = \int_0^{\infty} f(x) dx.$$

(与本题有关的各定义，可以看第 6 章习题 7、8。)

这是 Lebesgue 控制收敛定理(定理 11.32)的较弱形式。只要假定了  $f \in \mathcal{R}$ ，

即便在 Riemann 积分叙述的字句里, 也可以把一致收敛换作逐点收敛. (参考 F. Cunningham 在 *Math. Mag.* 1967 年 40 卷, 第 179—186 页和 H. Kestelman 在 *Amer. Math. Monthly*, 1970 年 77 卷, 第 182—187 页的文章.)

13. 假定  $\{f_n\}$  是  $R^1$  上单调递增函数序列, 对于一切  $x$  和一切  $n$ ,

$$0 \le f_n(x) \le 1.$$

(a) 试证有一个函数  $f$  和一个序列  $\{n_k\}$ , 能对于每个  $x \in R^1$ , 使得

$$f(x) = \lim_{k \to \infty} f_{n_k}(x)$$

(这样逐点收敛的子序列的存在, 时常称为 Helly 的选择定理.)

(b) 如果再加上  $f$  连续的条件, 试证在  $R^1$  上  $f_{n_k} \to f$  是一致的.

提示: (i) 某个子序列  $\{f_{n_k}\}$  在一切有理点  $r$  收敛, 比如说收敛于  $f(r)$ . (ii) 对于任何  $x$  定义  $f(x)$  为  $\sup f(r)$ , 这确界取自一切  $r \le x$  之中. (iii) 证明在  $f$  连续的每个点  $x$  上  $f_{n_k}(x) \to f(x)$  (这里单调性起很大的作用). (iv)  $\{f_{n_k}\}$  的一个子序列, 在  $f$  的每个间断点上收敛, 这因为最多有可数多个那样的点. 这就证明了 (a). 把 (iii) 的证明适当地修改一下, 就可以证明 (b).

14. 设  $f$  是  $R^1$  上具有下列性质的连续实函数:  $0 \le f(t) \le 1$ , 对于每个  $t$ ,  $f(t+2) = f(t)$ , 并且

$$f(t) = \begin{cases} 0 & (0 \le t \le \frac{1}{3}) \\ 1 & (\frac{2}{3} \le t \le 1). \end{cases}$$

令  $\Phi(t) = (x(t), y(t))$ , 其中

$$x(t) = \sum_{n=1}^{\infty} 2^{-n} f(3^{2n-1} t), \quad y(t) = \sum_{n=1}^{\infty} 2^{-n} f(3^{2n} t).$$

试证  $\Phi$  连续, 而且  $\Phi$  把  $I = [0, 1]$  映满单位正方形  $I^2 \subset R^2$ . 如果已证出这件事, 再证  $\Phi$  能把 Cantor 集映满单位正方形  $I^2 \subset R^2$ .

提示: 每一个  $(x_0, y_0) \in I^2$  可以取得

$$x_0 = \sum_{n=1}^{\infty} 2^{-n} a_{2n-1}, \quad y_0 = \sum_{n=1}^{\infty} 2^{-n} a_{2n}$$

的形式, 这里  $a_i$  是 0 或 1. 如果

$$t_0 = \sum_{i=1}^{\infty} 3^{-i-1} (2a_i)$$

证明  $f(3^i t_0) = a_k$ , 于是  $x(t_0) = x_0$ ,  $y(t_0) = y_0$ .

(这是所谓“满布空间曲线”的简单例题. 它归功于 I. J. Schoenberg, 见

bull. A. M. S. 1938年44卷, 第519页.)

15. 假设  $f$  是  $R^1$  上的实连续函数,  $f_n(t) = f(nt)$ ,  $n = 1, 2, 3, \dots$ , 而且  $\{f_n(t)\}$  在  $[0, 1]$  上等度连续. 关于  $f$  你能得出什么结论?

16. 假设  $\{f_n\}$  是紧集  $K$  上的等度连续的函数序列,  $\{f_n\}$  又在  $K$  上逐点收敛. 试证  $\{f_n\}$  在  $K$  上一致收敛.

17. 给映入任意度量空间的映射规定一致收敛与等度连续的概念. 试证定理 7.9 与 7.12 对于映入任何度量空间的映射都正确; 定理 7.8 与 7.11 对于映入任何完备度量空间的映射都正确; 定理 7.10, 7.16, 7.17, 7.24, 7.25 适用于向量值函数, 即是适用于映入任何  $R^k$  的映射.

18. 设  $\{f_n\}$  是一致有界的函数序列, 这些函数都在  $[a, b]$  上 Riemann 可积. 令

$$F_n(x) = \int_a^x f_n(t) dt \quad (a \le x \le b).$$

求证存在着子序列  $\{F_{n_k}\}$ , 它在  $[a, b]$  上一致收敛.

19. 设  $K$  是紧度量空间,  $S$  是  $\mathscr{C}(K)$  的子集. 证明  $S$  是紧的 (对于 7.14 节定义的度量) 当且仅当  $S$  一致闭, 逐点有界, 并且等度连续. (如果  $S$  不等度连续,  $S$  便含有一个序列, 它没有等度连续的子序列, 从而没有在  $K$  上一致收敛的子序列.)

20. 如果  $f$  在  $[0, 1]$  上连续, 而且

$$\int_0^1 f(x) x^n dx = 0 \quad (n = 0, 1, 2, \dots),$$

试证在  $[0, 1]$  上  $f(x) = 0$ . 提示:  $f$  与任何多项式之积的积分是零. 用 Weierstrass 定理证明

$$\int_0^1 f^2(x) dx = 0.$$

21. 设  $K$  是复平面上的单位圆 (即是一切  $z$  之合于  $|z| = 1$  的集), 再设  $\mathscr{A}$  是所有形式为

$$f(e^{i\theta}) = \sum_{n=0}^{N} c_n e^{in\theta} \quad (\theta \text{ 是实数})$$

的函数组成的代数. 那么  $\mathscr{A}$  能分离  $K$  上的点, 也不在  $K$  的点消失, 但是仍然有  $K$  上的连续函数不属于  $\mathscr{A}$  的一致闭包.

提示: 对于每个  $f \in \mathscr{A}$

$$\int_0^{2\pi} f(e^{i\theta}) e^{i\theta} d\theta = 0,$$

而且对于  $\mathcal{A}$  的闭包里的每个  $f$ , 这也是对的.

22. 假定在  $[a, b]$  上  $f \in \mathcal{R}(a)$ , 求证有多项式  $P_n$  令于

$$\lim_{n \to \infty} \int_a^b |f - P_n|^2 da = 0.$$

(与第6章习题12对照.)

23. 设  $P_0=0$ , 对于  $n=0, 1, 2, \dots$  定义

$$P_{n+1}(x) = P_n(x) + \frac{x^2 - P_n^2(x)}{2}.$$

试证在  $[-1, 1]$  上  $\lim_{n \to \infty} P_n(x) = |x|$  是一致的.

(这就能够证明 Stone-Weierstrass 定理而不先证定理 7.26.)

提示: 用恒等式

$$|x| - P_{n+1}(x) = [|x| - P_n(x)] \left[ 1 - \frac{|x| + P_n(x)}{2} \right]$$

证明  $|x| \le 1$  时,  $0 \le P_n(x) \le P_{n+1}(x) \le |x|$  与  $|x| \le 1$  时

$$|x| - P_n(x) \le |x| \left( 1 - \frac{|x|}{2} \right)^n < \frac{2}{n+1}$$

24. 设  $X$  是以  $d$  为度量的度量空间. 固定一点  $a \in X$ . 给每个  $p \in X$  指派一个函数  $f_p$ ,

$$f_p(x) = d(x, p) - d(x, a) \quad (x \in X).$$

试证  $|f_p(x)| \le d(a, p)$  对于一切  $x \in X$  成立, 从而  $f_p \in \mathcal{C}(X)$ . 对于一切  $p, q \in X$ , 证明

$$\|f_p - f_q\| = d(p, q)$$

如果  $\Phi(p) = f_p$ , 那么  $\Phi$  是从  $X$  到  $\Phi(X) \subset \mathcal{C}(X)$  的等距(保持距离的)映射.

设  $Y$  是  $\Phi(x)$  在  $\mathcal{C}(X)$  里的闭包, 试证  $Y$  是完备的.

结论:  $X$  与完备度量空间  $Y$  的稠密子集是等距的.

(第3章习题24有这命题的另一个证明.)

25. 假设  $\phi$  是长条形区域  $0 \le x \le 1, -\infty < y < +\infty$  内的连续有界实函数.

试证初值问题

$$y' = \phi(x, y), \quad y(0) = c$$

有一个解. (注意, 这个存在定理的假定比相应的惟一性定理的假定条件限制较少. 参阅第5章习题7.)

提示: 固定了  $n$ , 对于  $i=0, \dots, n$ , 令  $x_i = i/n$ . 设  $f_n$  是  $[0, 1]$  上的连续函

数, 使得  $f_n(0)=c$ , 而且  $x_i < t < x_{i+1}$  时

$$f'_n(t) = \phi(x_i, f_n(x_i)),$$

并且在  $t \neq x_i$  时, 置

$$\Delta_n(t) = f'_n(t) - \phi(t, f_n(t)),$$

而当  $t = x_i$  时, 置  $\Delta_n(t) = 0$ , 然后

$$f_n(x) = c + \int_0^x [\phi(t, f_n(t)) + \Delta_n(t)] dt.$$

选  $M < \infty$  使  $|\phi| \le M$ . 证明下列各条:

(a)  $|f'_n| \le M$ ,  $|\Delta_n| \le 2M$ ,  $\Delta_n \in \mathcal{R}$ , 而且在  $[0, 1]$  上对于一切  $n$ ,

$$|f_n| \le |c| + M = M_1.$$

(b) 由于  $|f'_n| \le M$ ,  $\{f_n\}$  在  $[0, 1]$  上等度连续.

(c) 某个  $\{f_{n_k}\}$  在  $[0, 1]$  一致收敛于某个  $f$ .

(d) 既然  $\phi$  在矩形  $0 \le x \le 1$ ,  $|y| \le M_1$  上一致连续, 那么在  $[0, 1]$  上

$$\phi(t, f_{n_k}(t)) \to \phi(t, f(t))$$

是一致的.

(e) 因为在  $(x_i, x_{i+1})$  内

$$\Delta_n(t) = \phi(x_i, f_n(x_i)) - \phi(t, f_n(t))$$

那么  $\Delta_n(t)$  在  $[0, 1]$  上一致收敛于 0.

(f) 所以

$$f(x) = c + \int_0^x \phi(t, f(t)) dt.$$

这  $f$  就是所给问题的一个解.

26. 现在设  $c \in R^k$ ,  $y \in R^k$ ,  $\Phi$  是连续有界映射, 它把  $R^{k+1}$  里被  $0 \le x \le 1$ ,  $y \in R^k$  所限定的部分映入  $R^k$  内. 对于初值问题

$$y' = \Phi(x, y), \quad y(0) = c,$$

证明类似的定理. (对照第 5 章习题 28.) 提示: 用定理 7.25 的向量值说法.


