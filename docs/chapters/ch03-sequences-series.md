# 第 3 章 数列与级数

这章的标题说明，这里将要初步地讨论复数的序列和级数。然而关于收敛性的基本事实，即使在更一般的情况下阐述，也同样地容易。所以前三节就在欧几里得空间，甚至在度量空间里讲了。

## 收敛序列

**3.1 定义** 度量空间  $X$  中的序列  $\{p_n\}$  叫做收敛的，如果有一个有下述性质的点  $p \in X$ ：对于每个  $\varepsilon > 0$ ，有一个正整数  $N$ ，使得  $n \ge N$  时， $d(p_n, p) < \varepsilon$ （这里  $d$  表示  $X$  中的距离）。

这时候，我们也说  $\{p_n\}$  收敛于  $p$ ，或者说  $p$  是  $\{p_n\}$  的极限[参看定理 3.2(b)]，并且写作  $p_n \to p$ ，或

$$\lim_{n \to \infty} p_n = p.$$

如果  $\{p_n\}$  不收敛，便说它发散。

这“收敛序列”的定义不仅依赖于  $\{p_n\}$ ，而且依赖于  $X$ ，指明这一点很有好处；例如，序列  $\left\{\frac{1}{n}\right\}$  在  $\mathbb{R}^1$  里收敛(于 0)，而在一切正实数的集里(取  $d(x, y) = |x - y|$ )不收敛。在可能发生怀疑的时候，我们宁愿明确而详细地说“在  $X$  中收敛”而不说“收敛”。

我们记得，一切点  $p_n$  ( $n = 1, 2, 3, \dots$ ) 的集是  $\{p_n\}$  的值域，序列的值域可以是有限的，也可以是无限的。如果它的值域是有界的，就说序列  $\{p_n\}$  是有界的。

作为例题，我们来审辨一下下边的复数序列(即  $X = \mathbb{R}^2$ )。

- (a) 如果  $s_n = 1/n$ ，那么  $\lim_{n \to \infty} s_n = 0$ ；值域是无限的，但序列是有界的。
- (b) 如果  $s_n = n^2$ ，那么序列  $\{s_n\}$  无界，发散，而值域是无限的。
- (c) 如果  $s_n = 1 + [(-1)^n / n]$ ，那么序列  $\{s_n\}$  收敛于 1，有界而且值域是无限的。

(d) 如果  $s_n = i^n$ ，那么序列  $\{s_n\}$  发散，有界，而值域是有限的。

(e) 如果  $s_n = 1$  ( $n = 1, 2, 3, \dots$ ) 那么  $\{s_n\}$  收敛于 1，有界而且值域是有限的。

现在，把度量空间中收敛序列的一些重要性质汇集起来。

**3.2 定理** 设  $\{p_n\}$  是度量空间  $X$  中的序列

(a)  $\{p_n\}$  收敛于  $p \in X$ ，当且仅当  $p$  点的每个邻域，能包含  $\{p_n\}$  的，除有限项以外的一切项。

(b) 如果  $p \in X$ ， $p' \in X$ ， $\{p_n\}$  收敛于  $p$  又收敛于  $p'$ ，那么  $p' = p$ 。

(c) 如果  $\{p_n\}$  收敛,  $\{p_n\}$  必有界.

(d) 如果  $E \subset X$ , 而  $p$  是  $E$  的极限点, 那么在  $E$  中有一个序列  $\{p_n\}$ , 使  $p = \lim_{n \to \infty} p_n$ .

证 (a) 假定  $p_n \to p$ , 并设  $V$  是  $p$  点的邻域, 对于某个  $\epsilon > 0$ , 条件  $d(q, p) < \epsilon$ ,  $q \in X$  意味着  $q \in V$ . 对应于这个  $\epsilon$ , 存在着  $N$ , 使得当  $n \ge N$  时有  $d(p_n, p) < \epsilon$ . 所以  $n \ge N$  就得出  $p_n \in V$ .

反过来, 假定  $p$  点的每个邻域, 除有限个点外, 包含一切点  $p_n$ . 固定  $\epsilon > 0$ , 并设  $V$  是满足  $d(p, q) < \epsilon$  的  $q \in X$  的集. 根据假定, (对应于这个邻域) 存在一个  $N$ , 使得  $n \ge N$  时  $p_n \in V$ , 所以  $n \ge N$  时,  $d(p_n, p) < \epsilon$ ; 这就是说  $p_n \to p$ .

(b) 设  $\epsilon > 0$  已给定, 那么存在正整数  $N, N'$ , 使当

$$n \ge N \text{ 有 } d(p_n, p) < \frac{\epsilon}{2},$$

$$n \ge N' \text{ 有 } d(p_n, p') < \frac{\epsilon}{2}.$$

