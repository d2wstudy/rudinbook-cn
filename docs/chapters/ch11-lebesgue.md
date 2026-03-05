# 第 11 章 LEBESGUE 理论

本章目的是讲 Lebesgue 的测度和积分理论的基本概念，在相当广泛的条件下证明某些关键的定理，务使发展的主要线索不致被大量的相对说来无关紧要的细节所掩盖。所以只有若干情形作了简略的证明，而有些容易的命题则述而不证。然而，凡是熟悉前几章中所用的证明技巧的读者，肯定不难把略去的步骤补上。

Lebesgue 积分的理论可以从几种不同途径展开。这里只讨论其中之一，关于另外的方法，我们推荐一些积分论的专著，列在后面的书目中。

## 集函数

如果  $A$  与  $B$  是任意两集，我们把满足  $x \in A, x \notin B$  的一切  $x$  之集记为  $A - B$ 。这个记号并不意味着  $B \subset A$ ，我们用  $\emptyset$  表示空集，如果  $A \cap B = \emptyset$ ，就说  $A$  与  $B$  不相交。

**11.1 定义** 设  $\mathcal{R}$  是由集构成的一个类，并且由  $A \in \mathcal{R}, B \in \mathcal{R}$  能推出

$$A \cup B \in \mathcal{R}, \quad A - B \in \mathcal{R}. \quad (1)$$

就称  $\mathcal{R}$  是环。

由于  $A \cap B = A - (A - B)$ ，所以当  $\mathcal{R}$  的环时，必然有  $A \cap B \in \mathcal{R}$ 。

如果一旦  $A_n \in \mathcal{R}, n=1, 2, 3, \dots$ ，就有

$$\bigcup_{n=1}^{\infty} A_n \in \mathcal{R}, \quad (2)$$

$\mathcal{R}$  便叫做  $\sigma$ -环。

由于  $\bigcap_{n=1}^{\infty} A_n = A_1 - \bigcup_{n=1}^{\infty} (A_1 - A_n)$ ，因而如果  $\mathcal{R}$  是  $\sigma$ -环，必然  $\bigcap_{n=1}^{\infty} A_n \in \mathcal{R}$ 。

**11.2 定义** 如果  $\phi$  能给每个  $A \in \mathcal{R}$  指派扩大实数系内的一个数  $\phi(A)$ ，便说  $\phi$  是定义在  $\mathcal{R}$  上的集函数。如果能从  $A \cap B = \emptyset$  得出

$$\phi(A \cup B) = \phi(A) + \phi(B), \quad (3)$$

$\phi$  便是可加的。如果能从  $A_i \cap A_j = \emptyset (i \neq j)$  得出

$$\phi\left(\bigcup_{n=1}^{\infty} A_n\right) = \sum_{n=1}^{\infty} \phi(A_n). \quad (4)$$

$\phi$  便是可数可加的。

以下一概假定  $\phi$  的值域不能同时包含  $+\infty$  及  $-\infty$ ；因为这会使 (3) 的右端变得无意义。此外，我们还排除只以  $+\infty$  或  $-\infty$  为值的集函数。

有趣的是，(4) 的左端与  $A_n$  的排列次序无关。因此，重排定理表明，(4) 的

右端只要收敛就绝对收敛；如果不收敛，那么它的部分和就趋于 $+\infty$ 或 $-\infty$ .

如果 $\phi$ 是可加的，下列性质容易验证：

$$\phi(0) = 0. \quad (5)$$

如果凡当 $i \neq j$ 时， $A_i \cap A_j = 0$ ，必然

$$\phi(A_1 \cup \dots \cup A_n) = \phi(A_1) + \dots + \phi(A_n). \quad (6)$$

$$\phi(A_1 \cup A_2) + \phi(A_1 \cap A_2) = \phi(A_1) + \phi(A_2). \quad (7)$$

如果对于一切 $A$ ， $\phi(A) \ge 0$ ，并且 $A_1 \subset A_2$ ，那么

$$\phi(A_1) \le \phi(A_2). \quad (8)$$

由于(8)，非负的可加集函数常常称为单调的.

如果 $B \subset A$ 且 $|\phi(B)| < +\infty$ ，那么

$$\phi(A - B) = \phi(A) - \phi(B). \quad (9)$$

**11.3 定理** 假定 $\phi$ 在环 $\mathcal{R}$ 上可数可加，并且 $A_n \in \mathcal{R}$ ，( $n=1, 2, 3, \dots$ )， $A_1 \subset A_2 \subset \dots \subset A_n \subset \dots$ ， $A \in \mathcal{R}$ ，而

$$A = \bigcup_{n=1}^{\infty} A_n.$$

那么，当 $n \to \infty$ 时，

$$\phi(A_n) \to \phi(A).$$

证 置 $B_1 = A_1$ ， $B_n = A_n - A_{n-1}$ ， $n = 2, 3, \dots$ ，那么，当 $i \neq j$ 时， $B_i \cap B_j = 0$ .  $A_n = B_1 \cup \dots \cup B_n$ ，且 $A = \bigcup B_n$ . 所以

$$\phi(A_n) = \sum_{i=1}^{n} \phi(B_i),$$

于是

$$\phi(A) = \sum_{i=1}^{\infty} \phi(B_i).$$

## Lebesgue 测度的建立

**11.4 定义** 令 $R^p$ 表示 $p$ 维欧氏空间.  $R^p$ 中的区间指的是满足

$$a_i \le x_i \le b_i \quad (i = 1, \dots, p) \quad (10)$$

的点 $x = (x_1, \dots, x_p)$ 的集；或是把(10)内任何或全部符号 $\le$ 改为 $<$ 所划定的点集. 对于任何 $i$ 不排除 $a_i = b_i$ 的可能. 尤其是，空集也在区间之列.

若 $A$ 是有限个区间的并，便称 $A$ 为初等集.

如果  $I$  是区间, 不论(10)中的那些不等式包括或不包括等号, 都定义

$$m(I) = \prod_{i=1}^{p} (b_i - a_i).$$

如果  $A = I_1 \cup \dots \cup I_n$ , 并且这些区间两两不相交, 我们便令

$$m(A) = m(I_1) + \dots + m(I_n). \quad (11)$$

我们用  $\mathcal{E}$  表示  $R^p$  的所有初等子集的类.

在这里需要验证下列性质:

$$\mathcal{E} \text{ 是环, 但不是 } \sigma\text{-环.} \quad (12)$$

$$\text{如果 } A \in \mathcal{E}, \text{ 那么 } A \text{ 必是有限个不相交的区间的并.} \quad (13)$$

如果  $A \in \mathcal{E}$ ,  $m(A)$  便由(11)完全确定; 即是  $A$  分解为两种不同的互不相交的区间的并时, 用这两种分解从(11)得出相同的数值  $m(A)$ . (14)

$$m \text{ 在 } \mathcal{E} \text{ 上可加.} \quad (15)$$

当  $p=1, 2, 3$  时,  $m$  分别是长度, 面积和体积.

**11.5 定义** 设  $\phi$  是在  $\mathcal{E}$  上定义的非负可加的集函数. 如果对于每个  $A \in \mathcal{E}$  和  $\epsilon > 0$ , 存在着闭集  $F \in \mathcal{E}$  和开集  $G \in \mathcal{E}$ , 满足  $F \subset A \subset G$ , 并且

$$\phi(G) - \epsilon \le \phi(A) \le \phi(F) + \epsilon, \quad (16)$$

便称  $\phi$  是正规的.

**11.6 例**

(a) 集函数  $m$  是正规的.

如果  $A$  是一个区间, 那么它显然满足定义 11.5 的要求. 一般情形可由(13)导出.

(b) 取  $R^p = R^1$ , 并且令  $\alpha$  是对一切实  $x$  有定义的单调增函数. 置

$$\mu([a, b)) = \alpha(b) - \alpha(a),$$

$$\mu([a, b]) = \alpha(b) - \alpha(a),$$

$$\mu((a, b]) = \alpha(b) - \alpha(a),$$

$$\mu((a, b)) = \alpha(b) - \alpha(a).$$

这里  $[a, b)$  是集  $a \le x < b$ , 等等. 由于  $\alpha$  可能间断, 区分这些情况是必要的. 如果  $\mu$  像(11)中那样是对于若干初等集定义的,  $\mu$  在  $\mathcal{E}$  上是正规的. 证明和(a)相同.

下一个目标是证明  $\mathcal{E}$  上的每个正规集函数可以推广成可数可加的集函数, 后者定义在包含  $\mathcal{E}$  的  $\sigma$ -环上.

**11.7 定义** 设  $\mu$  在  $\mathcal{E}$  上可加, 正规, 非负并且有限.  $E$  是  $R^p$  中的任何集. 考虑由初等开集  $A_n$  组成的  $E$  的覆盖:

$$E \subseteq \bigcup_{n=1}^{\infty} A_n.$$

定义

$$\mu^*(E) = \inf \sum_{n=1}^{\infty} \mu(A_n), \quad (17)$$

此处的下确界是对  $E$  的一切由初等开集组成的可数覆盖来取的.  $\mu^*(E)$  叫做  $E$  的对应于  $\mu$  的外测度

显然对于所有的  $E$ ,  $\mu^*(E) \ge 0$ , 而且当  $E_1 \subseteq E_2$  时,

$$\mu^*(E_1) \le \mu^*(E_2). \quad (18)$$

**11.8 定理**

(a) 对于每个  $A \in \mathcal{E}$ ,  $\mu^*(A) = \mu(A)$ .

(b)  $E = \bigcup_1^{\infty} E_n$  时,

$$\mu^*(E) \le \sum_{n=1}^{\infty} \mu^*(E_n). \quad (19)$$

注意(a)断言  $\mu^*$  是  $\mu$  从  $\mathcal{E}$  到  $R^p$  的一切子集的类上的推广. 性质(19)叫做次加性.

证 选取  $A \in \mathcal{E}$  以及  $\epsilon > 0$ .

$\mu$  的正规性表明  $A$  包含在一个初等开集  $G$  之内, 而  $\mu(G) \le \mu(A) + \epsilon$ . 由于  $\mu^*(A) \le \mu(G)$  并且  $\epsilon$  是任意的, 我们得到

$$\mu^*(A) \le \mu(A). \quad (20)$$

$\mu^*$  的定义说明有一列初等开集  $\{A_n\}$ , 它们的并包含着  $A$ , 而且

$$\sum_{n=1}^{\infty} \mu(A_n) \le \mu^*(A) + \epsilon.$$