因此, 如果  $n \ge \max(N, N')$ , 就有

$$d(p, p') \le d(p, p_n) + d(p_n, p') < \epsilon.$$

由于数  $\epsilon$  是任意的, 可以断定  $d(p, p') = 0$ .

(c) 假定  $p_n \to p$ . 那么存在着正整数  $N$ , 使得当  $n > N$  有  $d(p_n, p) < 1$ . 令

$$r = \max\{1, d(p_1, p), \dots, d(p_N, p)\},$$

那么, 当  $n = 1, 2, 3, \dots$  时,  $d(p_n, p) \le r$ .

(d) 对于每个正整数  $n$ , 有点  $p_n \in E$ , 使  $d(p_n, p) < 1/n$ . 给定了  $\epsilon > 0$ , 选取  $N$ , 使得  $N\epsilon > 1$ . 如果  $n > N$ , 就得  $d(p_n, p) < \epsilon$ . 因此  $p_n \to p$ .

证毕.

对于  $R^k$  中的序列, 我们可以研究收敛性与代数运算之间的关系. 首先考虑复数序列.

**3.3 定理** 假定  $\{s_n\}, \{t_n\}$  是复数序列, 而且  $\lim_{n \to \infty} s_n = s, \lim_{n \to \infty} t_n = t$ . 那么

$$(a) \lim_{n \to \infty} (s_n + t_n) = s + t;$$

$$(b) \text{对于任何数 } c, \lim_{n \to \infty} cs_n = cs, \lim_{n \to \infty} (c + s_n) = c + s;$$

$$(c) \lim_{n \to \infty} s_n t_n = st;$$

$$(d) \text{只要 } s_n \neq 0 (n = 1, 2, 3, \dots) \text{ 且 } s \neq 0, \text{ 就有 } \lim_{n \to \infty} \frac{1}{s_n} = \frac{1}{s}.$$

证 (a) 给定了  $\epsilon > 0$ , 存在着正整数  $N_1, N_2$  使得

$$n \ge N_1 \text{ 时, } |s_n - s| < \frac{\epsilon}{2},$$

$$n \ge N_2 \text{ 时, } |t_n - t| < \frac{\epsilon}{2}.$$

如果  $N = \max(N_1, N_2)$ , 那么  $n \ge N$  时, 便有

$$|(s_n + t_n) - (s + t)| \le |s_n - s| + |t_n - t| < \epsilon.$$

这就证明了(a). 至于(b)的证明则很容易.

(c) 我们用恒等式

$$s_n t_n - st = (s_n - s)(t_n - t) + s(t_n - t) + t(s_n - s). \quad (1)$$

给定了  $\epsilon > 0$ , 存在着正整数  $N_1, N_2$ , 使得

$$n \ge N_1 \text{ 时, } |s_n - s| < \sqrt{\epsilon},$$

$$n \ge N_2 \text{ 时, } |t_n - t| < \sqrt{\epsilon}.$$

如果取  $N = \max(N_1, N_2)$ , 那么  $n \ge N$  时就有

$$|(s_n - s)(t_n - t)| < \epsilon$$

由此

$$\lim_{n \to \infty} (s_n - s)(t_n - t) = 0.$$

现把(a)和(b)用于恒等式(1), 就可以断定

$$\lim_{n \to \infty} (s_n t_n - st) = 0$$

(d) 选一个  $m$ , 使当  $n \ge m$  时,  $|s_n - s| < \frac{1}{2} |s|$ , 就知道

$$|s_n| > \frac{1}{2} |s| \quad (n \ge m).$$

给定了  $\epsilon > 0$ , 就存在正整数  $N, N > m$ , 使得当  $n \ge N$  时

$$|s_n - s| < \frac{1}{2} |s|^2 \epsilon.$$

因此, 当  $n \ge N$  时,

$$\left| \frac{1}{s_n} - \frac{1}{s} \right| = \left| \frac{s_n - s}{s_n s} \right| < \frac{2}{|s|^2} |s_n - s| < \epsilon.$$

**3.4 定理**

(a) 假定  $\mathbf{x}_n \in R^k (n=1, 2, 3, \dots)$  而

$$\mathbf{x}_n = (\alpha_{1,n}, \dots, \alpha_{k,n}).$$

那么序列  $\{\mathbf{x}_n\}$  收敛于  $\mathbf{x} = (\alpha_1, \dots, \alpha_k)$ , 当且仅当

$$\lim_{n \to \infty} a_{j,n} = a_j \quad (1 \le j \le k). \quad (2)$$

(b) 假定  $\{x_n\}$ ,  $\{y_n\}$  是  $R^k$  中的序列,  $\{\beta_n\}$  是实数序列, 并且  $x_n \to x$ ,  $y_n \to y$ ,  $\beta_n \to \beta$ . 那么

$$\lim_{n \to \infty} (x_n + y_n) = x + y, \quad \lim_{n \to \infty} x_n \cdot y_n = x \cdot y, \quad \lim_{n \to \infty} \beta_n x_n = \beta x.$$

证

(a) 如果  $x_n \to x$ , 那么, 从  $R^k$  中范数的定义马上可以推得不等式

$$|a_{j,n} - a_j| \le |x_n - x|,$$

这说明等式(2)成立.

反之, 如果(2)成立, 对应于每个  $\varepsilon > 0$ , 有一个正整数  $N$ , 使得  $n \ge N$  时,

$$|a_{j,n} - a_j| < \frac{\varepsilon}{\sqrt{k}} \quad (1 \le j \le k).$$

因此,  $n \ge N$  时

$$|x_n - x| = \left\{ \sum_{j=1}^{k} |a_{j,n} - a_j|^2 \right\}^{\frac{1}{2}} < \varepsilon,$$

所以  $x_n \to x$ . 这就证明了(a).

(b) 可以由(a)和定理 3.3 推出来.

## 子序列

**3.5 定义** 设有序列  $\{p_n\}$ , 取正整数序列  $\{n_k\}$ , 使  $n_1 < n_2 < n_3 < \dots$ , 那么序列  $\{p_{n_k}\}$  便叫做  $\{p_n\}$  的子序列, 如果  $\{p_{n_k}\}$  收敛, 就把它的极限叫做  $\{p_n\}$  的部分极限.

显然, 序列  $\{p_n\}$  收敛于  $p$ , 当且仅当它的任何子序列收敛于  $p$ . 我们把证明的细节留给读者.

**3.6 定理**

(a) 如果  $\{p_n\}$  是紧度量空间  $X$  中的序列, 那么  $\{p_n\}$  有某个子序列, 收敛到  $X$  中的某个点.

(b)  $R^k$  中的每个有界序列含有收敛的子序列.

证

(a) 设  $E$  是  $\{p_n\}$  的值域. 如果  $E$  有限, 那么必有  $p$  及序列  $\{n_i\} (n_1 < n_2 < n_3 < \dots)$  使得:

$$p_{n_1} = p_{n_2} = \dots = p.$$

显然, 这样得到的子序列  $\{p_{n_i}\}$  收敛于  $p$ .

如果  $E$  是无限的, 定理 2.37 说明  $E$  有极限点  $p \in X$ . 选取  $n_1$  使  $d(p, p_{n_1}) < 1$ . 选定  $n_1, n_2, \dots, n_{i-1}$  以后, 据定理 2.20 知道一定有正整数  $n_i > n_{i-1}$ , 使得  $d(p, p_{n_i}) < \frac{1}{i}$ . 于是子序列  $\{p_{n_i}\}$  收敛于  $p$ .

(b) 这由 (a) 即可得到. 因为定理 2.41 说明  $R^k$  的每个有界子集必含于  $R^k$  的一个紧子集中.

**3.7 定理** 度量空间  $X$  里的序列  $\{p_n\}$  的部分极限组成  $X$  的闭子集.

**证** 设  $E^*$  是  $\{p_n\}$  的所有部分极限组成的集,  $q$  是  $E^*$  的极限点. 现在需要证明  $q \in E^*$ .

选  $n_1$ , 使  $p_{n_1} \neq q$  (如果没有这样的  $n_1$ , 那么  $E^*$  只有一个点, 那就没有什么要证的了). 令  $\delta = d(q, p_{n_1})$ . 假设已经选好了  $n_1, \dots, n_{i-1}$ , 因为  $q$  是  $E^*$  的极限点, 必有  $x \in E^*$ , 使  $d(x, q) < 2^{-i}\delta$ . 因  $x \in E^*$ , 必有  $n_i > n_{i-1}$ , 使得  $d(x, p_{n_i}) < 2^{-i}\delta$ . 于是对于  $i=1, 2, 3, \dots$ ,

$$d(q, p_{n_i}) \le 2^{1-i}\delta.$$

这就是说  $\{p_{n_i}\}$  收敛于  $q$ . 因此  $q \in E^*$ .

## Cauchy 序列

**3.8 定义** 度量空间  $X$  中的序列  $\{p_n\}$  叫做 Cauchy 序列, 如果对于任何  $\varepsilon > 0$  存在着正整数  $N$ , 只要  $n \ge N$  和  $m \ge N$  便有  $d(p_n, p_m) < \varepsilon$ .

在 Cauchy 序列的讨论中, 以及在今后出现的其他情况下, 下述几何概念是有用的.

**3.9 定义** 设  $E$  是度量空间  $X$  的子集, 又设  $S$  是一切形式为  $d(p, q)$  的实数的集, 这里  $p \in E$ ,  $q \in E$ . 数  $\sup S$  叫做  $E$  的直径, 记作  $\text{diam } E$ .

如果  $\{p_n\}$  是  $X$  中的序列, 而  $E_N$  由点  $p_N, p_{N+1}, p_{N+2}, \dots$  组成. 那么, 从上边的两个定义来看, 显然可以说:  $\{p_n\}$  是 Cauchy 序列, 当且仅当

$$\lim_{N \to \infty} \text{diam } E_N = 0.$$

**3.10 定理**

(a) 如果  $E$  是度量空间  $X$  中的集,  $\bar{E}$  是  $E$  的闭包, 那么

$$\text{diam } \bar{E} = \text{diam } E.$$

(b) 如果  $\{K_n\}$  是  $X$  中的紧集的序列, 并且  $K_n \supset K_{n+1}$  ( $n=1, 2, 3, \dots$ ),

又若

$$\lim_{n \to \infty} \text{diam } K_n = 0,$$

那么  $\bigcap_{1}^{\infty} K_n$  由一个点组成.

证

(a) 因为  $E \subset \bar{E}$ , 显然

$$\text{diam } E \le \text{diam } \bar{E}$$

固定了  $\varepsilon > 0$ , 再取  $p \in \bar{E}$ ,  $q \in \bar{E}$ . 根据  $\bar{E}$  的定义, 必然在  $E$  中有两点  $p'$ ,  $q'$  使得  $d(p, p') < \varepsilon$ ,  $d(q, q') < \varepsilon$ . 因此

$$\begin{aligned} d(p, q) &\le d(p, p') + d(p', q') + d(q', q) \\ &< 2\varepsilon + d(p', q') \le 2\varepsilon + \text{diam } E. \end{aligned}$$

可见  $\text{diam } \bar{E} \le 2\varepsilon + \text{diam } E$ , 又因为  $\varepsilon$  是任意的, 所以(a)被证明了.

(b) 令  $K = \bigcap_{n=1}^{\infty} K_n$ . 根据定理 2.36,  $K$  不空. 如果  $K$  不只包含一个点, 那就使得  $\text{diam } K > 0$ . 然而对于每个  $n$ , 有  $K_n \supset K$ , 从而  $\text{diam } K_n \ge \text{diam } K$ . 这与假设条件  $\text{diam } K_n \to 0$  矛盾.

**3.11 定理**

(a) 在度量空间中, 收敛序列是 Cauchy 序列.

(b) 如果  $X$  是紧度量空间, 并且如果  $\{p_n\}$  是  $X$  中的 Cauchy 序列, 那么  $\{p_n\}$  收敛于  $X$  的某个点.

(c) 在  $R^k$  中, 每个 Cauchy 序列收敛.

注: 收敛的定义与 Cauchy 序列定义之间的差别是, 前者明显地含有极限, 而后者则不然. 于是定理 3.11(b)可以使我们断定已知序列是否收敛, 而不需知道它要收敛的极限.

定理 3.11 中的第三条即是  $R^k$  中的序列收敛, 当且仅当它是 Cauchy 序列; 时常叫做判断收敛的 Cauchy 准则.

证

(a) 若  $p_n \to p$  且  $\varepsilon > 0$ , 便有正整数  $N$ , 保证只要  $n \ge N$ , 便有  $d(p, p_n) < \varepsilon$ . 因此, 只要  $n \ge N$  且  $m \ge N$

$$d(p_n, p_m) \le d(p_n, p) + d(p, p_m) < 2\varepsilon.$$

于是  $\{p_n\}$  是 Cauchy 序列.

(b) 设  $\{p_n\}$  是紧空间  $X$  中的 Cauchy 序列, 对于  $N=1, 2, 3, \dots$ , 令  $E_N$  是由  $p_N, p_{N+1}, p_{N+2}, \dots$  组成的集. 那么, 按定义 3.9 及定理 3.10(a),

$$\lim_{N \to \infty} \text{diam } \bar{E}_N = 0, \quad (3)$$

每个  $\bar{E}_N$  既是紧空间的闭子集, 因而必是紧集(定理 2.35). 又因为  $E_N \supset E_{N+1}$ , 所以  $\bar{E}_N \supset \bar{E}_{N+1}$ .

根据定理 3.10(b), 在  $X$  中有惟一的  $p$  在每个  $\bar{E}_N$  中.

设给定了  $\varepsilon > 0$ . 据(3), 有整数  $N_0$ , 凡当  $N \ge N_0$  的时候, 就有  $\text{diam } \bar{E}_N < \varepsilon$ . 由于  $p \in \bar{E}_N$ , 所以对每个  $q \in \bar{E}_N$ ,  $d(p, q) < \varepsilon$ , 当然对每个  $q \in \bar{E}_N$  也有  $d(p, q) < \varepsilon$ . 换句话说, 只要  $n \ge N_0$ , 就  $d(p, p_n) < \varepsilon$ . 这正是说  $p_n \to p$ .

(c) 设  $\{x_n\}$  是  $R^k$  中的 Cauchy 序列. 像在(b)中那样定义  $E_N$ , 但要把  $p_1$  换成  $x_1$ . 有某个  $N$ ,  $\text{diam } E_N < 1$ .  $\{x_n\}$  的值域是  $E_N$  与有限集  $\{x_1, \dots, x_{N-1}\}$  的并. 所以  $\{x_n\}$  有界. 因  $R^k$  的每个有界子集在  $R^k$  中有紧闭包(定理 2.41), 由(b)即得 (c).

**3.12 定义** 如果度量空间  $X$  中的每个 Cauchy 序列在  $X$  中收敛, 就说它是完备的.

因此, 定理 3.11 是说, 所有紧度量空间及所有欧氏空间是完备的. 定理 3.11 还说明, 完备度量空间  $X$  的闭子集  $E$  是完备的. ( $E$  中的每个 Cauchy 序列是  $X$  中的 Cauchy 序列, 因此它收敛于某  $p \in X$ , 但因  $E$  是闭集, 所以实际  $p \in E$ ). 以  $d(x, y) = |x - y|$  为距离, 一切有理数组成的空间是不完备度量空间的一个例子.

定理 3.2(c) 及定义 3.1 的例(d)说明, 收敛序列是有界的. 但  $R^k$  中的有界序列不一定收敛. 然而, 还有收敛性就等价于有界性这样一种重要情况; 对于  $R^1$  中的单调序列就是这样.

**3.13 定义** 实数序列  $\{s_n\}$  叫做

(a) 单调递增的, 如果  $s_n \le s_{n+1}$  ( $n=1, 2, 3, \dots$ );

(b) 单调递减的, 如果  $s_n \ge s_{n+1}$  ( $n=1, 2, 3, \dots$ ).

单调递增和单调递减序列, 组成单调序列类.

**3.14 定理** 单调序列  $\{s_n\}$  收敛, 当且仅当它是有界的.

证 假定  $s_n \le s_{n+1}$  (另一种情形的证明和这类似). 设  $E$  是  $\{s_n\}$  的值域, 如果  $\{s_n\}$  有界, 设  $s$  是  $E$  的最小上界, 那么

$$s_n \le s \quad (n = 1, 2, 3, \dots).$$

对于每个  $\varepsilon > 0$ , 一定有一个正整数  $N$ , 使  $s - \varepsilon < s_N \le s$ , 如果不然的话,  $s - \varepsilon$  将要是  $E$  的上界了. 因为  $\{s_n\}$  递增, 所以  $n \ge N$  时有

$$s - \varepsilon < s_n \le s.$$

这说明  $\{s_n\}$  收敛(于  $s$ ).

逆命题可以从定理 3.2(c) 推出来.

## 上极限和下极限

**3.15 定义** 设  $\{s_n\}$  是有下列性质的实数序列: 对于任意的实数  $M$ , 有一个正整数  $N$ , 而  $n \ge N$  时有  $s_n \ge M$ , 我们便把这写作

$$s_n \to +\infty.$$

类似地, 如果对于任意的实数  $M$ , 有一个正整数  $N$ , 而  $n \ge N$  时有  $s_n \le M$ , 我们便把这写作

$$s_n \to -\infty.$$

应当注意, 我们现在对某些类型的发散序列也像对收敛序列一样地使用了在定义 3.1 中引进的符号  $\to$ , 但是, 在定义 3.1 中讲的收敛和极限的定义毫不改变.

**3.16 定义** 设  $\{s_n\}$  是实数序列.  $E$  是所有可能的子序列  $\{s_{n_k}\}$  的极限  $x$  (在扩大了的实数系里,  $s_{n_k} \to x$ ) 组成的集.  $E$  含有定义 3.5 所规定的部分极限, 可能还有  $+\infty$ ,  $-\infty$  两数.

回想一下定义 1.8 和 1.23, 令

$$s^* = \sup E,$$

$$s_* = \inf E.$$

$s^*$  和  $s_*$  两数叫做序列  $\{s_n\}$  的上极限和下极限. 采用的记号是

$$\limsup_n s_n = s^*, \quad \liminf_n s_n = s_*.$$

**3.17 定理** 设  $\{s_n\}$  是实数序列, 设  $E$  和  $s^*$  的意义和定义 3.16 中说的一样, 那么  $s^*$  有以下两种性质:

(a)  $s^* \in E$ .

(b) 如果  $x > s^*$ , 那么就有正整数  $N$ , 能使  $n \ge N$  时有  $s_n < x$ . 此外,  $s^*$  是惟一具有性质(a)和(b)的数.

当然, 对于  $s_*$ , 与此类似的结论也正确.

证

(a) 如果  $s^* = +\infty$ , 那么  $E$  不是上有界; 因此  $\{s_n\}$  不是上有界, 因而有子序列  $\{s_{n_k}\}$  合于  $s_{n_k} \to +\infty$ .

如果  $s^*$  是实数, 那么  $E$  上有界, 从而至少有一个部分极限. 因此, (a) 可以从定理 3.7 和 2.28 推出来.

如果  $s^* = -\infty$ , 那么  $E$  只包含一个元素, 就是  $-\infty$ , 从而没有部分极限. 就是说, 对于任意实数  $M$ , 只有有限个  $n$  的值, 使得  $s_n > M$ . 于是  $s_n \to -\infty$ .

这就在所有情形下证明了(a).

(b) 假定有一个数  $x > s^*$ , 而且有无限多个  $n$  的值使得  $s_n > x$ . 那时, 则有一个数  $y \in E$ , 使  $y \ge x > s^*$ . 这与  $s^*$  的定义矛盾.

所以  $s^*$  满足条件(a)和(b).

为了证明惟一性, 我们假定有两个数  $p$  和  $q$  都满足条件(a)和(b), 并且假定  $p < q$ . 取  $x$  要它适合  $p < x < q$ . 因为  $p$  满足(b), 那么当  $n \ge N$  时有  $s_n < x$ . 但是, 如果真这样的话,  $q$  就不能满足(a)了.

**3.18 例**

(a) 设  $\{s_n\}$  是包含一切有理数的序列. 那么, 每个实数是部分极限, 而且

$$\limsup_{n \to \infty} s_n = +\infty, \liminf_{n \to \infty} s_n = -\infty.$$

(b) 设  $s_n = (-1)^n / [1 + (1/n)]$ , 则

$$\limsup_{n \to \infty} s_n = 1 \quad \liminf_{n \to \infty} s_n = -1.$$

(c) 对于实数序列  $\{s_n\}$ ,  $\lim s_n = s$ , 当且仅当

$$\limsup_{n \to \infty} s_n = \liminf_{n \to \infty} s_n = s.$$

我们用一个有用的定理来结束这一节, 它的证明十分容易.

**3.19 定理** 如果  $N$  是固定的正整数, 当  $n \ge N$  时  $s_n \le t_n$ , 那么

$$\liminf_{n \to \infty} s_n \le \liminf_{n \to \infty} t_n,$$

$$\limsup_{n \to \infty} s_n \le \limsup_{n \to \infty} t_n.$$

## 一些特殊序列

现在, 我们来计算一些常见序列的极限. 各个证明都是根据下述事实: 如果  $N$  是某个固定的正整数, 当  $n \ge N$  时,  $0 \le x_n \le s_n$  而且  $s_n \to 0$ , 那么,  $x_n \to 0$ .

**3.20 定理**

(a)  $p > 0$  时  $\lim_{n \to \infty} \frac{1}{n^p} = 0$ .

(b)  $p > 0$  时  $\lim_{n \to \infty} \sqrt[n]{p} = 1$ .

(c)  $\lim_{n \to \infty} \sqrt[n]{n} = 1$ .

(d)  $p > 0$ , 而  $\alpha$  是实数时

$$\lim_{n \to \infty} \frac{n^\alpha}{(1+p)^n} = 0.$$

(e)  $|x| < 1$  时  $\lim_{n \to \infty} x^n = 0$ .

证

(a) 取  $n > (1/\varepsilon)^{1/p}$ . (注意, 这里用到实数的阿基米德性.)

(b) 如果  $p > 1$ , 令  $x_n = \sqrt[n]{p} - 1$ , 那么  $x_n > 0$ , 再根据二项式定理,

$$1 + nx_n \le (1 + x_n)^n = p.$$

于是

$$0 < x_n \le \frac{p-1}{n}.$$

所以  $x_n \to 0$ . 如果  $p=1$ , (b)是显然的; 如果  $0 < p < 1$ , 取倒数就可以得到结论.

(c) 令  $x_n = \sqrt[n]{n} - 1$ . 那么  $x_n \ge 0$ , 再根据二项式定理,

$$n = (1 + x_n)^n \ge \frac{n(n-1)}{2} x_n^2.$$

从而

$$0 \le x_n \le \sqrt{\frac{2}{n-1}} \quad (n \ge 2).$$

(d) 设  $k$  是一个正整数,  $k > a$ . 当  $n > 2k$  时,

$$(1+p)^n > \binom{n}{k} p^k = \frac{n(n-1)\cdots(n-k+1)}{k!} p^k > \frac{n^k p^k}{2^k k!}$$

从而

$$0 < \frac{n^a}{(1+p)^n} < \frac{2^k k!}{p^k} n^{a-k} \quad (n > 2k)$$

因为  $a-k < 0$ , 由(a)知道  $n^{a-k} \to 0$ .

(e) 在(d)中取  $a=0$ .

## 级数

在这章的后部, 如果没有相反的声明, 所考虑的一切序列和级数都是复数值的. 下面有几条定理可以推广到以  $R^k$  里的元素为项的级数. 习题 15 提到了它们.

**3.21 定义** 设有序列  $\{a_n\}$ , 我们用

$$\sum_{n=p}^{q} a_n \quad (p \le q)$$

表示和  $a_p + a_{p+1} + \cdots + a_q$ . 联系着  $\{a_n\}$ , 作成序列  $\{s_n\}$ , 其中

$$s_n = \sum_{k=1}^{n} a_k.$$

我们也用

$$a_1 + a_2 + a_3 + \cdots$$

作为  $\{s_n\}$  的符号表达式, 或者简单地记作

$$\sum_{n=1}^{\infty} a_n. \quad (4)$$

记号(4)叫做无穷级数, 或只说级数,  $s_n$  叫做这级数的部分和. 如果  $s_n$  收敛

于  $s$ , 我们就说级数收敛, 并且记作

$$\sum_{n=1}^{\infty} a_n = s.$$

$s$  叫做这级数的和; 但是必须清楚地理解,  $s$  是(部分)和的序列的极限, 而不是单用加法得到的.

如果  $s_n$  发散, 就说级数发散.

有时为了符号上的方便, 我们也考虑形式像

$$\sum_{n=0}^{\infty} a_n \quad (5)$$

的级数. 如果不致于引起误解, 或者(4)与(5)的区别无关紧要时, 也常常只写  $\Sigma a_n$  来代替它们.

显然, 关于序列的每一个定理都能按级数的语言来叙述. (令  $a_1 = s_1$ , 当  $n > 1$  时, 令  $a_n = s_n - s_{n-1}$ )反过来也是如此. 虽然如此, 一并考虑这两个概念还是有益处的.

Cauchy 准则(定理 3.11)可以按以下形式重新叙述:

**3.22 定理**  $\Sigma a_n$  收敛, 当且仅当, 对于任意的  $\epsilon > 0$ , 存在着整数  $N$ , 使得  $m \ge n \ge N$  时

$$\left| \sum_{k=n}^{m} a_k \right| \le \epsilon. \quad (6)$$

特别地, 当  $m = n$  时, (6) 变作

$$|a_n| \le \epsilon \quad (n \ge N)$$

换句话说:

**3.23 定理** 如果  $\Sigma a_n$  收敛, 那么  $\lim_{n \to \infty} a_n = 0$ .

但是条件  $a_n \to 0$  不能保证  $\Sigma a_n$  收敛. 例如, 级数

$$\sum_{n=1}^{\infty} \frac{1}{n}$$

发散; 至于证明, 见定理 3.28.

对于单调序列的定理 3.14, 在级数方面也有相应的定理.

**3.24 定理** 各项不是负数<sup>①</sup>的级数收敛, 当且仅当它的部分和构成有界数列.

现在来讲另一种性质的收敛检验法, 即是所谓“比较验敛法”.

**3.25 定理**

(a) 如果  $N_0$  是某个固定的正整数. 当  $n \ge N_0$  时  $|a_n| \le c_n$  而且  $\Sigma c_n$  收敛,

① “不是负数”便一定是指实数.

那么级数  $\Sigma a_n$  也收敛.

(b) 如果当  $n \ge N_0$  时  $a_n \ge d_n \ge 0$  而且  $\Sigma d_n$  发散, 那么  $\Sigma a_n$  也发散.

注意, 检验法(b)只能用于各项  $a_n$  都不是负数的级数.

证 根据 Cauchy 准则, 给定了  $\epsilon > 0$ , 存在着  $N \ge N_0$ , 能使  $m \ge n \ge N$  时成立

$$\sum_{k=n}^{m} c_k \le \epsilon.$$

所以

$$\left| \sum_{k=n}^{m} a_k \right| \le \sum_{k=n}^{m} |a_k| \le \sum_{k=n}^{m} c_k \le \epsilon.$$

随之也就得到(a).

其次, (b)可以由(a)推出来, 因为, 如果  $\Sigma a_n$  收敛, 那么  $\Sigma d_n$  也应当收敛 (注意, (b)也可以由定理 3.24 推出来).

比较验敛法是非常有用的一个方法; 为了有效地应用它, 我们必需熟悉许多已知其收敛或发散的非负项级数.

### 非负项级数

在一切级数之中, 最简单的大约是几何级数了.

**3.26 定理** 如果  $0 \le x < 1$ , 那么

$$\sum_{n=0}^{\infty} x^n = \frac{1}{1-x}.$$

如果  $x \ge 1$ , 这级数就发散.

证 如果  $x \neq 1$ ,

$$s_n = \sum_{k=0}^{n} x^k = \frac{1-x^{n+1}}{1-x}.$$

令  $n \to \infty$ , 就得到定理的结论. 当  $x=1$  时, 得到

$$1+1+1+\dots,$$

它显然是发散的.

应用中出现的许多情况是, 级数的各项单调递减. 于此, 下边的 Cauchy 定理特别有价值. 定理的明显的特点是由  $\{a_n\}$  的一个相当“稀”的子序列, 可以判断  $\Sigma a_n$  的收敛或发散.

**3.27 定理** 假定  $a_1 \ge a_2 \ge a_3 \ge \dots \ge 0$ , 那么, 级数  $\sum_{n=1}^{\infty} a_n$  收敛, 当且仅当

级数

$$\sum_{k=0}^{\infty} 2^k a_{2^k} = a_1 + 2a_2 + 4a_4 + 8a_8 + \cdots \quad (7)$$

收敛.

证 根据定理 3.24, 现在只考虑两者的部分和是否有界就行了. 设

$$\begin{aligned} s_n &= a_1 + a_2 + \cdots + a_n, \\ t_k &= a_1 + 2a_2 + \cdots + 2^k a_{2^k}. \end{aligned}$$

当  $n < 2^k$  时,

$$\begin{aligned} s_n &\le a_1 + (a_2 + a_3) + \cdots + (a_{2^k} + \cdots + a_{2^{k+1}-1}) \\ &\le a_1 + 2a_2 + \cdots + 2^k a_{2^k} = t_k, \end{aligned}$$

因此,

$$s_n \le t_k \quad (8)$$

另一方面, 当  $n > 2^k$  时,

$$\begin{aligned} s_n &\ge a_1 + a_2 + (a_3 + a_4) + \cdots + (a_{2^k-1} + \cdots + a_{2^k}) \\ &\ge \frac{1}{2} a_1 + a_2 + 2a_4 + \cdots + 2^{k-1} a_{2^k} = \frac{1}{2} t_k, \end{aligned}$$

因此,

$$2s_n \ge t_k \quad (9)$$

由(8)和(9)来看, 序列  $\{s_n\}$  和  $\{t_k\}$ , 或者同时有界, 或者同时无界.

证毕.

**3.28 定理** 如果  $p > 1$ ,  $\sum \frac{1}{n^p}$  就收敛, 如果  $p \le 1$ , 它就发散.

证 如果  $p \le 0$ , 发散性可由定理 3.23 得出. 如果  $p > 0$ , 用定理 3.27, 这就要看级数

$$\sum_{k=0}^{\infty} 2^k \frac{1}{2^{kp}} = \sum_{k=0}^{\infty} 2^{k(1-p)}.$$

然而, 当且仅当  $1-p < 0$  时才能够  $2^{1-p} < 1$ , 再与几何级数比较一下, (在定理 3.26 中取  $x = 2^{1-p}$ ) 就把定理推出来了.

我们进一步用定理 3.27 来证明:

**3.29 定理** 如果  $p > 1$

$$\sum_{n=2}^{\infty} \frac{1}{n(\log n)^p} \quad (10)$$

就收敛; 如果  $p \le 1$ , 这级数就发散.

评注 “ $\log n$ ”表示数  $n$  以  $e$  为底的对数(参看第 1 章习题 9); 这个数  $e$  马上就要定义(参看定义 3.30)让级数从  $n=2$  开始, 是因为  $\log 1=0$ .

证 对数函数(第 8 章将要详细地讨论它)的单调性说明  $\{\log n\}$  是递增的, 所以  $\{\frac{1}{n \log n}\}$  是递减的. 从而可以把定理 3.27 用于(10); 这就要看

$$\sum_{k=1}^{\infty} 2^k \cdot \frac{1}{2^k (\log 2^k)^p} = \sum_{k=1}^{\infty} \frac{1}{(k \log 2)^p} = \frac{1}{(\log 2)^p} \sum_{k=1}^{\infty} \frac{1}{k^p}, \quad (11)$$

于是, 定理 3.29 就从定理 3.28 推出来了.

这种(构造极数的)方法, 显然可以继续进行. 例如

$$\sum_{n=3}^{\infty} \frac{1}{n \log n \log \log n} \quad (12)$$

发散, 然而级数

$$\sum_{n=3}^{\infty} \frac{1}{n \log n (\log \log n)^2} \quad (13)$$

收敛.

级数(12)的各项与(13)的各项差得很少. 但是一个发散而另一个却收敛. 从定理 3.28 到定理 3.29, 然后到(12)和(13)这样的过程, 如果继续下去, 我们将得到一对一对的收敛和发散的级数, 它们的对应项之差比(12)和(13)的更要小. 可能有人因此而猜想, 应该有一种终极的境界, 搞到一个“界限”, 它把一切收敛级数和一切发散级数分在两旁——最低限度哪怕是只考虑单调系数的级数也好. “界限”这个观念自然十分模糊. 我们所希望做出的论点是: 不论把这观念搞得怎样确切, 这猜想还是不正确的. 习题 11(b)和 12(b)可以作为例证.

在收敛理论的这一方面, 我们不想再深入下去. 于此指给读者去看 Knopp 著的“Theory and Application of Infinite Series”第 IX 章, 尤其是 § 41.

### 数 $e$

$$3.30 \quad \text{定义} \quad e = \sum_{n=0}^{\infty} \frac{1}{n!}.$$

这里  $n \ge 1$  时,  $n! = 1 \cdot 2 \cdot 3 \cdots n$ ; 而  $0! = 1$ .

因

$$\begin{aligned} s_n &= 1 + 1 + \frac{1}{1 \cdot 2} + \frac{1}{1 \cdot 2 \cdot 3} + \cdots + \frac{1}{1 \cdot 2 \cdots n} \\ &< 1 + 1 + \frac{1}{2} + \frac{1}{2^2} + \cdots + \frac{1}{2^{n-1}} < 3, \end{aligned}$$

所以级数收敛，而定义有意义。实际上，这级数收敛得很快，从而使我们能够把  $e$  计算得十分精密。

$e$  还可以按另一极限过程来定义，它的证明对于极限的运算提供了一个很好的说明。注意到这一点是有益的。

**3.31 定理**  $\lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = e$ .

**证 设**

$$s_n = \sum_{k=0}^{n} \frac{1}{k!}, t_n = \left(1 + \frac{1}{n}\right)^n.$$

根据二项式定理

$$\begin{aligned} t_n &= 1 + 1 + \frac{1}{2!} \left(1 - \frac{1}{n}\right) + \frac{1}{3!} \left(1 - \frac{1}{n}\right) \left(1 - \frac{2}{n}\right) + \dots \\ &\quad + \frac{1}{n!} \left(1 - \frac{1}{n}\right) \left(1 - \frac{2}{n}\right) \dots \left(1 - \frac{n-1}{n}\right). \end{aligned}$$

因此  $t_n \le s_n$ ，根据定理 3.19

$$\limsup_{n \to \infty} t_n \le e \quad (14)$$

其次，如果  $n \ge m$ ，那么

$$t_n \ge 1 + 1 + \frac{1}{2!} \left(1 - \frac{1}{n}\right) + \dots + \frac{1}{m!} \left(1 - \frac{1}{n}\right) \dots \left(1 - \frac{m-1}{n}\right).$$

固定了  $m$  并令  $n \to \infty$ ，我们得到

$$\liminf_{n \to \infty} t_n \ge 1 + 1 + \frac{1}{2!} + \dots + \frac{1}{m!}.$$

因此，

$$s_m \le \liminf_{n \to \infty} t_n.$$

让  $m \to \infty$ ，最终得到

$$e \le \liminf_{n \to \infty} t_n. \quad (15)$$

定理从(14)和(15)就推出来了。

级数  $\sum \frac{1}{n!}$  的收敛速度可以估计如下：设  $s_n$  的意义就像上边那样，于是

$$e - s_n = \frac{1}{(n+1)!} + \frac{1}{(n+2)!} + \frac{1}{(n+3)!} + \dots$$

$$< \frac{1}{(n+1)!} \left\{ 1 + \frac{1}{n+1} + \frac{1}{(n+1)^2} + \cdots \right\} = \frac{1}{n!n}.$$

因此，

$$0 < e - s_n < \frac{1}{n!n}. \quad (16)$$

这样一来，比如以  $s_{10}$  为  $e$  的近似值，误差就小于  $10^{-7}$ ，不等式(16)在理论上也是有价值的，因为它能使我们很容易地证明  $e$  是无理数。

**3.32 定理** 数 $e$ 是无理数

证 假定  $e$  是有理数，那么  $e = p/q$ ，这里  $p, q$  是正整数。由(16)得

$$0 < q!(e - s_q) < \frac{1}{q}. \quad (17)$$

根据假定， $q! e$  是正整数。因为

$$q!s_q = q! \left( 1 + 1 + \frac{1}{2!} + \cdots + \frac{1}{q!} \right)$$

也是正整数，于是知道  $q!(e - s_q)$  是正整数。

因为  $q \ge 1$ ，那么(17)暗示 0 与 1 之间还有正整数。这样我们就陷入了矛盾。

实际上， $e$  甚至不是代数数。关于它的简单证明可以看“参考书目”所列 Niven 的书第 25 页或 Herstein 的书第 176 页。

## 根值验敛法与比率验敛法

3.33 定理(根值验敛法) 设有  $\Sigma a_n$ ，令  $a = \limsup_{n \to \infty} \sqrt[n]{|a_n|}$ 。那么

(a)  $a < 1$  时， $\Sigma a_n$  收敛；

(b)  $a > 1$  时， $\Sigma a_n$  发散；

(c)  $a = 1$  时，无结果。

证 如果  $a < 1$ ，便可以[根据定理 3.17(b)]选一个  $\beta$  和一个正整数  $N$ ，要求  $a < \beta < 1$ ，而且当  $n \ge N$  时

$$\sqrt[n]{|a_n|} < \beta.$$

这就是说  $n \ge N$  时得出

$$|a_n| < \beta^n.$$

因为  $0 < \beta < 1$ ，那么  $\Sigma \beta^n$  收敛。据比较验敛法， $\Sigma a_n$  必收敛。

如果  $a > 1$ ，那么再根据定理 3.17，一定有一个序列  $\{n_k\}$ ，使得

$$\sqrt[n_k]{|a_{n_k}|} \to a.$$

所以对于无穷多个  $n$  的值, 会出现  $|a_n| > 1$ , 因此,  $\sum a_n$  收敛的必要条件(定理 3.23)  $a_n \to 0$  不能成立.

为了证明(c), 我们来看级数

$$\sum \frac{1}{n}, \quad \sum \frac{1}{n^2}.$$

这两个级数的  $\alpha$  都等于 1, 但前者发散而后者收敛.

### 3.34 定理(比率检验法) 关于级数 $\sum a_n$

(a) 如果  $\limsup_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| < 1$ , 它就收敛.

(b) 如果有某个固定的正整数  $n_0$ ,  $n \ge n_0$  时  $\left| \frac{a_{n+1}}{a_n} \right| \ge 1$ , 它就发散.

**证**

如果满足了(a)的要求, 便可以找到  $\beta < 1$  和正整数  $N$ , 使得  $n \ge N$  时,

$$\left| \frac{a_{n+1}}{a_n} \right| < \beta.$$

一个个地写出来就是

$$|a_{N+1}| < \beta |a_N|,$$

$$|a_{N+2}| < \beta |a_{N+1}| < \beta^2 |a_N|,$$

......................................................

$$|a_{N+p}| < \beta^p |a_N|.$$

这意味着当  $n \ge N$  时,

$$|a_n| < |a_N| \beta^{-N} \cdot \beta^n,$$

这样一来, (a) 的结论就可以根据  $\sum \beta^n$  收敛, 由比较验敛法推出来了.

如果当  $n \ge n_0$  时,  $|a_{n+1}| \ge |a_n|$ , 便容易知道, 条件  $a_n \to 0$  不能成立. 由此就推出(b).

注: 知道  $\lim a_{n+1}/a_n = 1$ , 对于  $\sum a_n$  的收敛性, 什么都说明不了;  $\sum 1/n$  及  $\sum 1/n^2$  这两个级数就能说明此点.

**3.35 例**

(a)考虑级数

$$\frac{1}{2} + \frac{1}{3} + \frac{1}{2^2} + \frac{1}{3^2} + \frac{1}{2^3} + \frac{1}{3^3} + \frac{1}{2^4} + \frac{1}{3^4} + \dots,$$

对于它,

$$\liminf_{n \to \infty} \frac{a_{n+1}}{a_n} = \lim_{n \to \infty} \left(\frac{2}{3}\right)^n = 0,$$

$$\liminf_{n \to \infty} \sqrt[n]{a_n} = \lim_{n \to \infty} \sqrt[n]{\frac{1}{3^n}} = \frac{1}{\sqrt{3}}$$

$$\limsup_{n \to \infty} \sqrt[n]{a_n} = \lim_{n \to \infty} \sqrt[n]{\frac{1}{2^n}} = \frac{1}{\sqrt{2}},$$

$$\limsup_{n \to \infty} \frac{a_{n+1}}{a_n} = \lim_{n \to \infty} \left(\frac{3}{2}\right)^n = +\infty.$$

根值敛敛法说明它是收敛的；比率敛敛法无效。

(b)对于级数

$$\frac{1}{2} + 1 + \frac{1}{8} + \frac{1}{4} + \frac{1}{32} + \frac{1}{16} + \frac{1}{128} + \frac{1}{64} + \dots$$

也是这样. 在这里,

$$\liminf_{n \to \infty} \frac{a_{n+1}}{a_n} = \frac{1}{8},$$

$$\limsup_{n \to \infty} \frac{a_{n+1}}{a_n} = 2,$$

但是

$$\lim \sqrt[n]{a_n} = \frac{1}{2}.$$

**3.36 评注** 比率敛敛法时常比根值敛敛法容易使用, 这因为计算比值较之计算  $n$  次根容易. 然而根值敛敛法发挥作用的范围较广. 更确切地说, 凡比率敛敛法判定为收敛的, 根值敛敛法一定也能判定为收敛. 凡当根值敛敛法无能为力时, 比率敛敛法一定也无能为力. 这是定理 3.37 的直接结果. 并且上边的例题就是实据.

在检验发散方面, 这两个检验法都没有判别力. 总是从  $n \to \infty$  时  $a_n$  不趋于零来推导发散性.

**3.37 定理** 对于任意的正数序列  $\{c_n\}$ , 有

$$\liminf_{n \to \infty} \frac{c_{n+1}}{c_n} \le \liminf_{n \to \infty} \sqrt[n]{c_n},$$

$$\limsup_{n \to \infty} \sqrt[n]{c_n} \le \limsup_{n \to \infty} \frac{c_{n+1}}{c_n}.$$

证 我们来证明第二个不等式, 第一个的证明十分相似. 令

$$\alpha = \limsup_{n \to \infty} \frac{c_{n+1}}{c_n}.$$

如果  $\alpha = +\infty$ , 便无须证明. 如果  $\alpha$  有限, 取  $\beta > \alpha$ . 必有正整数  $N$ , 使得  $n \ge N$  时

$$\frac{c_{n+1}}{c_n} \le \beta.$$

个别地说, 对于任何  $p > 0$ ,

$$c_{N+k+1} \le \beta c_{N+k} \quad (k = 0, 1, \dots, p-1).$$

把这些不等式连乘起来, 就得到

$$c_{N+p} \le \beta^p c_N,$$

或者

$$c_n \le c_N \beta^{-N} \cdot \beta^n \quad (n \ge N).$$

于是

$$\sqrt[n]{c_n} \le \sqrt[n]{c_N \beta^{-N}} \cdot \beta,$$

由此根据定理 3.20(b), 得到

$$\limsup_{n \to \infty} \sqrt[n]{c_n} \le \beta. \quad (18)$$

又因为(18)对于任何  $\beta > \alpha$  都成立, 于是我们得到

$$\limsup_{n \to \infty} \sqrt[n]{c_n} \le \alpha.$$

## 幂级数

**3.38 定义** 设有复数序列  $\{c_n\}$ , 级数

$$\sum_{n=0}^{\infty} c_n z^n \quad (19)$$

叫做幂级数.  $c_n$  叫做这级数的系数;  $z$  是复数.

一般地说, 这个级数收敛或发散在于数  $z$  的选取. 准确地说, 联系着每个幂级数有一个圆, 叫做收敛圆, 如果  $z$  在这圆以内, (19)就收敛, 如果  $z$  在这圆外, (19)就发散. (为了能概括所有的情形, 就必须把平面看作半径为无限大的圆的内部, 而把一点看作是半径为零的圆) 级数在收敛圆上的性质, 变化多端, 不能这样简单地叙述.

**3.39 定理** 设有幂级数  $\sum c_n z^n$ , 令

$$\alpha = \limsup_{n \to \infty} \sqrt[n]{|c_n|}, R = \frac{1}{\alpha}.$$

(如果  $\alpha=0$ , 便要  $R=+\infty$ ; 如果  $\alpha=+\infty$ , 便要  $R=0$ ).  
那么  $\sum c_n z^n$  在  $|z| < R$  时收敛;  $|z| > R$  时发散.

证 令  $a_n = c_n z^n$  并施以根值敛散法:

$$\limsup_{n \to \infty} \sqrt[n]{|a_n|} = |z| \limsup_{n \to \infty} \sqrt[n]{|c_n|} = \frac{|z|}{R}.$$

附注  $R$  叫做  $\sum c_n z^n$  的收敛半径.

**3.40 例**

(a) 级数  $\sum n^n z^n$  的  $R=0$ .

(b) 级数  $\sum \frac{z^n}{n!}$  的  $R=+\infty$  (对于这一例, 用比率敛散法比用根值敛散法容易些.)

(c) 级数  $\sum z^n$  的  $R=1$ . 如果  $|z|=1$ , 级数就发散; 因为  $n \to \infty$  时  $z^n$  不趋于零.

(d)  $\sum \frac{z^n}{n}$  的  $R=1$ .  $z=1$  时级数发散, 而在收敛圆  $|z|=1$  的其他点上都收敛. 最后这句话将在定理 3.44 中证明.

(e)  $\sum \frac{z^n}{n^2}$  的  $R=1$ . 根据比较敛散法, 这级数在收敛圆  $|z|=1$  的一切点上收敛. 这因为,  $|z|=1$  时,  $\left| \frac{z^n}{n^2} \right| = \frac{1}{n^2}$ .

## 分部求和法

**3.41 定理** 设有两个序列  $\{a_n\}$ ,  $\{b_n\}$ , 当  $n \ge 0$  时, 令

$$A_n = \sum_{k=0}^{n} a_k,$$

而令  $A_{-1}=0$ . 那么, 在  $0 \le p \le q$  时, 有

$$\sum_{n=p}^{q} a_n b_n = \sum_{n=p}^{q-1} A_n (b_n - b_{n+1}) + A_q b_q - A_{p-1} b_p. \quad (20)$$

证

$$\begin{aligned} \sum_{n=p}^{q} a_n b_n &= \sum_{n=p}^{q} (A_n - A_{n-1}) b_n \\ &= \sum_{n=p}^{q} A_n b_n - \sum_{n=p-1}^{q-1} A_n b_{n+1}, \end{aligned}$$

显然, 右边最后一个表达式等于(20)的右端.

公式(20), 即所谓“分部求和公式”, 在研究形如  $\Sigma a_n b_n$  的级数时是有用的; 当  $\{b_n\}$  单调时, 尤其有用. 现在就来用用它.

**3.42 定理** 假设

- (a)  $\Sigma a_n$  的部分和  $A_n$  构成有界序列;
- (b)  $b_0 \ge b_1 \ge b_2 \ge \dots$ ;
- (c)  $\lim_{n \to \infty} b_n = 0$ .

那么,  $\Sigma a_n b_n$  收敛.

证 选取  $M$ , 使得一切  $A_n$  满足  $|A_n| \le M$ , 取定了  $\epsilon > 0$ , 一定有正整数  $N$ , 使  $b_N \le (\epsilon/2M)$ . 当  $N \le p \le q$  时有

$$\begin{aligned} \left| \sum_{n=p}^{q} a_n b_n \right| &= \left| \sum_{n=p}^{q-1} A_n (b_n - b_{n+1}) + A_q b_q - A_{p-1} b_p \right| \\ &\le M \left| \sum_{n=p}^{q-1} (b_n - b_{n+1}) + b_q - b_p \right| \\ &= 2M b_p \le 2M b_N \le \epsilon. \end{aligned}$$

现在从 Cauchy 准则便推得出敛性了. 我们注意, 在上面写的那一串式子里, 第一次不等自然是靠  $b_n - b_{n+1} \ge 0$  得来的.

**3.43 定理** 假定

- (a)  $|c_1| \ge |c_2| \ge |c_3| \ge \dots$ ;
- (b)  $c_{2m-1} \ge 0$ ,  $c_{2m} \le 0$  ( $m=1, 2, 3, \dots$ );
- (c)  $\lim_{n \to \infty} c_n = 0$ .

那么,  $\Sigma c_n$  收敛.

满足条件(b)的级数叫做“交错级数”. 此定理是 Leibnitz 发现的.

证 令  $a_n = (-1)^{n+1}$ ,  $b_n = |c_n|$ , 尔后使用定理 3.42.

**3.44 定理** 假定  $\Sigma c_n z^n$  的收敛半径是 1, 再假定  $c_0 \ge c_1 \ge c_2 \ge \dots$ ,  $\lim_{n \to \infty} c_n = 0$ ,

那么,  $\Sigma c_n z^n$  在圆  $|z| = 1$  的每个点上收敛, 只有在  $z=1$  这一点可能是例外.

证 令  $a_n = z^n$ ,  $b_n = c_n$ . 如果  $|z| = 1$  而  $z \ne 1$ , 便有

$$\left| A_n \right| = \left| \sum_{m=0}^{n} z^m \right| = \left| \frac{1 - z^{n+1}}{1 - z} \right| \le \frac{2}{|1 - z|}.$$

于是, 定理 3.42 的假设被满足了.

### 绝对收敛

如果级数  $\Sigma |a_n|$  收敛, 就说级数  $\Sigma a_n$  绝对收敛.

**3.45 定理** 如果  $\Sigma a_n$  绝对收敛, 那么  $\Sigma a_n$  就收敛.

证 定理的断语是不等式

$$\left| \sum_{k=n}^{m} a_k \right| \le \sum_{k=n}^{m} |a_k|$$

和 Cauchy 准则的直接结果.

**3.46 评注** 就正项级数而论, 绝对收敛与收敛是一回事.

如果  $\Sigma a_n$  收敛而  $\Sigma |a_n|$  发散, 便说  $\Sigma a_n$  非绝对收敛. 例如, 级数

$$\sum \frac{(-1)^n}{n}$$

非绝对收敛(定理 3.43).

比较验敛法, 和根值与比率验敛法一样, 实际上是绝对收敛的检验法. 因此, 它丝毫不能识别非绝对收敛的级数. 分部求和法有时却可以用来处理后者. 特别的, 幂级数在收敛圆内是绝对收敛的.

我们将会看到, 对于绝对收敛级数完全可以像有限项之和那样来进行运算. 它们可以逐项相乘, 也可以改变加项的次序而不影响级数的和. 然而, 对于非绝对收敛的级数, 这些就不正确了. 因此, 对它们进行运算时, 要多加注意.

## 级数的加法和乘法

**3.47 定理** 如果  $\Sigma a_n = A$  而  $\Sigma b_n = B$ , 那么  $\Sigma(a_n + b_n) = A + B$ , 而且, 对于任意的常数  $c$ ,  $\Sigma ca_n = cA$ .

证 设

$$A_n = \sum_{k=0}^{n} a_k, \quad B_n = \sum_{k=0}^{n} b_k$$

那么

$$A_n + B_n = \sum_{k=0}^{n} (a_k + b_k).$$

既然  $\lim_{n \to \infty} A_n = A$ ,  $\lim_{n \to \infty} B_n = B$ , 所以知道

$$\lim_{n \to \infty} (A_n + B_n) = A + B.$$

第二个断语的证明还要简单些.

于是, 两个级数可以逐项相加, 而且所得的级数收敛于这两个级数的和之和. 在考究两个级数的积时, 情况就复杂了. 首先我们应当给积下定义. 这可以用几种不同的方法去做; 我们将要讨论所谓“Cauchy 乘积”.

**3.48 定义** 设有  $\Sigma a_n$  及  $\Sigma b_n$ . 令

$$c_n = \sum_{k=0}^{n} a_k b_{n-k} \quad (n = 0, 1, 2, \dots)$$

那么就称级数  $\Sigma c_n$  为所给两个级数的积.

还可以把下面这事作为这个定义的来由. 如果取两个幂级数  $\Sigma a_n z^n$  及  $\Sigma b_n z^n$ , 照多项式乘法那样把它们逐项相乘, 合并  $z$  的同次幂各项就得到

$$\begin{aligned}\sum_{n=0}^{\infty} a_n z^n \cdot \sum_{n=0}^{\infty} b_n z^n &= (a_0 + a_1 z + a_2 z^2 + \dots)(b_0 + b_1 z + b_2 z^2 + \dots) \\ &= a_0 b_0 + (a_0 b_1 + a_1 b_0) z \\ &\quad + (a_0 b_2 + a_1 b_1 + a_2 b_0) z^2 + \dots \\ &= c_0 + c_1 z + c_2 z^2 + \dots\end{aligned}$$

令  $z=1$ , 这等式就归结为上边的定义了.

**3.49 例** 如果

$$A_n = \sum_{k=0}^{n} a_k, \quad B_n = \sum_{k=0}^{n} b_k, \quad C_n = \sum_{k=0}^{n} c_k,$$

而且  $A_n \to A$ ,  $B_n \to B$ ; 这时候因为没有  $C_n = A_n B_n$  的关系,  $\{C_n\}$  是否收敛于  $AB$ , 完全是不清楚的.  $\{C_n\}$  对  $\{A_n\}$  和  $\{B_n\}$  的依赖关系非常复杂(参看定理 3.50 的证明). 现在我们来证明, 两个收敛级数的乘积, 确实可以是发散的.

级数

$$\sum_{n=0}^{\infty} \frac{(-1)^n}{\sqrt{n+1}} = 1 - \frac{1}{\sqrt{2}} + \frac{1}{\sqrt{3}} - \frac{1}{\sqrt{4}} + \dots$$

收敛(定理 3.43), 把这个级数自乘, 得到

$$\begin{aligned}\sum_{n=0}^{\infty} c_n &= 1 - \left( \frac{1}{\sqrt{2}} + \frac{1}{\sqrt{2}} \right) + \left( \frac{1}{\sqrt{3}} + \frac{1}{\sqrt{2}\sqrt{2}} + \frac{1}{\sqrt{3}} \right) \\ &\quad - \left( \frac{1}{\sqrt{4}} + \frac{1}{\sqrt{3}\sqrt{2}} + \frac{1}{\sqrt{2}\sqrt{3}} + \frac{1}{\sqrt{4}} \right) + \dots,\end{aligned}$$

因此

$$c_n = (-1)^n \sum_{k=0}^{n} \frac{1}{\sqrt{(n-k+1)(k+1)}}$$

因为

$$(n-k+1)(k+1) = \left( \frac{n}{2} + 1 \right)^2 - \left( \frac{n}{2} - k \right)^2 \le \left( \frac{n}{2} + 1 \right)^2$$

那么

$$|c_n| \ge \sum_{k=0}^{n} \frac{2}{n+2} = \frac{2(n+1)}{n+2}$$

所以  $\Sigma c_n$  收敛的必要条件  $c_n \to 0$  不能满足.

鉴于下面的 Mertens 定理, 我们注意到这里讨论的是两个非绝对收敛级数的乘积.

**3.50 定理** 假定

$$(a) \sum_{n=0}^{\infty} a_n \text{ 绝对收敛,}$$

$$(b) \sum_{n=0}^{\infty} a_n = A,$$

$$(c) \sum_{n=0}^{\infty} b_n = B,$$

$$(d) c_n = \sum_{k=0}^{n} a_k b_{n-k} \quad (n = 0, 1, 2, \dots).$$

那么

$$\sum_{n=0}^{\infty} c_n = AB.$$

这就是说, 两个收敛级数, 如果至少有一个绝对收敛, 它们的乘积就收敛, 而且收敛于正确的数值(原来两个和的乘积)

证 令

$$A_n = \sum_{k=0}^{n} a_k, \quad B_n = \sum_{k=0}^{n} b_k, \quad C_n = \sum_{k=0}^{n} c_k, \quad \beta_n = B_n - B.$$

那么

$$\begin{aligned} C_n &= a_0 b_0 + (a_0 b_1 + a_1 b_0) + \dots + (a_0 b_n + a_1 b_{n-1} + \dots + a_n b_0) \\ &= a_0 B_n + a_1 B_{n-1} + \dots + a_n B_0 \\ &= a_0 (B + \beta_n) + a_1 (B + \beta_{n-1}) + \dots + a_n (B + \beta_0) \\ &= A_n B + a_0 \beta_n + a_1 \beta_{n-1} + \dots + a_n \beta_0 \end{aligned}$$

令

$$\gamma_n = a_0 \beta_n + a_1 \beta_{n-1} + \dots + a_n \beta_0$$

我们想要证明的是  $C_n \to AB$ . 因为  $A_n B \to AB$ , 所以只要证明

$$\lim_{n \to \infty} \gamma_n = 0 \tag{21}$$

就够了. 令

$$\alpha = \sum_{n=0}^{\infty} |a_n|$$

[正是在这里用着了(a)]. 假设  $\epsilon > 0$  已经给定了. 由(c),  $\beta_n \to 0$ . 于是可以选一个  $N$ , 使得  $n \ge N$  时,  $|\beta_n| \le \epsilon$ , 在这时候,

$$|\gamma_n| \le |\beta_0 a_n + \cdots + \beta_N a_{n-N}| + |\beta_{N+1} a_{n-N-1} + \cdots + \beta_n a_0| \\ \le |\beta_0 a_n + \cdots + \beta_N a_{n-N}| + \epsilon a$$

让  $N$  固定，而让  $n \to \infty$ ；由于  $k \to \infty$  时， $a_k \to 0$ ，这就得到

$$\limsup_{n \to \infty} |\gamma_n| \le \epsilon a,$$

因为  $\epsilon$  是任意的，所以(21)是必然的.

可能提出的另一个问题是：当级数  $\Sigma c_n$  收敛时，它的和一定等于  $AB$  吗？阿贝尔证明这个问题的答案是肯定的.

**3.51 定理** 如果级数  $\Sigma a_n$ ,  $\Sigma b_n$ ,  $\Sigma c_n$  分别收敛于  $A$ ,  $B$ ,  $C$ , 并且  $c_n = a_0 b_n + \cdots + a_n b_0$ , 那么,  $C = AB$ .

这里没有做关于绝对收敛的假定，在定理 8.2 之后，有一个(借助于幂级数连续性的)简单证明.

## 级数的重排

**3.52 定义** 设  $\{k_n\}$ ,  $n=1, 2, 3, \dots$ , 是由正整数作成的序列，在它里边每个正整数要出现一次，而且只出现一次(按定义 2.4 的记号来说， $\{k_n\}$  就是从  $J$  到  $J$  上的一个 1-1 函数). 令

$$a'_n = a_{k_n} \quad (n = 1, 2, 3, \dots)$$

我们就说  $\Sigma a'_n$  是  $\Sigma a_n$  的重排.

如果  $\{s_n\}$ ,  $\{s'_n\}$  是  $\Sigma a_n$ ,  $\Sigma a'_n$  的部分和的序列. 容易知道，这两个序列一般是由完全不同的数组成的. 这样，就要发生一个问题：在怎样的条件下，收敛级数的一切重排都收敛，以及它们的和是否必然相同.

**3.53 例** 试看收敛级数

$$1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \frac{1}{5} - \frac{1}{6} + \cdots \quad (22)$$

和它的一个重排

$$1 + \frac{1}{3} - \frac{1}{2} + \frac{1}{5} + \frac{1}{7} - \frac{1}{4} + \frac{1}{9} + \frac{1}{11} - \frac{1}{6} + \cdots, \quad (23)$$

其中在两个正项之后，总跟着一个负项. 如果  $s$  是(22)的和，那么

$$s < 1 - \frac{1}{2} + \frac{1}{3} = \frac{5}{6}.$$

设  $s'_n$  是  $s$  的第  $n$  个部分和. 因为，当  $k \ge 1$  时，

$$\frac{1}{4k-3} + \frac{1}{4k-1} - \frac{1}{2k} > 0,$$

于是知道  $s'_3 < s'_6 < s'_9 < \dots$ . 由此,

$$\limsup_{n \to \infty} s'_n > s'_3 = \frac{5}{6}$$

所以(23)一定不能收敛于  $s$ , [然而(23)确实收敛, 这一点留给读者去证明].

用这例题可以说明下列属于 Riemann 的定理.

**3.54 定理** 设实级数  $\Sigma a_n$  收敛而不绝对收敛. 假定

$$-\infty \le \alpha \le \beta \le \infty.$$

那么一定存在着重排  $\Sigma a'_n$ , 它的部分和  $s'_n$  满足

$$\liminf_{n \to \infty} s'_n = \alpha, \quad \limsup_{n \to \infty} s'_n = \beta. \quad (24)$$

证 令

$$p_n = \frac{|a_n| + a_n}{2}, \quad q_n = \frac{|a_n| - a_n}{2} \quad (n = 1, 2, 3, \dots).$$

于是  $p_n - q_n = a_n$ ,  $p_n + q_n = |a_n|$ ,  $p_n \ge 0$ ,  $q_n \ge 0$ . 级数  $\Sigma p_n$ ,  $\Sigma q_n$  一定都发散.

因为, 假如这两个级数都收敛, 那么

$$\Sigma(p_n + q_n) = \Sigma |a_n|$$

也就收敛, 这与题设矛盾. 因为

$$\sum_{n=1}^{N} a_n = \sum_{n=1}^{N} (p_n - q_n) = \sum_{n=1}^{N} p_n - \sum_{n=1}^{N} q_n,$$

所以, 如果  $\Sigma p_n$  发散而  $\Sigma q_n$  收敛(或者反过来),  $\Sigma a_n$  必发散. 这又与题设矛盾. 所以  $\Sigma p_n$  及  $\Sigma q_n$  都发散.

现在把  $\Sigma a_n$  里的非负项, 按它们出现的顺序记作  $P_1, P_2, P_3, \dots$ , 把  $\Sigma a_n$  的负项的绝对值也按原来的顺序记作  $Q_1, Q_2, Q_3, \dots$ .

级数  $\Sigma P_n$ ,  $\Sigma Q_n$  与  $\Sigma p_n$ ,  $\Sigma q_n$  的区别仅仅是一些等于零的项, 因此, 它们都发散.

现在, 选两个序列  $\{m_n\}$ ,  $\{k_n\}$ , 使级数

$$\begin{aligned} P_1 + \dots + P_{m_1} - Q_1 - \dots - Q_{k_1} + P_{m_1+1} + \dots \\ + P_{m_2} - Q_{k_1+1} - \dots - Q_{k_2} + \dots \end{aligned} \quad (25)$$

满足(24). 显然, 这是  $\Sigma a_n$  的重排.

取实数序列  $\{a_n\}$ ,  $\{\beta_n\}$ , 使  $a_n \to \alpha$ ,  $\beta_n \to \beta$ ,  $a_n < \beta_n$ ,  $\beta_1 > 0$ .

设  $m_1, k_1$  是使

$$\begin{aligned} P_1 + \dots + P_{m_1} > \beta_1, \\ P_1 + \dots + P_{m_1} - Q_1 - \dots - Q_{k_1} < a_1 \end{aligned}$$

的最小正整数； $m_2, k_2$  是使

$$P_1 + \cdots + P_{m_1} - Q_1 - \cdots - Q_{k_1} + P_{m_1+1} + \cdots + P_{m_2} > \beta_2,$$

$$P_1 + \cdots + P_{m_1} - Q_1 - \cdots - Q_{k_1} + P_{m_1+1} + \cdots + P_{m_2} \\ - Q_{k_2+1} - \cdots - Q_{k_2} < \alpha_2$$

的最小正整数；照这样接连地取下去. 因为  $\Sigma P_n$  和  $\Sigma Q_n$  发散，所以这是办得到的.

如果  $x_n$  与  $y_n$  表示(25)里末项为  $P_{m_n}$  与  $-Q_{k_n}$  的部分和，那么

$$|x_n - \beta_n| \le P_{m_n}, \quad |y_n - \alpha_n| \le Q_{k_n}.$$

因为  $n \to \infty$  时， $P_n \to 0$ ,  $Q_n \to 0$ ，所以  $x_n \to \beta$ ,  $y_n \to \alpha$ .

最后，很明显，任何小于  $\alpha$  或大于  $\beta$  的数，都不能是(25)的部分和所作成序列的(部分)极限.

**3.55 定理** 设  $\Sigma a_n$  是绝对收敛的复数项级数，那么  $\Sigma a_n$  的每个重排收敛，而且它们都收敛于同一个和.

证 设  $\Sigma a'_n$  是一个重排，它的部分和为  $s'_n$ . 给定  $\epsilon > 0$ ，就有正整数  $N$  使得  $m \ge n \ge N$  时有

$$\sum_{i=n}^{m} |a_i| \le \epsilon. \quad (26)$$

现在选  $p$  使正整数  $1, 2, \dots, N$  包含在集  $k_1, k_2, \dots, k_p$  中(这里用的是定义 3.52 中的记号). 那么，当  $n > p$  时，这些数  $a_1, a_2, \dots, a_N$  在差数  $s_n - s'_n$  中都被消掉，因此，由(26)， $|s_n - s'_n| \le \epsilon$ . 所以  $\{s'_n\}$  与  $\{s_n\}$  收敛到同样的和数.

### 习题

1. 证明：序列  $\{s_n\}$  的收敛性包含着  $\{|s_n|\}$  的收敛性. 逆命题对吗？
2. 计算  $\lim_{n \to \infty} (\sqrt{n^2 + n} - n)$ .
3. 设  $s_1 = \sqrt{2}$ , 且

$$s_{n+1} = \sqrt{2 + \sqrt{s_n}} \quad (n = 1, 2, 3, \dots),$$

证明  $\{s_n\}$  收敛，而且当  $n=1, 2, 3, \dots$  时， $s_n < 2$ .

4. 求下边定义的序列  $\{s_n\}$  的上、下极限：

$$s_1 = 0; \quad s_{2m} = \frac{s_{2m-1}}{2}; \quad s_{2m+1} = \frac{1}{2} + s_{2m}.$$

5. 对任意两个实数列  $\{a_n\}$ ,  $\{b_n\}$ , 有

$$\limsup_{n \to \infty} (a_n + b_n) \le \limsup_{n \to \infty} a_n + \limsup_{n \to \infty} b_n;$$

这里假定右端的和不是 $\infty - \infty$ 的形状.

6. 研究 $\Sigma a_n$ 的性质(收敛或发散), 如果

$$(a) a_n = \sqrt{n+1} - \sqrt{n};$$

$$(b) a_n = \frac{\sqrt{n+1} - \sqrt{n}}{n};$$

$$(c) a_n = (\sqrt[n]{n} - 1)^n;$$

$$(d) a_n = \frac{1}{1+z^n}, z \text{ 取复数值.}$$

7. 证明, 如果 $a_n \ge 0$ , 那么 $\Sigma a_n$ 收敛包含着

$$\Sigma \frac{\sqrt{a_n}}{n}$$

收敛.

8. 如果 $\Sigma a_n$ 收敛, 而 $\{b_n\}$ 单调有界. 证明 $\Sigma a_n b_n$ 也收敛.

9. 求下列每个幂级数的收敛半径:

$$(a) \Sigma n^3 z^n, \quad (b) \Sigma \frac{2^n}{n!} z^n,$$

$$(c) \Sigma \frac{2^n}{n^2} z^n, \quad (d) \Sigma \frac{n^3}{3^n} z^n.$$

10. 假定幂级数 $\Sigma a_n z^n$ 的系数都是整数, 其中有无限多个不是零. 证明收敛半径最大是1.

11. 假定 $a_n > 0$ ,  $s_n = a_1 + \dots + a_n$ 而 $\Sigma a_n$ 发散.

$$(a) \text{证明 } \Sigma \frac{a_n}{1+a_n} \text{ 发散.}$$

(b) 证明

$$\frac{a_{N+1}}{s_{N+1}} + \dots + \frac{a_{N+k}}{s_{N+k}} \ge 1 - \frac{s_N}{s_{N+k}},$$

再证明

$$\Sigma \frac{a_n}{s_n}$$

发散.

(c) 证明

$$\frac{a_n}{s_n^2} \le \frac{1}{s_{n-1}} - \frac{1}{s_n},$$

再证明  $\sum \frac{a_n}{s_n^2}$  收敛.

(d)  $\sum \frac{a_n}{1+na_n}$ ,  $\sum \frac{a_n}{1+n^2 a_n}$  怎样呢?

12. 设  $a_n > 0$  且  $\sum a_n$  收敛. 令

$$r_n = \sum_{m=n}^{\infty} a_m.$$

(a) 证明  $m < n$  时  $\frac{a_m}{r_m} + \dots + \frac{a_n}{r_n} > 1 - \frac{r_n}{r_m}$ , 再证明  $\sum \frac{a_n}{r_n}$  发散.

(b) 证明  $\frac{a_n}{\sqrt{r_n}} < 2(\sqrt{r_n} - \sqrt{r_{n+1}})$ , 再证明  $\sum \frac{a_n}{\sqrt{r_n}}$  收敛.

13. 证明两个绝对收敛级数的 Cauchy 乘积也绝对收敛.

14. 设  $\{s_n\}$  为复数序列, 定义它的算术平均数  $\sigma_n$  为

$$\sigma_n = \frac{s_0 + s_1 + \dots + s_n}{n+1}, \quad (n = 0, 1, 2, \dots).$$

(a) 如果  $\lim s_n = s$ , 证明  $\lim \sigma_n = s$ .

(b) 作这样一个序列  $\{s_n\}$ , 使  $\lim_{n \to \infty} \sigma_n = 0$  但  $\{s_n\}$  不收敛.

(c) 是否能出现这样的事: 对一切  $n$ ,  $s_n > 0$ , 虽然  $\lim \sigma_n = 0$ , 但是  $\lim \sup s_n = \infty$ ?

(d) 对于  $n \ge 1$ , 令  $a_n = s_n - s_{n-1}$ . 证明

$$s_n - \sigma_n = \frac{1}{n+1} \sum_{k=1}^{n} k a_k$$

假定  $\lim(na_n) = 0$  并且  $\{\sigma_n\}$  收敛. 证明  $\{s_n\}$  收敛. [这是 (a) 的一个逆命题, 但是添了一条假设:  $na_n \to 0$ ].

(e) 在较弱的假定下, 推导上一个结论: 假设  $M < \infty$ , 对于一切  $n$ ,  $|na_n| \le M$  而且  $\lim \sigma_n = \sigma$ . 按下列步骤证明  $\lim s_n = \sigma$ :

如果  $m < n$ , 那么

$$s_n - \sigma_n = \frac{m+1}{n-m}(\sigma_n - \sigma_m) + \frac{1}{n-m} \sum_{i=m+1}^{n} (s_n - s_i).$$

对于这些  $i$ ,

$$|s_n - s_i| \le \frac{(n-i)M}{i+1} \le \frac{(n-m-1)M}{m+2}.$$

使  $\epsilon > 0$  固定, 给每个  $n$  配置一个正整数  $m$ , 满足

$$m \le \frac{n-\epsilon}{1+\epsilon} < m+1.$$

于是  $(m+1)/(n-m) \le 1/\epsilon$ , 而  $|s_n - s_i| < M\epsilon$ . 所以

$$\limsup_{n \to \infty} |s_n - \sigma| \le M\epsilon.$$

因为  $\epsilon$  是任意的,  $\lim s_n = \sigma$ .

15. 定义 3.21 可以推广到  $a_n$  在某个固定的  $R^k$  之中的情形. 绝对收敛定义为  $\sum |a_n|$  收敛. 证明诸定理 3.22, 3.23, 3.25(a), 3.33, 3.34, 3.42, 3.45, 3.47 和 3.55. 在这种更一般的情况下都真确. (在任一个证明里, 只需稍作修改).

16. 固定正数  $a$ , 选  $x_1 > \sqrt{a}$  且用递推公式

$$x_{n+1} = \frac{1}{2} \left( x_n + \frac{a}{x_n} \right)$$

来定义  $x_2, x_3, x_4, \dots$

(a) 证明  $\{x_n\}$  单调下降且  $\lim x_n = \sqrt{a}$ .

(b) 令  $\epsilon_n = x_n - \sqrt{a}$ , 证明

$$\epsilon_{n+1} = \frac{\epsilon_n^2}{2x_n} < \frac{\epsilon_n^2}{2\sqrt{a}},$$

于是令  $\beta = 2\sqrt{a}$ , 就得到

$$\epsilon_{n+1} < \beta \left( \frac{\epsilon_1}{\beta} \right)^{2^n} \quad (n = 1, 2, 3, \dots).$$

(c) 这是计算平方根的一个好算法, 因为递推公式简单且收敛的极快. 例如, 如果  $a=3$  而  $x_1=2$ , 证明  $\epsilon_1/\beta < \frac{1}{10}$ , 所以

$$\epsilon_5 < 4 \cdot 10^{-16}, \quad \epsilon_6 < 4 \cdot 10^{-32}.$$

17. 固定  $a > 1$ . 取  $x_1 > \sqrt{a}$  且定义

$$x_{n+1} = \frac{a + x_n}{1 + x_n} = x_n + \frac{a - x_n^2}{1 + x_n}$$

(a) 证明  $x_1 > x_3 > x_5 > \dots$ .

(b) 证明  $x_2 < x_4 < x_6 < \dots$ .

(c) 证明  $\lim x_n = \sqrt{a}$ .

(d) 将这种方法的收敛速度与习题 16 中所述方法的收敛速度相比较.

18. 把习题 16 中的递推公式换成

$$x_{n+1} = \frac{p-1}{p} x_n + \frac{a}{p} x_n^{-p+1}$$

(这里  $p$  是固定的正整数), 并且描述所得序列  $\{x_n\}$  的性质.

19. 对于每个序列  $a = \{a_n\}$ , 其中  $a_n$  是 0 或 2, 作一个实数

$$x(a) = \sum_{n=1}^{\infty} \frac{a_n}{3^n}$$

证明, 由所有  $x(a)$  组成的集, 恰好就是在 2.44 节中所描述的 Cantor 集.

20. 设  $\{p_n\}$  是距离空间  $X$  中的 Cauchy 序列, 且有某个子序列  $\{p_{n_k}\}$  收敛于一点  $p \in X$ . 证明整个序列  $\{p_n\}$  收敛于  $p$ .

21. 证明与定理 3.10(b) 的类似定理: 如果序列  $\{E_n\}$  里的  $E_n$  都是完备度量空间  $X$  中的有界闭集,  $E_n \supset E_{n+1}$  并且

$$\lim_{n \to \infty} \text{diam } E_n = 0$$

那么  $\bigcap_{n=1}^{\infty} E_n$  恰由一点组成.

22. 设  $X$  是完备度量空间, 而序列  $\{G_n\}$  里的  $G_n$  都是  $X$  的稠密开子集. 证明 Baire 定理:  $\bigcap_{n=1}^{\infty} G_n$  不空 (事实上它在  $X$  中稠密.)

提示: 找一个由邻域  $E_n$  ( $\bar{E}_n \subset G_n$ ) 组成的收缩序列, 并应用习题 21.

23. 设  $\{p_n\}$  和  $\{q_n\}$  是度量空间  $X$  里的 Cauchy 序列. 证明, 序列  $\{d(p_n, q_n)\}$  收敛.

提示: 对于任意的  $m, n$  有

$$d(p_n, q_n) \le d(p_n, p_m) + d(p_m, q_m) + d(q_m, q_n),$$

因此, 当  $m, n$  很大时

$$|d(p_n, q_n) - d(p_m, q_m)|$$

就很小.

24. 设  $X$  是度量空间

(a) 称  $X$  中的两个 Cauchy 序列  $\{p_n\}, \{q_n\}$  是等价的, 如果

$$\lim_{n \to \infty} d(p_n, q_n) = 0$$

证明这是一个等价关系. (定义 2.3).

(b) 设  $X^*$  是这样得到的一切等价类的集. 如果  $P \in X^*, Q \in X^*, \{p_n\} \in P, \{q_n\} \in Q$ , 定义

$$\Delta(P, Q) = \lim_{n \to \infty} d(p_n, q_n)$$

根据习题 23, 这极限是存在的. 如果把  $\{p_n\}$  和  $\{q_n\}$  各代以等价序列, 试证: 数  $\Delta(P, Q)$  不变, 从而  $\Delta$  是  $X^*$  里的距离函数.

(c) 证明所得的度量空间  $X^*$  是完备的.

(d)对于每个  $p \in X$ , 有一个各项都是  $p$  的 Cauchy 序列; 设  $P_p$  是  $X^*$  中的包含着这个序列的成员. 证明对于一切  $p, q \in X$ , 有

$$\Delta(P_p, P_q) = d(p, q).$$

换句话说, 由等式  $\varphi(p) = P_p$  确定的映射, 是从  $X$  到  $X^*$  内的等距映射(亦即保持距离的映射).

(e)证明,  $\varphi(X)$  在  $X^*$  中稠密, 并且当  $X$  完备时,  $\varphi(X) = X^*$ .

根据(d), 可以把  $X$  与  $\varphi(X)$  等同起来, 而且认为  $X$  被嵌入于完备距离空间  $X^*$  之中了.  $X^*$  叫做  $X$  的完备化(空间).

25. 设  $X$  是度量空间, 它的点都是有理数, 以  $d(x, y) = |x - y|$  为距离. 问这空间的完备化是什么?(与习题 24 比较).