$\mu$  的正规性表明  $A$  包含着一个初等闭集  $F$ , 合于  $\mu(F) \ge \mu(A) - \epsilon$ ; 又由于  $F$  是紧的, 一定有某个  $N$ , 使得

$$F \subseteq A_1 \cup \dots \cup A_N,$$

所以

$$\begin{aligned} \mu(A) &\le \mu(F) + \epsilon \le \mu(A_1 \cup \dots \cup A_N) + \epsilon \\ &\le \sum_1^N \mu(A_n) + \epsilon \le \mu^*(A) + 2\epsilon. \end{aligned}$$

这与(20)结合起来就证明了(a).

其次, 设  $E = \bigcup E_n$ , 再设  $\mu^*(E_n) < +\infty$  对一切  $n$  成立. 给了  $\epsilon > 0$ , 各  $E_n$  总

有用初等开集造成的覆盖 $\{A_{nk}\}$ ,  $k=1, 2, 3, \dots$ , 使得

$$\sum_{k=1}^{\infty} \mu(A_{nk}) \le \mu^*(E_n) + 2^{-n}\epsilon. \quad (21)$$

于是

$$\mu^*(E) \le \sum_{n=1}^{\infty} \sum_{k=1}^{\infty} \mu(A_{nk}) \le \sum_{n=1}^{\infty} \mu^*(E_n) + \epsilon,$$

从而得到(19). 在排除了的情形, 即是对于某些  $n$ ,  $\mu^*(E_n) = +\infty$  时, (19)是当然的.

**11.9 定义** 对于任意的  $A \subset R^p$ ,  $B \subset R^p$ , 定义

$$S(A, B) = (A - B) \cup (B - A), \quad (22)$$

$$d(A, B) = \mu^*(S(A, B)). \quad (23)$$

如果  $\lim_{n \to \infty} d(A, A_n) = 0$ , 就记作  $A_n \to A$ .

倘若有一列初等集  $\{A_n\}$  满足  $A_n \to A$ , 便称  $A$  为有限  $\mu$  可测集, 记作  $A \in \mathfrak{M}_F(\mu)$ .

倘若  $A$  是可数多个有限  $\mu$  可测集的并, 便称  $A$  为  $\mu$  可测集, 并且记作  $A \in \mathfrak{M}(\mu)$ .

$S(A, B)$  是  $A$  与  $B$  的所谓“对称差”. 马上就会知道,  $d(A, B)$  实质上是一个距离函数.

下列定理能使我们对于  $\mu$  得到所希望的推广.

**11.10 定理**  $\mathfrak{M}(\mu)$  是  $\sigma$ -环,  $\mu^*$  在  $\mathfrak{M}(\mu)$  上可数可加.

在证明本定理之前, 我们先开列  $S(A, B)$  与  $d(A, B)$  的一些性质, 计有

$$S(A, B) = S(B, A), \quad S(A, A) = \emptyset. \quad (24)$$

$$S(A, B) \subset S(A, C) \cup S(C, B). \quad (25)$$

$$\left. \begin{array}{l} S(A_1 \cup A_2, B_1 \cup B_2) \\ S(A_1 \cap A_2, B_1 \cap B_2) \\ S(A_1 - A_2, B_1 - B_2) \end{array} \right\} \subset S(A_1, B_1) \cup S(A_2, B_2). \quad (26)$$

(24)显然. (25)来自

$$(A - B) \subset (A - C) \cup (C - B), \quad (B - A) \subset (C - A) \cup (B - C).$$

(26)的第一式得自

$$(A_1 \cup A_2) - (B_1 \cup B_2) \subset (A_1 - B_1) \cup (A_2 - B_2).$$

下一步, 用  $E^c$  表示  $E$  的余集, 我们就推得

$$S(A_1 \cap A_2, B_1 \cap B_2) = S(A_1 \cup A_2, B_1 \cup B_2)$$

$$\subset S(A_1, B_1) \cup S(A_2, B_2) = S(A_1, B_1) \cup S(A_2, B_2);$$

如果我们注意到

$$A_1 - A_2 = A_1 \cap A_2^c,$$

便能得到(26)的最后一式.

由(23), (19), (18)知道  $S(A, B)$  的这些性质包含着

$$d(A, B) = d(B, A), \quad d(A, A) = 0, \quad (27)$$

$$d(A, B) \le d(A, C) + d(C, B), \quad (28)$$

$$\left. \begin{array}{l} d(A_1 \cup A_2, B_1 \cup B_2) \\ d(A_1 \cap A_2, B_1 \cap B_2) \\ d(A_1 - A_2, B_1 - B_2) \end{array} \right\} \le d(A_1, B_1) + d(A_2, B_2) \quad (29)$$

(27)和(28)两关系式表明  $d(A, B)$  满足定义 2.15 的要求, 仅有一点例外是  $d(A, B) = 0$  时并不能推出  $A = B$ . 比如,  $\mu = m$ ,  $A$  可数,  $B$  是空集时,

$$d(A, B) = m^*(A) = 0;$$

为了明白这一点, 可以用满足条件

$$m(I_n) < 2^{-n}\epsilon$$

的区间  $I_n$  把  $A$  的第  $n$  个点盖住.

但是, 如果我们规定  $d(A, B) = 0$  时, 算作  $A$ 、 $B$  两集等价, 便可以把  $R^p$  的子集分成等价类, 而  $d(A, B)$  就把这些等价类的集转化成度量空间.  $\mathfrak{M}_F(\mu)$  就可以做为  $\mathcal{E}$  的闭包而得到. 这个解释对于证明并不重要, 然而它能说明背后的想法.

我们还需要  $d(A, B)$  的一个性质, 这就是如果  $\mu^*(A), \mu^*(B)$  中至少有一个是有限的, 必然

$$|\mu^*(A) - \mu^*(B)| \le d(A, B). \quad (30)$$

因为假如  $0 \le \mu^*(B) \le \mu^*(A)$  的话, 那么(28)就表明

$$d(A, 0) \le d(A, B) + d(B, 0),$$

即是

$$\mu^*(A) \le d(A, B) + \mu^*(B).$$

由于  $\mu^*(B)$  有限, 所以

$$\mu^*(A) - \mu^*(B) \le d(A, B).$$

**定理 11.10 的证明:** 设  $A \in \mathfrak{M}_F(\mu)$ ,  $B \in \mathfrak{M}_F(\mu)$ . 选择  $\{A_n\}$ ,  $\{B_n\}$  使  $A_n \in \mathcal{E}$ ,  $B_n \in \mathcal{E}$ ,  $A_n \to A$ ,  $B_n \to B$ , 那么(29)和(30)说明

$$A_n \cup B_n \to A \cup B, \quad (31)$$

$$A_n \cap B_n \to A \cap B, \quad (32)$$

$$A_n - B_n \to A - B, \quad (33)$$

$$\mu^*(A_n) \to \mu^*(A), \quad (34)$$

并且由  $d(A_n, A) \to 0$  知道  $\mu^*(A) < +\infty$ . 由(31)及(33)知道  $\mathfrak{M}_F(\mu)$  是环.  
由(7),

$$\mu(A_n) + \mu(B_n) = \mu(A_n \cup B_n) + \mu(A_n \cap B_n).$$

令  $n \to \infty$ , 由(34)和定理 11.8(a)得

$$\mu^*(A) + \mu^*(B) = \mu^*(A \cup B) + \mu^*(A \cap B).$$

如果  $A \cap B = \emptyset$ , 那么  $\mu^*(A \cap B) = 0$ .

由此知道  $\mu^*$  在  $\mathfrak{M}_F(\mu)$  上可加.

现在设  $A \in \mathfrak{M}(\mu)$ . 那么  $A$  可以表示为  $\mathfrak{M}_F(\mu)$  的可数个不相交的集的并. 这因为若是  $A = \bigcup A'_n$ ,  $A'_n \in \mathfrak{M}_F(\mu)$ , 令  $A_1 = A'_1$ , 再令

$$A_n = (A'_1 \cup \dots \cup A'_n) - (A'_1 \cup \dots \cup A'_{n-1}), (n = 2, 3, 4, \dots).$$

那么

$$A = \bigcup_{n=1}^{\infty} A_n \quad (35)$$

是所求的表示法. 由(19)知道

$$\mu^*(A) \le \sum_{n=1}^{\infty} \mu^*(A_n). \quad (36)$$

另一方面,  $A \supset A_1 \cup \dots \cup A_n$ , 再由  $\mathfrak{M}_F(\mu)$  上  $\mu^*$  的可加性, 我们得到

$$\mu^*(A) \ge \mu^*(A_1 \cup \dots \cup A_n) = \mu^*(A_1) + \dots + \mu^*(A_n). \quad (37)$$

由等式(36)与(37)得出

$$\mu^*(A) = \sum_{n=1}^{\infty} \mu^*(A_n). \quad (38)$$

假定  $\mu^*(A)$  有限. 置  $B_n = A_1 \cup \dots \cup A_n$ , 那么(38)表明当  $n \to \infty$  时,

$$d(A, B_n) = \mu^*\left(\bigcup_{i=n+1}^{\infty} A_i\right) = \sum_{i=n+1}^{\infty} \mu^*(A_i) \to 0$$

所以  $B_n \to A$ ; 并且由于  $B_n \in \mathfrak{M}_F(\mu)$ , 易见  $A \in \mathfrak{M}_F(\mu)$ ,

这样就证明了  $A \in \mathfrak{M}(\mu)$  而且  $\mu^*(A) < +\infty$  时  $A \in \mathfrak{M}_F(\mu)$ .

现在  $\mu^*$  显然在  $\mathfrak{M}(\mu)$  上是可数可加的了. 这因为假若  $A = \bigcup A_n$ , 这里  $\{A_n\}$

是  $\mathfrak{M}(\mu)$  内的一列不相交的集, 我们已经证明了: 如果对于每个  $n$ ,  $\mu^*(A_n) < +\infty$ , 那么  $[A_n \in \mathfrak{M}_F(\mu)]$ , (38) 成立. 在其他情形, (38) 是显然的.

最后, 我们还需证明  $\mathfrak{M}(\mu)$  是  $\sigma$ -环. 如果  $A_n \in \mathfrak{M}(\mu)$ ,  $n=1, 2, 3, \dots$ , 很明显  $\bigcup A_n \in \mathfrak{M}(\mu)$  (定理 2.12). 假定  $A \in \mathfrak{M}(\mu)$ ,  $B \in \mathfrak{M}(\mu)$ ,  $A_n, B_n \in \mathfrak{M}_F(\mu)$ , 并且

$$A = \bigcup_{n=1}^{\infty} A_n, \quad B = \bigcup_{n=1}^{\infty} B_n,$$

那么  $(A_n \cap B_i \in \mathfrak{M}_F(\mu))$ , 恒等式

$$A_n \cap B = \bigcup_{i=1}^{\infty} (A_n \cap B_i)$$

说明  $A_n \cap B \in \mathfrak{M}(\mu)$ ; 并且由于

$$\mu^*(A_n \cap B) \le \mu^*(A_n) < +\infty,$$

而  $A_n \cap B \in \mathfrak{M}_F(\mu)$ . 因此  $A_n - B \in \mathfrak{M}_F(\mu)$ , 并且因为

$$A - B = \bigcup_{n=1}^{\infty} (A_n - B)$$

而  $A - B \in \mathfrak{M}(\mu)$ .

现在如果  $A \in \mathfrak{M}(\mu)$  的话, 我们便迳直用  $\mu(A)$  代替  $\mu^*(A)$ . 这样就把原来只定义在  $\mathcal{B}$  上的  $\mu$  推广成  $\sigma$ -环  $\mathfrak{M}(\mu)$  上的可数可加集函数了. 这个推广了的集函数叫做一个测度.  $\mu = m$  的特殊情形叫做  $R^p$  上的 Lebesgue 测度.

**11.11 评注**

(a) 假若  $A$  是开的, 那么  $A \in \mathfrak{M}(\mu)$ . 这因为  $R^p$  内每个开集是可数个开区间的并. 想要明白这一点, 只须构造一个可数基使其成员都是开区间即可.

通过取余集, 可以知道每个闭集在  $\mathfrak{M}(\mu)$  内.

(b) 如果  $A \in \mathfrak{M}(\mu)$  而  $\varepsilon > 0$ , 那么存在着闭集  $F$  与开集  $G$ , 满足

$$F \subset A \subset G,$$

并且

$$\mu(G - A) < \varepsilon, \quad \mu(A - F) < \varepsilon. \quad (39)$$

第一个不等式成立是因为  $\mu^*$  是用初等开集覆盖来定义的. 而通过取余集就可以推出第二个不等式来.

(c) 如果从开集出发, 通过可数次运算而得到  $E$ , 其中每次运算是取并, 取交或取余, 就说  $E$  是 Borel 集—— $B$  集.  $R^p$  内一切  $B$  集的类  $\mathfrak{B}$  是  $\sigma$ -环; 实际这是包括一切开集的最小  $\sigma$ -环. 根据评注(a),  $E \in \mathfrak{B}$  时  $E \in \mathfrak{M}(\mu)$ .

(d) 如果  $A \in \mathfrak{M}(\mu)$ , 那么存在着  $B$  集  $F$  与  $G$ , 满足  $F \subset A \subset G$  并且

$$\mu(G - A) = \mu(A - F) = 0 \quad (40)$$

这可以由(b)推导出来, 只须取  $\varepsilon = 1/n$ , 并且令  $n \to \infty$ .

由于  $A = F \cup (A - F)$ , 我们可以看到每个  $A \in \mathfrak{M}(\mu)$ , 是一个  $B$  集与零测度集的并.

$B$  集对于每个  $\mu$  都  $\mu$  可测. 然而零测度的集(即是  $\mu^*(E) = 0$  的集  $E$ )可以因  $\mu$  之不同而不同.

(e)对每个  $\mu$ , 零测度的集构成一个  $\sigma$ -环.

(f)若是 Lebesgue 测度的话, 每个可数集的测度是零. 但是还有不可数的(实际上是完备的)零测度集, Cantor 集可以做为一例. 使用 2.44 段的符号, 容易看出

$$m(E_n) = (2/3)^n, \quad (n = 1, 2, 3, \dots).$$

又因为  $P = \bigcap E_n$ , 对每个  $n$ ,  $P \subset E_n$ , 因而  $m(P) = 0$ .

## 测度空间

**11.12 定义** 假定  $X$  是一个集, 它不必是欧氏空间或者甚至任何度量空间的子集. 如果存在  $X$  的子集(称它们为可测集)组成的  $\sigma$ -环  $\mathfrak{M}$ , 以及定义在  $\mathfrak{M}$  上的一个非负可数可加集函数  $\mu$ (称为测度), 就说  $X$  是测度空间.

此外, 假如还有  $X \in \mathfrak{M}$ , 那么  $X$  称为可测空间.

比如, 可以取  $X = R^p$ ,  $\mathfrak{M}$  是  $R^p$  的所有勒贝格可测子集的类,  $\mu$  是 Lebesgue 测度.

或者令  $X$  是一切正整数的集,  $\mathfrak{M}$  是  $X$  的一切子集的类, 而  $\mu(E)$  是  $E$  的元素的个数.

另一个例子是由概率论所提供的, 事件可以看成是集, 而事件发生的概率是可加(或可数可加)集函数.

以下各节一概考虑可测空间. 必须强调指出, 即使牺牲掉已经达到的普遍性而局限于实数轴上的区间的 Lebesgue 测度, 我们行将讨论的积分理论在任何方面也不会变得简单. 其实, 按照更一般的情况提出这项理论的主要特点, 就会更加明确. 在那里将会看清楚, 每件事情都仅仅与  $\mu$  在  $\sigma$ -环上的可数可加性有关.

为方便起见, 我们将引用符号

$$\{x \mid P\} \tag{41}$$

代表具有性质  $P$  的一切元素  $x$  之集.

## 可测函数

**11.13 定义** 设  $f$  是定义在可测空间  $X$  上的函数, 在扩大的实数系内取值. 如果集

$$\{x \mid f(x) > a\} \tag{42}$$

对于每个实数  $a$  都可测，就说函数  $f$  是可测的。

**11.14 例** 如果  $X=R^p$ ,  $\mathfrak{M}=\mathfrak{M}(\mu)$  即是定义 11.9 所定义的，那么每个连续函数可测，因为这时(42)是一开集。

**11.15 定理** 下面四个条件的每一个都可推出另外三个：

对于每个实数  $a$ ,  $\{x \mid f(x) > a\}$  可测. (43)

对于每个实数  $a$ ,  $\{x \mid f(x) \ge a\}$  可测. (44)

对于每个实数  $a$ ,  $\{x \mid f(x) < a\}$  可测. (45)

对于每个实数  $a$ ,  $\{x \mid f(x) \le a\}$  可测. (46)

证 关系式

$$\begin{aligned}\{x \mid f(x) \ge a\} &= \bigcap_{n=1}^{\infty} \left\{x \mid f(x) > a - \frac{1}{n}\right\}, \\ \{x \mid f(x) < a\} &= X - \{x \mid f(x) \ge a\}, \\ \{x \mid f(x) \le a\} &= \bigcap_{n=1}^{\infty} \left\{x \mid f(x) < a + \frac{1}{n}\right\}, \\ \{x \mid f(x) > a\} &= X - \{x \mid f(x) \le a\}\end{aligned}$$

相继表明：由(43)可得出(44)，由(44)可得出(45)，由(45)可得出(46)，由(46)可得出(43)。

因此可以用这些条件中的任一条代替(42)来定义可测性。

**11.16 定理** 如果  $f$  可测，那么  $|f|$  可测。

证

$$\{x \mid |f(x)| < a\} = \{x \mid f(x) < a\} \cap \{x \mid f(x) > -a\}.$$

**11.17 定理** 设  $\{f_n\}$  是一列可测函数。当  $x \in X$  时，置

$$\begin{aligned}g(x) &= \sup f_n(x), \quad (n = 1, 2, 3, \dots), \\ h(x) &= \limsup_{n \to \infty} f_n(x).\end{aligned}$$

那么  $g$  与  $h$  可测。

对于  $\inf$  与  $\liminf$ ，同样的结论自然也成立。

证

$$\begin{aligned}\{x \mid g(x) > a\} &= \bigcup_{n=1}^{\infty} \{x \mid f_n(x) > a\}, \\ h(x) &= \inf g_m(x),\end{aligned}$$

这里  $g_m(x) = \sup f_n(x)$ ,  $(n \ge m)$ 。

推论

(a) 假若  $f, g$  可测，那么  $\max(f, g)$  与  $\min(f, g)$  可测。如果

$$f^+ = \max(f, 0), \quad f^- = -\min(f, 0), \quad (47)$$

那么特别地  $f^+$  与  $f^-$  都可测.

(b) 可测函数序列的极限函数是可测函数.

**11.18 定理** 设  $f$  与  $g$  是定义在  $X$  上的可测实值函数, 而  $F$  是  $R^2$  上的实连续函数, 置

$$h(x) = F(f(x), g(x)) \quad (x \in X).$$

那么  $h$  可测.

特别地,  $f+g$  与  $fg$  可测

证 设

$$G_a = \{(u, v) \mid F(u, v) > a\}.$$

那么  $G_a$  是  $R^2$  的开集, 于是可以认为

$$G_a = \bigcup_{n=1}^{\infty} I_n,$$

这里  $\{I_n\}$  是一列开区间:

$$I_n = \{(u, v) \mid a_n < u < b_n, c_n < v < d_n\}.$$

由于

$$\{x \mid a_n < f(x) < b_n\} = \{x \mid f(x) > a_n\} \cap \{x \mid f(x) < b_n\}$$

可测, 必然

$$\begin{aligned} \{x \mid (f(x), g(x)) \in I_n\} &= \{x \mid a_n < f(x) < b_n\} \\ &\quad \cap \{x \mid c_n < g(x) < d_n\} \end{aligned}$$

是可测集. 因而

$$\begin{aligned} \{x \mid h(x) > a\} &= \{x \mid (f(x), g(x)) \in G_a\} \\ &= \bigcup_{n=1}^{\infty} \{x \mid (f(x), g(x)) \in I_n\} \end{aligned}$$

同样也可测.

总而言之, 把分析里的所有普通运算, 包括极限运算在内, 用于可测函数时, 仍然得到可测函数. 或者说, 寻常遇到的函数都可测.

然而这仅仅是一种粗略的说法, 这一点有下列例题(基于实数轴上的 Lebesgue 测度)为证: 如果  $h(x) = f(g(x))$ , 这里的  $f$  可测而  $g$  连续, 这时  $h$  未必可测(详见 McShane, 第 241 页).

读者可能注意到了, 在我们讨论可测函数时未曾提及测度. 实际上,  $X$  上的可测函数类仅仅与  $\sigma$ -环  $\mathfrak{M}$  (使用定义 11.12 的记号)有关. 比如, 我们可以谈论  $R^p$  上的 Borel 可测函数, 即是使

$$\{x \mid f(x) > a\}$$

总是 Borel 集的函数  $f$ , 而不涉及任何特定的测度.

## 简单函数

**11.19 定义** 设  $s$  是定义在  $X$  上的实值函数. 如果  $s$  的值域是有限的(集), 便称  $s$  为简单函数.

设  $E \subset X$ , 再令

$$K_E(x) = \begin{cases} 1 & (x \in E), \\ 0 & (x \notin E). \end{cases} \quad (48)$$

$K_E$  称为  $E$  的特征函数.

假定  $s$  的值域由不同的数  $c_1, \dots, c_n$  组成. 设

$$E_i = \{x \mid s(x) = c_i\} \quad (i = 1, \dots, n).$$

那么

$$s = \sum_{i=1}^{n} c_i K_{E_i}, \quad (49)$$

这说明每个简单函数是特征函数的有限线性组合. 很明显,  $s$  可测当且仅当集  $E_1, \dots, E_n$  可测.

使我们感兴趣的是, 每个函数能用简单函数来逼近:

**11.20 定理** 设  $f$  为  $X$  上的实函数. 那么存在一列简单函数  $\{s_n\}$ , 对于每个  $x \in X$  当  $n \to \infty$  时  $s_n(x) \to f(x)$ . 若  $f$  可测, 可以选  $\{s_n\}$  为可测函数序列. 若  $f \ge 0$ , 可以选  $\{s_n\}$  为单调增序列.

证 设  $f \ge 0$ , 对于  $n=1, 2, 3, \dots$ ,  $i=1, 2, \dots, n2^n$  规定

$$E_n = \left\{x \mid \frac{i-1}{2^n} \le f(x) < \frac{i}{2^n}\right\}, \quad F_n = \{x \mid f(x) \ge n\}.$$

置

$$s_n = \sum_{i=1}^{n2^n} \frac{i-1}{2^n} K_{E_n i} + n K_{F_n}. \quad (50)$$

一般情况, 令  $f = f^+ - f^-$ , 再将前面的推断施行于  $f^+$  与  $f^-$ .

注意, (50) 所写的序列  $\{s_n\}$ , 当  $f$  有界时, 一致收敛于  $f$ .

## 积分

我们把积分定义在可测空间  $X$  上, 在这里  $\mathcal{M}$  是可测集的  $\sigma$ -环, 而  $\mu$  是测度. 愿意把情况想像得具体些的读者可以把  $X$  设想成实数轴, 或者一个区间, 而把  $\mu$  设想为 Lebesgue 测度  $m$ .

**11.21 定义** 设

$$s(x) = \sum_{i=1}^{n} c_i K_{E_i}(x) \quad (x \in X, c_i > 0) \quad (51)$$

可测, 而且  $E \in \mathfrak{M}$ . 我们定义

$$I_E(s) = \sum_{i=1}^{n} c_i \mu(E \cap E_i). \quad (52)$$

如果  $f$  可测且为非负的, 我们定义

$$\int_E f d\mu = \sup I_E(s), \quad (53)$$

此处  $\sup$  是对于所有满足  $0 \le s \le f$  的简单函数  $s$  而取的.

(53) 的左端叫做  $f$  关于测度  $\mu$  在集  $E$  上的 Lebesgue 积分. 应该注意, 积分可以取  $+\infty$  为值.

对于每个非负可测简单函数  $s$ , 容易验证

$$\int_E s d\mu = I_E(s). \quad (54)$$

**11.22 定义** 设 $f$ 为可测函数, 考虑两积分

$$\int_E f^+ d\mu, \int_E f^- d\mu, \quad (55)$$

此外  $f^+$  与  $f^-$  是 (47) 所定义的.

如果 (55) 的积分中至少有一个是有限的, 我们定义

$$\int_E f d\mu = \int_E f^+ d\mu - \int_E f^- d\mu. \quad (56)$$

若 (55) 的两个积分都有限, 那么 (56) 有限, 就说  $f$  在  $E$  上对  $\mu$  按 Lebesgue 意义是可积的 (或可求和的), 并且写作: 在  $E$  上  $f \in \mathcal{L}(\mu)$ , 若  $\mu = m$ , 通常的写法是: 在  $E$  上  $f \in \mathcal{L}$ .

这命名法可能有一点混乱, 如果 (56) 是  $+\infty$  或  $-\infty$ , 那么  $f$  在  $E$  上的积分是确定的, 然而在上述的字义下  $f$  不可积; 只有当它在  $E$  上的积分有限时  $f$  在  $E$  上才是可积的.

以后我们主要关心于可测函数, 尽管偶而也希望讨论较为一般的情形.

**11.23 评注** 下列性质是明显的:

- (a) 若  $f$  在  $E$  上有界可测, 而且  $\mu(E) < +\infty$ , 那么在  $E$  上  $f \in \mathcal{L}(\mu)$ .
- (b) 如果  $x \in E$  时  $a \le f(x) \le b$ , 而且  $\mu(E) < +\infty$ , 那么

$$a\mu(E) \le \int_E f d\mu \le b\mu(E).$$

(c) 如果在  $E$  上  $f$  与  $g \in \mathcal{L}(\mu)$ , 而且当  $x \in E$  时  $f(x) \le g(x)$ , 那么

$$\int_E f d\mu \le \int_E g d\mu.$$

(d) 如果在  $E$  上  $f \in \mathcal{L}(\mu)$ , 那么对于每个有限常数  $c$ , 在  $E$  上  $cf \in \mathcal{L}(\mu)$ , 而且

$$\int_E cf d\mu = c \int_E f d\mu.$$

(e) 如果  $\mu(E)=0$ , 而  $f$  可测, 那么  $\int_E f d\mu = 0$ .

(f) 如果在  $E$  上  $f \in \mathcal{L}(\mu)$ ,  $A \in \mathfrak{M}$ , 且  $A \subset E$ , 那么在  $A$  上  $f \in \mathcal{L}(\mu)$ .

**11.24 定理**

(a) 设在  $X$  上  $f$  非负可测. 若  $A \in \mathfrak{M}$ , 定义

$$\phi(A) = \int_A f d\mu, \quad (57)$$

那么  $\phi$  在  $\mathfrak{M}$  上可数可加.

(b) 如果在  $X$  上  $f \in \mathcal{L}(\mu)$ , 这结论也成立.

证 显然(b)可以从(a)推来, 只需认为  $f = f^+ - f^-$  而把(a)用于  $f^+$  与  $f^-$  就成了.

要证(a), 我们需要证明

$$\phi(A) = \sum_{n=1}^{\infty} \phi(A_n). \quad (58)$$

这里,  $A_n \in \mathfrak{M}$  ( $n=1, 2, 3, \dots$ ),  $i \neq j$  时  $A_i \cap A_j = \emptyset$ , 而且  $A = \bigcup_1^{\infty} A_n$ .

若  $f$  是特征函数, 那么  $\phi$  的可数可加性与  $\mu$  的可数可加性完全是一回事, 这因为

$$\int_A K_E d\mu = \mu(A \cap E).$$

若  $f$  是简单函数, 那么  $f$  的形状是(51)那样的; 结论仍正确.

在一般情况下, 对于每个可测的简单函数  $s$ , 若能满足  $0 \le s \le f$ , 必然

$$\int_A s d\mu = \sum_{n=1}^{\infty} \int_{A_n} s d\mu \le \sum_{n=1}^{\infty} \phi(A_n).$$

所以由(53)得

$$\phi(A) \le \sum_{n=1}^{\infty} \phi(A_n). \quad (59)$$

现在假若有某  $n$  使  $\phi(A_n) = +\infty$ , 因为  $\phi(A) \ge \phi(A_n)$ , 那么(58)是当然的.

假定每个  $n$  使  $\phi(A_n) < +\infty$ .

给定  $\epsilon > 0$ , 我们可以选一个可测函数  $s$  使  $0 \le s \le f$  并且

$$\int_{A_1} s d\mu \ge \int_{A_1} f d\mu - \epsilon, \int_{A_2} s d\mu \ge \int_{A_2} f d\mu - \epsilon. \quad (60)$$

于是

$$\begin{aligned} \phi(A_1 \cup A_2) &\ge \int_{A_1 \cup A_2} s d\mu = \int_{A_1} s d\mu + \int_{A_2} s d\mu \\ &\ge \phi(A_1) + \phi(A_2) - 2\epsilon, \end{aligned}$$

由此推出

$$\phi(A_1 \cup A_2) \ge \phi(A_1) + \phi(A_2).$$

从而对于每个  $n$

$$\phi(A_1 \cup \dots \cup A_n) \ge \phi(A_1) + \dots + \phi(A_n). \quad (61)$$

由于  $A \supset A_1 \cup \dots \cup A_n$ , 由(61)可以得出

$$\phi(A) \ge \sum_{n=1}^{\infty} \phi(A_n), \quad (62)$$

于是(58)是(59)及(62)的应有结果.

**推论** 若  $A \in \mathfrak{M}$ ,  $B \subset A$ , 而且  $\mu(A - B) = 0$ , 那么

$$\int_A f d\mu = \int_B f d\mu.$$

由于  $A = B \cup (A - B)$ , 这可以从评注 10.23(e) 推出来.

**11.25 评注** 上述推论说明, 零测度集在积分时可以忽略.

若集  $\{x \mid f(x) \neq g(x)\} \cap E$  是零测度的, 就写作: 在  $E$  上  $f \sim g$ .

这样,  $f \sim f$ ;  $f \sim g$  意味着  $g \sim f$ ; 由  $f \sim g$ ,  $g \sim h$  能推出  $f \sim h$ . 这就是说, 关系  $\sim$  是等价关系.

若在  $E$  上  $f \sim g$ , 显然可得

$$\int_A f d\mu = \int_A g d\mu,$$

只要这些积分对每个可测子集  $A \subset E$  存在.

若一性质  $P$  对于每个点  $x \in E - A$  成立, 并且  $\mu(A) = 0$ , 习惯上说  $P$  几乎对于一切  $x \in E$  成立, 或  $P$  在  $E$  上几乎处处成立. (“几乎处处”这个概念自然依赖于所考虑的特定测度. 在文献中, 除非有什么别的附笔, 一般指的是 Lebesgue 测度.)

若在  $E$  上  $f \in \mathcal{L}(\mu)$ , 显然  $f(x)$  必然在  $E$  上几乎处处有限. 所以在大部分情

形下如果我们从开始便假定所设函数是有限值的，并不会丧失一般性。

**11.26 定理** 若在  $E$  上  $f \in \mathcal{L}(\mu)$ ，那么在  $E$  上  $|f| \in \mathcal{L}(\mu)$ ，而且

$$\left| \int_E f d\mu \right| \le \int_E |f| d\mu. \quad (63)$$

证 记  $E = A \cup B$ ，在  $A$  上  $f(x) \ge 0$ ，而在  $B$  上  $f(x) < 0$ 。由定理 11.24，

$$\begin{aligned} \int_E |f| d\mu &= \int_A |f| d\mu + \int_B |f| d\mu \\ &= \int_A f^+ d\mu + \int_B f^- d\mu < +\infty, \end{aligned}$$

所以  $|f| \in \mathcal{L}(\mu)$ 。从  $f \le |f|$  及  $-f \le |f|$ ，知道

$$\int_E f d\mu \le \int_E |f| d\mu, \quad -\int_E f d\mu \le \int_E |f| d\mu,$$

由此即得(63)。

因为  $f$  的可积性包含着  $|f|$  的可积性，所以 Lebesgue 积分常常被称为绝对收敛积分。自然还可以定义非绝对收敛的积分，而且在处理某些问题时这样做是重要的。但是这种积分缺乏勒贝格积分的某些最有用的性质，在分析中起的作用比较次要些。

**11.27 定理** 设  $f$  在  $E$  上可测， $|f| \le g$ ，并且在  $E$  上  $g \in \mathcal{L}(\mu)$ 。那么在  $E$  上  $f \in \mathcal{L}(\mu)$ 。

证  $f^+ \le g$  且  $f^- \le g$ 。

**11.28 Lebesgue 单调收敛定理** 假设  $E \in \mathfrak{M}$ ， $\{f_n\}$  是可测函数序列，满足条件

$$0 \le f_1(x) \le f_2(x) \le \cdots \quad (x \in E). \quad (64)$$

$n \to \infty$  时用，

$$f_n(x) \to f(x) \quad (x \in E) \quad (65)$$

来定义  $f$ 。那么

$$\int_E f_n d\mu \to \int_E f d\mu \quad (n \to \infty). \quad (66)$$

证 由(64)显见，当  $n \to \infty$  时

$$\int_E f_n d\mu \to a \quad (67)$$

对某个  $a$  成立；又因为  $\int f_n \le \int f$ ，那么

$$\alpha \le \int_E f d\mu. \quad (68)$$

选择  $c$  合于  $0 < c < 1$ , 再设  $s$  是合于  $0 \le s \le f$  的可测简单函数. 置

$$E_n = \{x \mid f_n(x) \ge cs(x)\}, \quad n = 1, 2, 3, \dots.$$

由(64),  $E_1 \subset E_2 \subset E_3 \subset \dots$ , 又由(65)

$$E = \bigcup_{n=1}^{\infty} E_n \quad (69)$$

对于每个  $n$

$$\int_E f_n d\mu \ge \int_{E_n} f_n d\mu \ge c \int_{E_n} s d\mu. \quad (70)$$

在(70)中让  $n \to \infty$ . 由于积分是可数可加集函数(定理 11.24), (69)表明我们可以将定理 11.3 用于(70)内的最后积分, 从而得到

$$\alpha \ge c \int_E s d\mu \quad (71)$$

令  $c \to 1$ , 得

$$\alpha \ge \int_E s d\mu,$$

而(53)蕴含着

$$\alpha \ge \int_E f d\mu. \quad (72)$$

这定理是(67)、(68)、(72)的应有结果.

**11.29 定理** 假设  $f = f_1 + f_2$ , 在  $E$  上  $f_i \in \mathcal{L}(\mu)$  ( $i = 1, 2$ ), 那么在  $E$  上  $f \in \mathcal{L}(\mu)$ , 并且

$$\int_E f d\mu = \int_E f_1 d\mu + \int_E f_2 d\mu. \quad (73)$$

证 首先, 假设  $f_1 \ge 0$ ,  $f_2 \ge 0$ . 如果  $f_1$ ,  $f_2$  都是简单函数, (73)可以由(52)与(54)轻而易举地推出来. 不然的话, 选择非负的可测简单函数的单调增序列  $\{s'_n\}$ ,  $\{s''_n\}$ , 使它们各收敛于  $f_1$ ,  $f_2$ . 定理 11.20 说明这是可能的. 置  $s_n = s'_n + s''_n$ , 那么

$$\int_E s_n d\mu = \int_E s'_n d\mu + \int_E s''_n d\mu,$$

如果令  $n \to \infty$  并且应用定理 11.28, (73)就推出来了.

其次, 假设  $f_1 \ge 0$ ,  $f_2 \le 0$  置

$$A = \{x \mid f(x) \ge 0\}, B = \{x \mid f(x) < 0\}.$$

那么  $f, f_1, -f_2$  在  $A$  上非负. 因此

$$\int_A f_1 d\mu = \int_A f d\mu + \int_A (-f_2) d\mu = \int_A f d\mu - \int_A f_2 d\mu. \quad (74)$$

同样,  $-f, f_1, -f_2$  在  $B$  上非负, 因此

$$\int_B (-f_2) d\mu = \int_B f_1 d\mu + \int_B (-f) d\mu,$$

或

$$\int_B f_1 d\mu = \int_B f d\mu - \int_B f_2 d\mu, \quad (75)$$

把(74)与(75)相加, 即得(73).

一般情形,  $E$  可以分成四个集  $E_i$ , 在每个  $E_i$  上  $f_1(x)$  与  $f_2(x)$  各有一定的符号. 由已经证过的两种情形可得

$$\int_{E_i} f d\mu = \int_{E_i} f_1 d\mu + \int_{E_i} f_2 d\mu \quad (i = 1, 2, 3, 4),$$

把这四个等式相加即得(73).

现在可以对级数把定理 11.28 重述一遍.

**11.30 定理** 假设  $E \in \mathfrak{M}$ ,  $\{f_n\}$  是非负可测函数序列, 并且

$$f(x) = \sum_{n=1}^{\infty} f_n(x), \quad (x \in E), \quad (76)$$

那么

$$\int_E f d\mu = \sum_{n=1}^{\infty} \int_E f_n d\mu.$$

证 (76)的部分和组成单调序列.

**11.31 Fatou 定理** 假设  $E \in \mathfrak{M}$ , 若  $\{f_n\}$  是非负可测函数序列, 并且

$$f(x) = \lim_{n \to \infty} \inf f_n(x) \quad (x \in E),$$

那么

$$\int_E f d\mu \le \lim_{n \to \infty} \inf \int_E f_n d\mu. \quad (77)$$

在(77)内会有严格的不等式成立. 在习题 5 中有一个例子.

证 对于  $n=1, 2, 3, \dots$ , 以及  $x \in E$  置

$$g_n(x) = \inf f_i(x) \quad (i \ge n),$$

那么  $g_n(x)$  在  $E$  上可测, 并且

$$0 \le g_1(x) \le g_2(x) \le \dots, \quad (78)$$

$$g_n(x) \le f_n(x), \quad (79)$$

$$g_n(x) \to f(x) \quad (n \to \infty). \quad (80)$$

由(78), (80)以及定理 11.28, 知道

$$\int_E g_n d\mu \to \int_E f d\mu, \quad (81)$$

因此, (77)是(79)与(81)的应有结果.

**11.32 Lebesgue 控制收敛定理** 假设  $E \in \mathfrak{M}$ ,  $\{f_n\}$  是可测函数序列, 当  $n \to \infty$  时

$$f_n(x) \to f(x) \quad (x \in E), \quad (82)$$

如果在  $E$  上有函数  $g \in \mathcal{L}(\mu)$ , 使

$$|f_n(x)| \le g(x) \quad (n = 1, 2, 3, \dots, x \in E), \quad (83)$$

那么

$$\lim_{n \to \infty} \int_E f_n d\mu = \int_E f d\mu. \quad (84)$$

由于(83)的关系, 才说  $\{f_n\}$  受  $g$  的控制, 然后我们讲到控制收敛. 根据评注 11.25, 如果(82)在  $E$  上几乎处处成立, 结论仍然相同.

**证** 首先, 由(83)和定理 11.27 能推出  $f_n \in \mathcal{L}(\mu)$  以及在  $E$  上  $f \in \mathcal{L}(\mu)$ .

由于  $f_n + g \ge 0$ , Fatou 定理表明

$$\int_E (f + g) d\mu \le \liminf_{n \to \infty} \int_E (f_n + g) d\mu$$

或

$$\int_E f d\mu \le \liminf_{n \to \infty} \int_E f_n d\mu. \quad (85)$$

因为  $g - f_n \ge 0$ , 同样地知道

$$\int_E (g - f) d\mu \le \liminf_{n \to \infty} \int_E (g - f_n) d\mu,$$

所以

$$-\int_E f d\mu \le \liminf_{n \to \infty} \left[ -\int_E f_n d\mu \right],$$

这无异于

$$\int_E f d\mu \ge \limsup_{n \to \infty} \int_E f_n d\mu. \quad (86)$$

(84)内极限的存在以及(84)所说的等式现在来看是(85)与(86)的直接结果.

**推论** 若  $\mu(E) < +\infty$ ,  $\{f_n\}$  在  $E$  上一致有界, 且在  $E$  上  $f_n(x) \to f(x)$ , 必

然(84)成立.

一致有界收敛序列常常被称为有界收敛序列.

## 与 Riemann 积分的比较

下一条定理将要证明, 一个区间上的每个 Riemann 可积函数一定也 Lebesgue 可积, 并且 Riemann 可积函数要服从更严密的连续条件. 因此且莫说 Lebesgue 理论可以将广泛得多的一类函数类进行积分, 而其最大优点或许在于使许多极限运算变得容易掌握, 从这个观点来看, Lebesgue 的收敛定理完全可以认为是 Lebesgue 理论的核心.

Riemann 理论遇到的困难之一, 是 Riemann 可积函数(甚至连续函数)的极限可以不是 Riemann 可积的. 现在, 因为可测函数的极限一定可测, 所以这个困难几乎消除了.

令可测空间  $X$  是实轴上的区间  $[a, b]$ , 取  $\mu = m$  (Lebesgue 测度), 并且  $\mathcal{M}$  是  $[a, b]$  的 Lebesgue 可测子集之类. 习惯上采用熟悉的符号

$$\int_a^b f dx$$

代替  $\int f dm$ , 来表示  $f$  在  $[a, b]$  上的 Lebesgue 积分. 为了区别 Riemann 积分与 Lebesgue 积分, 我们现在把前者表示为

$$\mathcal{R} \int_a^b f dx.$$

**11.33 定理**

(a) 如果在  $[a, b]$  上  $f \in \mathcal{R}$ , 必然在  $[a, b]$  上  $f \in \mathcal{L}$  而且

$$\int_a^b f dx = \mathcal{R} \int_a^b f dx. \quad (87)$$

(b) 假定  $f$  在  $[a, b]$  上有界, 那么在  $[a, b]$  上  $f \in \mathcal{R}$ , 当且仅当  $f$  在  $[a, b]$  上几乎处处连续.

证 假设  $f$  有界, 根据定义 6.1 与定理 6.4, 存在着  $[a, b]$  的一列分割  $\{P_k\}$ , 其中  $P_{k+1}$  是  $P_k$  的加细, 而  $P_k$  中相邻两点的距离都小于  $1/k$ , 而且

$$\lim_{k \to \infty} L(P_k, f) = \mathcal{R} \int_a^b f dx, \quad \lim_{k \to \infty} U(P_k, f) = \mathcal{R} \int_a^b f dx. \quad (88)$$

(本证明中所有积分都是在  $[a, b]$  上取的).

如果  $P_k = \{x_0, x_1, \dots, x_n\}$ , 其中  $x_0 = a$ ,  $x_n = b$ , 规定

$$U_k(a) = L_k(a) = f(a);$$

采用定义 6.1 所介绍的符号, 对于  $1 \le i \le n$ , 当  $x_{i-1} < x < x_i$  时, 令  $U_k(x) = M_i$ ,  $L_k(x) = m_i$ , 这时

$$L(P_k, f) = \int L_k dx, \quad U(P_k, f) = \int U_k dx, \quad (89)$$

并且因为  $P_{k+1}$  加细了  $P_k$ , 那么对于一切  $x \in [a, b]$

$$L_1(x) \le L_2(x) \le \cdots \le f(x) \le \cdots \le U_2(x) \le U_1(x) \quad (90)$$

根据(90), 必然存在着

$$L(x) = \lim_{k \to \infty} L_k(x), \quad U(x) = \lim_{k \to \infty} U_k(x). \quad (91)$$

留心  $L$  与  $U$  都是  $[a, b]$  上的有界可测函数, 注意

$$L(x) \le f(x) \le U(x) \quad (a \le x \le b), \quad (92)$$

而且根据(88)与(90)和单调收敛定理, 知道.

$$\int L dx = \underline{\mathcal{R}} \int f dx, \quad \int U dx = \overline{\mathcal{R}} \int f dx. \quad (93)$$

一直到现在, 除去假设  $f$  是  $[a, b]$  上的有界实函数而外, 关于  $f$  没有作别的假设.

要把证明完成, 注意  $f \in \mathcal{R}$  当且仅当它的上下 Riemann 积分相等, 从而当且仅当

$$\int L dx = \int U dx; \quad (94)$$

因为  $L \le U$ , (94) 实现当且仅当对于几乎所有  $x \in [a, b]$ ,  $L(x) = U(x)$  (习题 1).

在那时候, 就能由(92)推出在  $[a, b]$  上几乎处处

$$L(x) = f(x) = U(x), \quad (95)$$

所以  $f$  可测, 而(87)是(93)与(95)的必然结果.

此外如果  $x$  不属于任何  $P_k$ , 便十分容易知道  $U(x) = L(x)$  当且仅当  $f$  在  $x$  点连续. 因为  $P_k$  各集的并可数, 它的测度是 0, 于是可以断定  $f$  在  $[a, b]$  上几乎处处连续当且仅当几乎处处  $L(x) = U(x)$ , 从而当且仅当  $f \in \mathcal{R}$  (犹如上边见到的).

这就把证明完成了.

积分和微分之间常见的联系, 大部可以转入 Lebesgue 理论中来. 若在  $[a, b]$  上  $f \in \mathcal{L}$ , 并且

$$F(x) = \int_a^x f dt \quad (a \le x \le b), \quad (96)$$

那么在  $[a, b]$  上几乎处处  $F'(x) = f(x)$ .

反之, 若  $F$  在  $[a, b]$  的每一点处可微, (“几乎处处”在这里是不够的!) 并且在  $[a, b]$  上  $F' \in \mathcal{L}$ , 则

$$F(x) - F(a) = \int_a^x F'(t) \quad (a \le x \le b).$$

关于这两条定理的证明, 建议读者阅览参考书目里开列的任何关于积分的书.

## 复函数的积分

假设  $f$  是定义在测度空间  $X$  上的复值函数,  $f = u + iv$ ,  $u$ ,  $v$  都是实的. 当且仅当  $u$ ,  $v$  都是可测函数时我们称  $f$  是可测的.

容易验证, 复可测函数的和与积仍然可测.

由于

$$|f| = \sqrt{u^2 + v^2},$$

定理 11.18 说明对于每个复可测函数  $f$ ,  $|f|$  是可测的.

假设  $\mu$  是  $X$  上的测度,  $E$  是  $X$  的可测子集,  $f$  是  $X$  上的复值函数. 当  $f$  可测, 并且

$$\int_E |f| d\mu < +\infty, \quad (97)$$

就说在  $E$  上  $f \in \mathcal{L}(\mu)$ , 而且当 (97) 成立时, 定义

$$\int_E f d\mu = \int_E u d\mu + i \int_E v d\mu,$$

由于  $|u| \le |f|$ ,  $|v| \le |f|$ , 并且  $|f| \le |u| + |v|$ , 显然, 当且仅当在  $E$  上  $u \in \mathcal{L}(\mu)$  以及  $v \in \mathcal{L}(\mu)$  时 (97) 成立.

定理 11.23(a), (d), (e), (f), 11.24(b), 11.26, 11.27, 11.29, 以及 11.32 现在都可以推广到复函数的 Lebesgue 积分. 证明都很简单. 只有定理 11.26 的证明有一点趣味:

如果在  $E$  上  $f \in \mathcal{L}(\mu)$ , 存在一复数  $c$ ,  $|c| = 1$  使

$$c \int_E f d\mu \ge 0.$$

置  $g = cf = u + iv$ ,  $u$ ,  $v$  是实的, 那么

$$\left| \int_E f d\mu \right| = c \int_E f d\mu = \int_E g d\mu = \int_E u d\mu \le \int_E |f| d\mu.$$

上列等式中的第三个成立, 是因为前面的等式表明  $\int_E g d\mu$  是实数.

## $\mathcal{L}^2$ 类的函数

作为 Lebesgue 理论的一个应用我们现在推广 Parseval 定理(在第 8 章只对于 Riemann 可积的函数证过), 并且对于函数的正规正交集(orthonormal sets)证明 Riesz-Fischer 定理.

**11.34 定义** 设  $X$  是可测空间. 如果复函数  $f$  可测并且

$$\int_X |f|^2 d\mu < +\infty,$$

就说在  $X$  上  $f \in \mathcal{L}^2(\mu)$ . 如果  $\mu$  是 Lebesgue 测度, 就说  $f \in \mathcal{L}^2$ . 当  $f \in \mathcal{L}^2(\mu)$  时, (从现在起, 省略“在  $X$  上”三个字)定义

$$\|f\| = \left\{ \int_X |f|^2 d\mu \right\}^{\frac{1}{2}},$$

而把  $\|f\|$  叫做  $f$  的  $\mathcal{L}^2(\mu)$  范数.

**11.35 定理** 假设  $f \in \mathcal{L}^2(\mu)$ ,  $g \in \mathcal{L}^2(\mu)$ . 那么  $fg \in \mathcal{L}(\mu)$ , 并且

$$\int_X |fg| d\mu \le \|f\| \|g\|. \quad (98)$$

这是我们在线性代数和 Riemann 积分中已经遇到的 Schwarz 不等式. 它是不等式

$$0 \le \int_X (|f| + \lambda |g|)^2 d\mu = \|f\|^2 + 2\lambda \int_X |fg| d\mu + \lambda^2 \|g\|^2$$

的直接结果, 这不等式对于每个实数  $\lambda$  成立.

**11.36 定理** 如果  $f \in \mathcal{L}^2(\mu)$ ,  $g \in \mathcal{L}^2(\mu)$ , 那么  $f+g \in \mathcal{L}^2(\mu)$ , 而且

$$\|f+g\| \le \|f\| + \|g\|.$$

证 Schwarz 不等式说明

$$\begin{aligned} \|f+g\|^2 &= \int |f+g|^2 d\mu = \int |f|^2 d\mu + \int |g|^2 d\mu + 2 \operatorname{Re} \int f \bar{g} d\mu \\ &\le \|f\|^2 + \|g\|^2 + 2| \int f \bar{g} d\mu | \\ &\le \|f\|^2 + 2\|f\| \|g\| + \|g\|^2 \\ &= (\|f\| + \|g\|)^2. \end{aligned}$$

**11.37 评注** 如果我们把  $\mathcal{L}^2(\mu)$  内两函数  $f$  与  $g$  间的距离定义为  $\|f-g\|$ , 可以知道定义 2.15 的条件都能满足, 仅有的例外是  $\|f-g\| = 0$  并不意味着

$f(x)=g(x)$  对一切  $x$  成立, 而只是几乎对一切  $x$  成立. 所以如果把只在一个零测度集上不相同的函数等同起来,  $\mathcal{L}^2(\mu)$  便是一个度量空间.

现在我们在实轴的一个区间上对于 Lebesgue 测度来考虑  $\mathcal{L}^2$ .

**11.38 定理** 连续函数在  $[a, b]$  上构成  $\mathcal{L}^2$  的一个稠子集.

更明确地说, 这里的意思是: 对于  $[a, b]$  上的任何  $f \in \mathcal{L}^2$ , 和任何  $\varepsilon > 0$ , 总有  $[a, b]$  上的连续函数  $g$ , 使得

$$\|f - g\| = \left\{ \int_a^b |f - g|^2 dx \right\}^{\frac{1}{2}} < \varepsilon.$$

证 说  $f$  在  $\mathcal{L}^2$  内被序列  $\{g_n\}$  逼近, 就是说  $n \to \infty$  时  $\|f - g_n\| \to 0$ .

设  $A$  是  $[a, b]$  的闭子集,  $K_A$  是它的特征函数. 置

$$t(x) = \inf |x - y| \quad (y \in A),$$

再令

$$g_n(x) = \frac{1}{1 + nt(x)} \quad (n = 1, 2, 3, \dots),$$

那么  $g_n$  在  $[a, b]$  上连续, 在  $A$  上  $g_n(x) = 1$ , 在  $B = [a, b] - A$  上  $g_n(x) \to 0$ . 因此根据定理 11.32

$$\|g_n - K_A\| = \left\{ \int_B g_n^2 dx \right\}^{\frac{1}{2}} \to 0.$$

由此可见, 闭集的特征函数可以在  $\mathcal{L}^2$  内用连续函数逼近.

由 (39) 知道, 对于任意可测集的特征函数有同样的结果, 因而对于可测简单函数也如此.

若  $f \ge 0$  且  $f \in \mathcal{L}^2$ , 令  $\{s_n\}$  为非负可测简单函数的单调增序列, 它满足  $s_n(x) \to f(x)$ . 由于  $|f - s_n|^2 \le f^2$ , 定理 11.32 说明  $\|f - s_n\| \to 0$ .

一般情形随之而来.

**11.39 定义** 我们说复函数序列  $\{\phi_n\}$  是可测空间  $X$  上函数的正规正交系, 就是要求

$$\int_X \phi_n \bar{\phi}_m d\mu = \begin{cases} 0 & (n \neq m), \\ 1 & (n = m). \end{cases}$$

特别地, 我们必有  $\phi_n \in \mathcal{L}^2(\mu)$ . 若是  $f \in \mathcal{L}^2(\mu)$  而且

$$c_n = \int_X f \bar{\phi}_n d\mu \quad (n = 1, 2, 3, \dots),$$

便照定义 8.10 那样, 写成

$$f \sim \sum_{n=1}^{\infty} c_n \phi_n.$$

三角 Fourier 级数的定义同样可以在  $[-\pi, \pi]$  上扩充到  $\mathcal{L}^2$  (或甚至扩充到  $\mathcal{L}^2(\mu)$ ). 定理 8.11 与 8.12 (Bessel 不等式) 对任何  $f \in \mathcal{L}^2(\mu)$  成立. 证明逐字逐句地相同.

我们现在可以证 Parseval 定理了.

**11.40 定理** 假设在  $[-\pi, \pi]$  上  $f \in \mathcal{L}^2$ ,

$$f(x) \sim \sum_{-\infty}^{\infty} c_n e^{inx}, \quad (99)$$

令  $s_n$  是 (99) 的第  $n$  个部分和. 那么

$$\lim_{n \to \infty} \|f - s_n\| = 0, \quad (100)$$

$$\sum_{-\infty}^{\infty} |c_n|^2 = \frac{1}{2\pi} \int_{-\pi}^{\pi} |f|^2 dx. \quad (101)$$

**证** 给定  $\varepsilon > 0$ . 由定理 11.38, 存在连续函数  $g$ , 使得

$$\|f - g\| < \frac{\varepsilon}{2}.$$

进一步容易知道, 我们可以安排得  $g(\pi) = g(-\pi)$ . 那么  $g(x)$  可以拓展成周期连续函数. 由定理 8.16, 有一个三角多项式  $T$ , 比如说是  $N$  阶的, 使得

$$\|g - T\| < \frac{\varepsilon}{2}.$$

由此, 根据定理 8.11 (扩充到  $\mathcal{L}^2$ ), 当  $n \ge N$  时

$$\|s_n - f\| \le \|T - f\| \le \varepsilon,$$

从而 (100) 成立. 照定理 8.16 的证明中所做过的那样, 可以从 (100) 推得等式 (101).

**推论** 若在  $[-\pi, \pi]$  上  $f \in \mathcal{L}^2$ , 且若

$$\int_{-\pi}^{\pi} f(x) e^{-inx} dx = 0 \quad (n = 0, \pm 1, \pm 2, \dots),$$

必然  $\|f\| = 0$ .

这样一来, 如果  $\mathcal{L}^2$  里的两个函数能取得相同的 Fourier 级数, 那么它们至多在一个零测度集上不相同.

**11.41 定义** 设  $f$  与  $f_n \in \mathcal{L}^2(\mu)$  ( $n=1, 2, 3, \dots$ ). 如果  $\|f_n - f\| \to 0$ , 就说  $\{f_n\}$  在  $\mathcal{L}^2(\mu)$  内收敛于  $f$ . 如果对于任意的  $\varepsilon > 0$  有一个正整数  $N$  使得当  $n \ge N$  与  $m \ge N$  时,  $\|f_n - f_m\| \le \varepsilon$ , 就说  $\{f_n\}$  是  $\mathcal{L}^2(\mu)$  内的 Cauchy 序列.

**11.42 定理** 假若  $\{f_n\}$  是  $\mathcal{L}^2(\mu)$  内的 Cauchy 序列, 必然存在着一个函数  $f \in \mathcal{L}^2(\mu)$ , 使  $\{f_n\}$  在  $\mathcal{L}^2(\mu)$  内收敛于  $f$ .

换言之，这是说  $\mathcal{L}^2(\mu)$  是完备度量空间。

证 由于  $\{f_n\}$  是 Cauchy 序列，我们可以找到一个序列  $\{n_k\}$ ， $k = 1, 2, 3, \dots$  使

$$\|f_{n_k} - f_{n_{k+1}}\| < \frac{1}{2^k} \quad (k = 1, 2, 3, \dots).$$

选一个函数  $g \in \mathcal{L}^2(\mu)$ 。根据 Schwarz 不等式，得

$$\int_X |g(f_{n_k} - f_{n_{k+1}})| d\mu \le \frac{\|g\|}{2^k}.$$

由此得

$$\sum_{k=1}^{\infty} \int_X |g(f_{n_k} - f_{n_{k+1}})| d\mu \le \|g\|. \quad (102)$$

由定理 11.30，在(102)内可以交换求和与积分的次序，从而在  $X$  上几乎处处

$$|g(x)| \sum_{k=1}^{\infty} |f_{n_k}(x) - f_{n_{k+1}}(x)| < +\infty, \quad (103)$$

所以在  $X$  上几乎处处

$$\sum_{k=1}^{\infty} |f_{n_{k+1}}(x) - f_{n_k}(x)| < +\infty. \quad (104)$$

这因为，倘若(104)的级数在一个正测度集  $E$  上发散，我们便可以使  $g(x)$  在  $E$  的一个正测度子集上非零，这就与(103)矛盾了。

由于在  $X$  上几乎处处收敛的级数

$$\sum_{k=1}^{\infty} (f_{n_{k+1}}(x) - f_{n_k}(x))$$

的第  $k$  个部分和是  $f_{n_{k+1}}(x) - f_{n_1}(x)$ ，可见等式

$$f(x) = \lim_{k \to \infty} f_{n_k}(x)$$

能对于几乎一切  $x \in X$  确定函数  $f(x)$ ，而在  $X$  的其余点上  $f(x)$  如何定义就无关紧要了。

现在我们来证明这个函数  $f$  具有所要求的性质。给定了  $\epsilon > 0$ ，再照定义 11.41 所指示的选择  $N$ ，若  $n_k > N$ ，Fatou 定理表明

$$\|f - f_{n_k}\| \le \liminf_{i \to \infty} \|f_{n_i} - f_{n_k}\| \le \epsilon.$$

所以  $f - f_{n_k} \in \mathcal{L}^2(\mu)$ ，又由于  $f = (f - f_{n_k}) + f_{n_k}$ ，知道  $f \in \mathcal{L}^2(\mu)$ 。再由于  $\epsilon$  的任意性，

$$\lim_{k \to \infty} \|f - f_{n_k}\| = 0.$$

最后, 不等式

$$\|f - f_n\| \le \|f - f_{n_k}\| + \|f_{n_k} - f_n\| \quad (105)$$

说明  $\{f_n\}$  在  $\mathcal{L}^2(\mu)$  内收敛于  $f$ ; 这因为如果我们取得  $n$  与  $n_k$  相当大, (105) 右端的两项都可以弄得任意小.

**11.43 Riesz-Fischer 定理** 设  $\{\phi_n\}$  是  $X$  上的正规正交系. 假定  $\sum |c_n|^2$  收敛, 再设  $s_n = c_1\phi_1 + \cdots + c_n\phi_n$ , 必然存在一个函数  $f \in \mathcal{L}^2(\mu)$ , 使  $\{s_n\}$  在  $\mathcal{L}^2(\mu)$  内收敛于  $f$ , 并且

$$f \sim \sum_{n=1}^{\infty} c_n \phi_n.$$

证 当  $n > m$  时,

$$\|s_n - s_m\|^2 = |c_{m+1}|^2 + \cdots + |c_n|^2,$$

所以  $\{s_n\}$  是  $\mathcal{L}^2(\mu)$  内的 Cauchy 序列. 由定理 11.42, 有一个函数  $f \in \mathcal{L}^2(\mu)$  使

$$\lim_{n \to \infty} \|f - s_n\| = 0.$$

但是当  $n > k$  时,

$$\int_X f \bar{\phi}_k d\mu - c_k = \int_X f \bar{\phi}_k d\mu - \int_X s_n \bar{\phi}_k d\mu,$$

所以

$$\left| \int_X f \bar{\phi}_k d\mu - c_k \right| \le \|f - s_n\| \cdot \|\phi_k\| + \|f - s_n\|.$$

令  $n \to \infty$ , 得

$$c_k = \int_X f \bar{\phi}_k d\mu \quad (k = 1, 2, 3, \dots).$$

证完.

**11.44 定义**  $\{\phi_n\}$  是正规正交集,  $f \in \mathcal{L}^2(\mu)$ . 如果由等式

$$\int_X f \bar{\phi}_k d\mu = 0 \quad (n = 1, 2, 3, \dots)$$

能推出  $\|f\| = 0$ , 就说  $\{\phi_n\}$  是完备的.

在定理 11.40 的推论内我们从 Parseval 等式(101) 导出了三角系的完备性. 反之, Parseval 等式对于每个完备正规正交集成立.

**11.45 定理** 设  $\{\phi_n\}$  是完备正规正交系. 如果  $f \in \mathcal{L}^2(\mu)$ , 并且

$$f \sim \sum_{n=1}^{\infty} c_n \phi_n, \quad (106)$$

必然

$$\int_X |f|^2 d\mu = \sum_{n=1}^{\infty} |c_n|^2. \quad (107)$$

证 根据 Bessel 不等式, 知道  $\sum |c_n|^2$  收敛. 令

$$s_n = c_1 \phi_1 + \cdots + c_n \phi_n,$$

Riesz-Fischer 定理表明, 有一个函数  $g \in \mathcal{L}^2(\mu)$  合于

$$g \sim \sum_{n=1}^{\infty} c_n \phi_n, \quad (108)$$

并且  $\|g - s_n\| \to 0$ . 从而  $\|s_n\| \to \|g\|$ , 因为

$$\|s_n\|^2 = |c_1|^2 + \cdots + |c_n|^2,$$

我们得到

$$\int_X |g|^2 d\mu = \sum_{n=1}^{\infty} |c_n|^2. \quad (109)$$

现在 (106), (108) 以及  $\{\phi_n\}$  的完备性可以说明  $\|f - g\| = 0$ , 因此能由 (109) 得出 (107).

把定理 11.34 与 11.45 合并起来, 我们得到一个非常有趣的结论, 这就是每个完备正规正交系能在一切函数  $f \in \mathcal{L}^2(\mu)$  (把几乎处处相等的函数等同起来), 与一切使  $\sum |c_n|^2$  收敛的序列  $\{c_n\}$  之间, 建立一一对应. 表达式

$$f \sim \sum_{n=1}^{\infty} c_n \phi_n,$$

以及 Parseval 等式合在一起表明  $\mathcal{L}^2(\mu)$  可以被看成一个无限维的欧氏空间 (所谓 Hilbert 空间), 在其中点  $f$  的坐标是  $c_n$ , 而函数  $\phi_n$  是坐标向量.

### 习题

1. 若  $f \ge 0$  且  $\int_E f d\mu = 0$ , 求证在  $E$  上几乎处处  $f(x) = 0$ . 提示: 令  $E_n$  是  $E$  的子集, 在它上面  $f(x) > \frac{1}{n}$ . 认为  $A = \bigcup E_n$ , 那么  $\mu(A) = 0$  当且仅当对每个  $n$ ,  $\mu(E_n) = 0$ .
2. 如果对于可测集  $E$  的每个可测子集  $A$ ,  $\int_A f d\mu = 0$ , 那么在  $E$  上几乎处处  $f(x) = 0$ .
3. 若  $\{f_n\}$  是一列可测函数, 求证  $\{f_n(x)\}$  的收敛点集是可测的.
4. 若在  $E$  上  $f \in \mathcal{L}(\mu)$ , 又  $g$  在  $E$  上有界可测, 那么在  $E$  上  $fg \in \mathcal{L}(\mu)$ .
5. 置

$$g(x) = \begin{cases} 0 & (0 \le x \le \frac{1}{2}), \\ 1 & (\frac{1}{2} < x \le 1), \end{cases}$$

$$f_{2k}(x) = g(x) \quad (0 \le x \le 1),$$

$$f_{2k+1}(x) = g(1-x) \quad (0 \le x \le 1).$$

求证

$$\liminf_{n \to \infty} f_n(x) = 0 \quad (0 \le x \le 1),$$

但是

$$\int_0^1 f_n(x) dx = \frac{1}{2}.$$

[与(77)对比.]

6. 设

$$f_n(x) = \begin{cases} \frac{1}{n} & (|x| \le n), \\ 0 & (|x| > n). \end{cases}$$

必然  $f_n(x) \to 0$  在  $R^1$  上一致成立, 但是

$$\int_{-\infty}^{\infty} f_n dx = 2 \quad (n = 1, 2, 3, \dots)$$

(用  $\int_{-\infty}^{\infty}$  代替了  $\int_{R^1}$ .) 可见一致收敛并不包含定理 11.32 意义下的控制收敛. 然而, 在有限测度的集上, 有界函数的一致收敛序列确实满足定理 11.32.

7. 找出在  $[a, b]$  上  $f \in \mathcal{R}(a)$  的一个充分必要条件. 提示: 考虑例 11.6(b) 和定理 11.33.

8. 若在  $[a, b]$  上  $f \in \mathcal{R}$ , 又若  $F(x) = \int_a^x f(t) dt$ ; 求证  $F'(x) = f(x)$  在  $[a, b]$  上几乎处处成立.

9. 求证(96)里给出的函数  $F$  在  $[a, b]$  上连续.

10. 若  $\mu(X) < +\infty$ , 并且在  $X$  上  $f \in \mathcal{L}^2(\mu)$ , 求证在  $X$  上  $f \in \mathcal{L}(\mu)$ . 若  $\mu(X) = +\infty$ , 此事不成立. 例如,

$$f(x) = \frac{1}{1+|x|}$$

时, 在  $R^1$  上  $f \in \mathcal{L}^2$ , 但在  $R^1$  上  $f \notin \mathcal{L}$ .

11. 若在  $X$  上  $f, g \in \mathcal{L}(\mu)$ , 定义  $f$  与  $g$  间的距离为

$$\int_X |f - g| d\mu,$$

求证  $\mathcal{L}(\mu)$  是完备度量空间.

12. 假定

(a) 当  $0 \le x \le 1$ ,  $0 \le y \le 1$  时,  $|f(x, y)| \le 1$ ,

(b) 当  $x$  固定时,  $f(x, y)$  是  $y$  的连续函数,

(c) 当  $y$  固定时,  $f(x, y)$  是  $x$  的连续函数.

置

$$g(x) = \int_{0}^{1} f(x, y) dy \quad (0 \le x \le 1),$$

$g$  是连续的吗?

13. 认为函数

$$f_n(x) = \sin nx \quad (n = 1, 2, 3, \dots, -\pi \le x \le \pi)$$

是  $\mathcal{L}^2$  里的点. 证明这个点集是闭的有界集, 但不是紧集.

14. 证明复值函数  $f$  可测, 当且仅当对于平面上的每个开集  $V$ ,  $f^{-1}(V)$  可测.

15. 设  $\mathcal{R}$  是  $(0, 1]$  的一切初等子集构成的环, 如果  $0 < a \le b \le 1$ , 定义

$$\begin{aligned} \phi([a, b]) &= \phi([a, b)) = \phi((a, b]) \\ &= \phi((a, b)) = b - a, \end{aligned}$$

但如果  $0 < b \le 1$ , 便定义

$$\phi((0, b)) = \phi((0, b]) = 1 + b.$$

证明  $\phi$  是  $\mathcal{R}$  上的一个可加集函数, 它不是正规的, 并且不能延拓为  $\sigma$ -环上的可数可加集函数.

16. 假定  $\{n_k\}$  是正整数的增序列, 并且  $E$  是  $(-\pi, \pi)$  内一切使  $\{\sin n_k x\}$  收敛的点  $x$  的集. 求证  $m(E) = 0$ .

提示: 对于每个  $A \subset E$ , 当  $k \to \infty$  时

$$\int_A \sin n_k x \, dx \to 0,$$

并且

$$2 \int_A (\sin n_k x)^2 \, dx = \int_A (1 - \cos 2n_k x) \, dx \to m(A).$$

17. 假定  $E \subset (-\pi, \pi)$ ,  $m(E) > 0$ ,  $\delta > 0$ . 应用 Bessel 不等式证明至多有有限个整数  $n$  能使  $\sin nx \ge \delta$  对一切  $x \in E$  成立.

18. 假定  $f \in \mathcal{L}^2(\mu)$ ,  $g \in \mathcal{L}^2(\mu)$ . 求证

$$\left| \int f \bar{g} \, d\mu \right|^2 = \int |f|^2 \, d\mu \int |g|^2 \, d\mu$$

当且仅当有一个常数  $c$  使  $g(x) = cf(x)$  几乎处处成立. (与定理 10.35 对比.)

## 参考书目

- ARTIN, E. *The Gamma Function*. New York: Holt, Rinehart and Winston, Inc., 1964
- BOAS, R. P. *A Primer of Real Functions*. Carus Mathematical Monograph No. 13. New York: John Wiley & Sons, Inc., 1960
- BUCK, R. C. (ed.) *Studies in Modern Analysis*. Prentice-Hall, Inc., Englewood Cliffs, N. J., 1962
- : *Advanced Calculus, 2d ed*. New York: McGraw-Hill Book Company, 1965
- BURKILL, J. C. *The Lebesgue Integral*. New York: Cambridge University Press, 1951
- DIEUDONNÉ, J. *Foundations of Modern Analysis*. New York: Academic Press, Inc., 1960
- FLEMING, W. H. *Functions of Several Variables*. Addison-Wesley Publishing Company, Inc., Reading, Mass., 1965
- GRAVES, L. M. *The Theory of Functions of Real Variables, 2d ed*. New York: McGraw-Hill Book Company, 1956
- HALMOS, P. R. *Measure Theory*. D. Van Nostrand Company, Inc., Princeton, N. J., 1950
- *Finite-dimensional Vector Spaces, 2d ed*. D. Van Nostrand Company, Inc., Princeton, N. J., 1958
- HARDY, G. H. *Pure Mathematics, 9th ed*. New York: Cambridge University Press, 1947
- and ROGOSINSKI, W. *Fourier Series, 2d ed*. New York: Cambridge University Press, 1950
- HERSTEIN, I. N. *Topics in Algebra*. New York: Blaisdell Publishing Company, 1964
- HEWITT, E., and STROMBERG, K. *Real and Abstract Analysis*. New York: Springer Publishing Co., Inc., 1965
- KELLOGG, O. D. *Foundations of Potential Theory*. New York: Frederick Ungar Publishing Co., 1940
- KNOPP, K. *Theory and Application of Infinite Series*. Glasgow: Blackie & Son, Ltd., 1928
- LANDAU, E. G. H. *Foundations of Analysis*. New York: Chelsea Publishing Company, 1951
- MCSHANE, E. J. *Integration*. Princeton University Press, Princeton, N. J., 1944
- NIVEN, I. M. *Irrational Numbers*, Carus Mathematical Monograph No. 11. New York: John Wiley & Sons, Inc., 1956
- ROYDEN, H. L. *Real Analysis*. New York: The Macmillan Company, 1963
- RUDIN, W. *Real and Complex Analysis, 2d ed*. New York: McGraw-Hill Book Company, 1974
- SIMMONS, G. F. *Topology and Modern Analysis*. New York: McGraw-Hill Book Company, 1963
- SINGER, I. M., and THORPE, J. A. *Lecture Notes on Elementary Topology and*

- 
- Geometry. Scott, Foresman and Company, Glenview, Ill., 1967
- SMITH, K. T. *Primer of Modern Analysis*. Bogden and Quigley, Tarrytown-on-Hudson, N. Y., 1971
- SPIVAK, M. *Calculus on Manifolds*. New York: W. A. Benjamin, Inc., 1965
- THURSTON, H. A. *The Number System*. London-Glasgow: Blackie & Son, Ltd., 1956
