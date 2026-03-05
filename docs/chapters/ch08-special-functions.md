# 第 8 章 一些特殊函数

## 幂级数

在这一节里我们将导出幂级数所表示的函数的一些性质，幂级数表示的函数即是形如

$$f(x) = \sum_{n=0}^{\infty} c_n x^n \quad (1)$$

或者更一般地形如

$$f(x) = \sum_{n=0}^{\infty} c_n (x-a)^n. \quad (2)$$

的函数.

这些都称作解析函数.

我们限制  $x$  取实值，因此不会遇到收敛圆（见定理 3.39）而是要面向收敛区间.

若是有个  $R > 0$  ( $R$  可以是  $+\infty$ )，(1) 对于  $(-R, R)$  中的一切  $x$  收敛，我们就说围绕着点  $x=0$  把  $f$  展成了幂级数. 类似地，若(2)对于  $|x-a| < R$  收敛，便说围绕着点  $x=a$  把  $f$  展成了幂级数. 为方便起见，我们时常取  $a=0$ ，这无损于一般性.

**8.1 定理** 假设对于  $|x| < R$ ，级数

$$\sum_{n=0}^{\infty} c_n x^n \quad (3)$$

收敛，并且规定

$$f(x) = \sum_{n=0}^{\infty} c_n x^n \quad (|x| < R). \quad (4)$$

那么，无论选取怎样的  $\varepsilon > 0$ ，(3) 在  $[-R+\varepsilon, R-\varepsilon]$  上一致收敛，函数  $f$  在  $(-R, R)$  内连续、可微，并且

$$f'(x) = \sum_{n=1}^{\infty} n c_n x^{n-1} \quad (|x| < R). \quad (5)$$

**证** 给出了  $\varepsilon > 0$ . 当  $|x| < R-\varepsilon$  时，我们有

$$|c_n x^n| \le |c_n (R-\varepsilon)^n|;$$

由于

$$\Sigma c_n (R-\varepsilon)^n$$

绝对收敛(由根值判敛法知道, 任何幂级数在它的收敛区间内部绝对收敛). 定理 7.10 说明级数(3)在 $[-R+\varepsilon, R-\varepsilon]$ 上一致收敛.

由于  $n \to \infty$  时,  $\sqrt[n]{n} \to 1$ , 我们有

$$\limsup_{n \to \infty} \sqrt[n]{|c_n|} = \limsup_{n \to \infty} \sqrt[n]{|c_n|},$$

所以(4)、(5)两级数有相同的收敛区间.

因为(5)是幂级数, 对于任意的  $\varepsilon > 0$ , 它在 $[-R+\varepsilon, R-\varepsilon]$ 上一致收敛, 我们就可以应用定理 7.17(将序列代之以级数), 推出(5)式在  $|x| \le R-\varepsilon$  时成立.

但是, 任意给定一个  $x$ , 只要  $|x| < R$ , 我们总可以找到一个  $\varepsilon > 0$ , 使得  $|x| < R-\varepsilon$ . 这就说明(5)式对  $|x| < R$  成立.

$f$  的连续性可以从  $f'$  的存在性推出来(定理 5.2).

推论 在定理 8.1 的假设下,  $f$  在 $(-R, R)$ 内有一切阶导数. 它们是

$$f^{(k)}(x) = \sum_{n=k}^{\infty} n(n-1)\cdots(n-k+1)c_n x^{n-k}. \quad (6)$$

特别地,

$$f^{(k)}(0) = k!c_k \quad (k = 0, 1, 2, \dots). \quad (7)$$

(这里  $f^{(0)}$  即是  $f$ ,  $f^{(k)}$  是  $f$  的  $k$  阶导数,  $k=1, 2, 3, \dots$ ).

证 依次对  $f, f', f'', \dots$  使用定理 8.1 就可以得到等式(6). 在(6)中令  $x=0$ , 就得到(7)式.

公式(7)非常有趣, 它一方面说明  $f$  的幂级数展开式的系数, 由  $f$  及其导数在一个点的值来确定; 另一方面说明, 如果这些系数给定了, 那么  $f$  在收敛区间中心的各阶导数值就可以从幂级数立即说出来.

然而要注意, 即使函数  $f$  有一切阶导数, 按(7)式计算  $c_n$  而得的级数  $\sum c_n x^n$  也不一定能在任何点  $x \neq 0$  收敛于  $f(x)$ . 这时  $f$  不能围绕着  $x=0$  展成幂级数. 因为当真是  $f(x) = \sum a_n x^n$ , 就应该

$$n!a_n = f^{(n)}(0);$$

从而  $a_n = c_n$ . 习题 1 有一个这样的例子.

如果级数(3)在一个端点, 比如说在  $x=R$  收敛, 那么  $f$  不仅在 $(-R, R)$ 内连续, 而且也在  $x=R$  连续. 这是 Abel 定理(为了记号的简便, 取  $R=1$ )的直接结果:

**8.2 定理** 假设  $\sum c_n$  收敛, 令

$$f(x) = \sum_{n=0}^{\infty} c_n x^n \quad (-1 < x < 1).$$

那么

$$\lim_{x \to 1} f(x) = \sum_{n=0}^{\infty} c_n. \quad (8)$$

证 令  $s_n = c_0 + \cdots + c_n$ ,  $s_{-1} = 0$ . 那么

$$\sum_{n=0}^{m} c_n x^n = \sum_{n=0}^{m} (s_n - s_{n-1}) x^n = (1-x) \sum_{n=0}^{m-1} s_n x^n + s_m x^m.$$

因为  $|x| < 1$ , 我们让  $m \to \infty$ , 便得到

$$f(x) = (1-x) \sum_{n=0}^{\infty} s_n x^n. \quad (9)$$

设  $s = \lim_{n \to \infty} s_n$ , 给定了  $\epsilon > 0$ , 选一个  $N$ , 使得当  $n > N$  时有

$$|s - s_n| < \frac{\epsilon}{2}.$$

那么, 由于

$$(1-x) \sum_{n=0}^{\infty} x^n = 1 \quad (|x| < 1),$$

加之以适当地选择  $\delta > 0$ , 使  $x > 1 - \delta$ , 便可以从(9)得到

$$\begin{aligned} |f(x) - s| &= \left| (1-x) \sum_{n=0}^{\infty} (s_n - s) x^n \right| \\ &\le (1-x) \sum_{n=0}^{N} |s_n - s| |x|^n + \frac{\epsilon}{2} \le \epsilon \end{aligned}$$

这就意味着(8)式成立.

作为应用, 我们来证明定理 3.51, 那里说: 若  $\Sigma a_n$ ,  $\Sigma b_n$ ,  $\Sigma c_n$  收敛于  $A$ ,  $B$ ,  $C$ , 而且  $c_n = a_0 b_n + \cdots + a_n b_0$ , 那么  $C = AB$ . 对于  $0 \le x \le 1$ , 令

$$f(x) = \sum_{n=0}^{\infty} a_n x^n, \quad g(x) = \sum_{n=0}^{\infty} b_n x^n,$$

$$h(x) = \sum_{n=0}^{\infty} c_n x^n,$$

在  $x < 1$  时, 这些级数绝对收敛. 因此可以按照定义 3.48 做乘法; 经过相乘, 我们便看到

$$f(x) \cdot g(x) = h(x) \quad (0 \le x \le 1). \quad (10)$$

由定理 8.2 知道  $x \to 1$  时,

$$f(x) \to A, \quad g(x) \to B, \quad h(x) \to C \quad (11)$$

等式(10)和(11)意味着  $AB=C$ .

我们现在需要一个关于调换求和次序的定理(参阅习题 2, 3).

**8.3 定理** 设有二重序列  $\{a_{ij}\}$ ,  $i=1, 2, 3, \dots$ ,  $j=1, 2, 3, \dots$ . 假设

$$\sum_{j=1}^{\infty} |a_{ij}| = b_i \quad (i = 1, 2, 3, \dots) \quad (12)$$

并且  $\sum b_i$  收敛, 那么

$$\sum_{i=1}^{\infty} \sum_{j=1}^{\infty} a_{ij} = \sum_{j=1}^{\infty} \sum_{i=1}^{\infty} a_{ij}. \quad (13)$$

证 可以仿照定理 3.55 用过的(可是要比那里复杂得多的)方法直接建立 (13). 然而下面的方法似乎更有趣些.

令  $E$  是由点  $x_0, x_1, x_2, \dots$  组成的可数集, 再设  $n \to \infty$  时  $x_n \to x_0$ . 定义

$$f_i(x_0) = \sum_{j=1}^{\infty} a_{ij} \quad (i = 1, 2, 3, \dots), \quad (14)$$

$$f_i(x_n) = \sum_{j=1}^{n} a_{ij} \quad (i, n = 1, 2, 3, \dots), \quad (15)$$

$$g(x) = \sum_{i=1}^{\infty} f_i(x) \quad (x \in E). \quad (16)$$

(14), (15)连同(12), 说明每个  $f_i$  在  $x_0$  连续. 又因为  $x \in E$  时  $|f_i(x)| \le b_i$ , (16)一致收敛, 所以  $g$  在  $x_0$  连续(定理 7.11). 从而

$$\begin{aligned} \sum_{i=1}^{\infty} \sum_{j=1}^{\infty} a_{ij} &= \sum_{i=1}^{\infty} f_i(x_0) = g(x_0) = \lim_{n \to \infty} g(x_n) \\ &= \lim_{n \to \infty} \sum_{i=1}^{\infty} f_i(x_n) = \lim_{n \to \infty} \sum_{i=1}^{\infty} \sum_{j=1}^{n} a_{ij} \\ &= \lim_{n \to \infty} \sum_{j=1}^{n} \sum_{i=1}^{\infty} a_{ij} = \sum_{j=1}^{\infty} \sum_{i=1}^{\infty} a_{ij}. \end{aligned}$$

**8.4 定理** 设

$$f(x) = \sum_{n=0}^{\infty} c_n x^n,$$

这级数在  $|x| < R$  内收敛. 若  $-R < a < R$ ,  $f$  便可以在  $x=a$  附近展成幂级数, 这幂级数在  $|x-a| < R-|a|$  中收敛, 并且

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!} (x-a)^n \quad (|x-a| < R-|a|). \quad (17)$$

这是定理 5.15 的推广，也是有名的 Taylor 定理.

证 形式上

$$\begin{aligned} f(x) &= \sum_{n=0}^{\infty} c_n [(x-a) + a]^n \\ &= \sum_{n=0}^{\infty} c_n \sum_{m=0}^{n} \binom{n}{m} a^{n-m} (x-a)^m \\ &= \sum_{m=0}^{\infty} \left[ \sum_{n=m}^{\infty} \binom{n}{m} c_n a^{n-m} \right] (x-a)^m. \end{aligned}$$

这就是所希望的在  $x=a$  附近的展开式. 为了证明它正确，我们必须证明求和次序的变更是正当的. 定理 8.3 说明，如果

$$\sum_{n=0}^{\infty} \sum_{m=0}^{n} \left| c_n \binom{n}{m} a^{n-m} (x-a)^m \right| \quad (18)$$

收敛，就允许变更次序. 然而(18)无异于

$$\sum_{n=0}^{\infty} |c_n| \cdot (|x-a| + |a|)^n, \quad (19)$$

而(19)在  $|x-a| + |a| < R$  时收敛.

最后，(17)中系数的形式，是(7)式的直接结果.

应当注意，(17)式实际上可以在比  $|x-a| < R - |a|$  更大的区间上收敛.

如果在  $(-R, R)$  中，两个幂级数收敛于同一函数，(7)式表明两个级数必须完全相同，即是必须有相同的系数. 有趣的是，也可以由弱得多的假设得出这个结论：

**8.5 定理** 设级数  $\sum a_n x^n$  和  $\sum b_n x^n$  在开区间  $S=(-R, R)$  中收敛.  $S$  里有些  $x$  使得

$$\sum_{n=0}^{\infty} a_n x^n = \sum_{n=0}^{\infty} b_n x^n. \quad (20)$$

设一切这样  $x$  构成的集是  $E$ . 若  $E$  有极限点属于  $S$ , 则  $a_n = b_n$ ,  $n=0, 1, 2, \dots$ . 因之(20)对于一切  $x \in S$  成立.

证 令  $c_n = a_n - b_n$ , 再令

$$f(x) = \sum_{n=0}^{\infty} c_n x^n \quad (x \in S). \quad (21)$$

那么，在  $E$  上  $f(x)=0$ .

设  $A$  是一切属于  $S$  的  $E$  的极限点的集，令  $B$  由  $S$  的其他一切点组成. 由“极限点”的定义来看  $B$  显然是开集. 假使我们能证明  $A$  是开集，那么  $A$ 、 $B$  便是不

相交的开集，所以他们是分离的(定义 2.45). 既然  $S=A\cup B$ ,  $S$  又是连通的，那么必有  $A$ 、 $B$  之一是空集. 已经假设  $A$  不空，所以  $B$  必须是空集，因而  $A=S$ . 由于  $f$  在  $S$  中连续，而  $A\subseteq E$ ; 于是  $E=S$ (这时  $f$  在  $S$  内恒等于零). 而(7)足以说明  $c_n=0$ ,  $n=1, 2, \dots$ , 这就是所要的结论.

这样，我们必须证明  $A$  是开集. 假若  $x_0\in A$ , 定理 8.4 说明

$$f(x) = \sum_{n=0}^{\infty} d_n (x - x_0)^n \quad (|x - x_0| < R - |x_0|). \quad (22)$$

我们断言一切  $d_n=0$ . 不然的话，假设  $k$  是合于  $d_k\neq 0$  的最小非负整数. 于是

$$f(x) = (x - x_0)^k g(x) \quad (|x - x_0| < R - |x_0|), \quad (23)$$

这里

$$g(x) = \sum_{m=0}^{\infty} d_{k+m} (x - x_0)^m. \quad (24)$$

因为  $g$  在  $x_0$  连续，而且

$$g(x_0) = d_k \neq 0,$$

所以存在着一个  $\delta>0$ , 使得  $|x - x_0| < \delta$  时  $g(x)\neq 0$ . 于是从(23)推得  $0 < |x - x_0| < \delta$  时,  $f(x)\neq 0$ . 但是这与  $x_0$  是  $E$  的极限点矛盾.

于是对于一切  $n$ ,  $d_n=0$ . 因此凡使(22)成立的  $x$ , 即是在  $x_0$  的一个邻域中, 必然使  $f(x)=0$ . 这说明  $A$  是开集. 证毕.

## 指数函数与对数函数

定义

$$E(z) = \sum_{n=0}^{\infty} \frac{z^n}{n!} \quad (25)$$

比值审敛法说明这级数对于一切复数  $z$  收敛. 把定理 3.50 用于两个绝对收敛级数的相乘，得到

$$\begin{aligned} E(z)E(w) &= \sum_{n=0}^{\infty} \frac{z^n}{n!} \sum_{m=0}^{\infty} \frac{w^m}{m!} = \sum_{n=0}^{\infty} \sum_{k=0}^{n} \frac{z^k w^{n-k}}{k! (n-k)!} \\ &= \sum_{n=0}^{\infty} \frac{1}{n!} \sum_{k=0}^{n} \binom{n}{k} z^k w^{n-k} = \sum_{n=0}^{\infty} \frac{(z+w)^n}{n!}, \end{aligned}$$

这就产生了重要的加法公式

$$E(z+w) = E(z)E(w) \quad (z, w \text{ 复数}). \quad (26)$$

有一个推论是

$$E(z)E(-z) = E(z-z) = E(0) = 1 \quad (z \text{ 复数}). \quad (27)$$

这说明对于一切  $z$ ,  $E(z) \neq 0$ . 由(25)知道  $x > 0$  时,  $E(x) > 0$ ; 因此(27)说明对于一切实的  $x$ ,  $E(x) > 0$ . 由(25)知道  $x \to +\infty$  时,  $E(x) \to +\infty$ ; 因此(27)说明沿实轴  $x \to -\infty$  时  $E(x) \to 0$ . 由(25)知道  $0 < x < y$  时  $E(x) < E(y)$ ; 从(27)可以导出  $E(-y) < E(-x)$ ; 因而  $E$  在整个数轴上严格递增.

加法公式还说明,

$$\lim_{h \to 0} \frac{E(z+h) - E(z)}{h} = E(z) \lim_{h \to 0} \frac{E(h) - 1}{h} = E(z); \quad (28)$$

最后的等式是(25)的直接结果.

把(26)重复几次就得到

$$E(z_1 + \dots + z_n) = E(z_1) \cdots E(z_n). \quad (29)$$

取  $z_1 = \dots = z_n = 1$ , 又因为  $E(1) = e$ , 这里  $e$  是定义 3.30 中规定的数, 我们得到

$$E(n) = e^n \quad (n = 1, 2, 3, \dots). \quad (30)$$

若是  $p = \frac{n}{m}$ ,  $n$ 、 $m$  都是正整数. 那么

$$[E(p)]^m = E(mp) = E(n) = e^n, \quad (31)$$

所以

$$E(p) = e^p \quad (p > 0, p \text{ 为有理数}). \quad (32)$$

假若  $p$  是正有理数, 从(27)可以推出  $E(-p) = e^{-p}$ . 于是(32)对于一切有理数  $p$  成立.

第 1 章习题 6 中, 我们曾经对于任意实数  $x$  和  $x > 1$  定义

$$x^y = \sup x^p, \quad (33)$$

这里  $\sup$  是对一切满足  $p < y$  的有理数  $p$  取的. 如果对于任何实数  $x$  照样地定义

$$e^x = \sup e^p \quad (p < x, p \text{ 为有理数}), \quad (34)$$

那么  $E$  的连续性、单调性连同(32)可以说明对于一切实数  $x$

$$E(x) = e^x \quad (35)$$

等式(35)解释了为什么称  $E$  为指数函数.

时常用记号  $\exp(x)$  代替  $e^x$ , 尤其当  $x$  是一个复杂的式子时是这样.

实际上用(35)代替(34)作为  $e^x$  的定义就很好. 用(35)作起点来研究  $e^x$  的性质要方便得多. 不久将会看到, (33)也可以用一个更方便的定义代替[见(43)].

我们现在恢复惯用的记号  $e^x$ , 来代替  $E(x)$ , 并且汇总一下至此已经证明了的结果.

**8.6 定理** 设在  $R^1$  上按(35)及(25)定义了  $e^x$ , 那么

- (a) 对于一切  $x$ ,  $e^x$  连续且可微;
- (b)  $(e^x)' = e^x$ ;
- (c)  $e^x$  是  $x$  的严格递增函数, 而且  $e^x > 0$ ;
- (d)  $e^{x+y} = e^x e^y$ ;
- (e) 当  $x \to +\infty$  时,  $e^x \to +\infty$ , 当  $x \to -\infty$  时,  $e^x \to 0$ ;
- (f) 对于任何  $n$ ,  $\lim_{x \to +\infty} x^n e^{-x} = 0$ .

我们已经证明了(a)到(e)各条; (25)式表明  $x > 0$  时

$$e^x > \frac{x^{n+1}}{(n+1)!}$$

因此

$$x^n e^{-x} < \frac{(n+1)!}{x},$$

于是(f)被证明了. (f)说明当  $x \to +\infty$  时,  $e^x$  趋于  $+\infty$  比  $x$  的任何次幂都“快”.

由于  $E$  在  $R^1$  上严格递增而且可微, 它便有反函数  $L$ .  $L$  也严格递增而且可微; 并且定义域是  $E(R^1)$ , 即全体正数集.  $L$  由等式

$$E(L(y)) = y \quad (y > 0), \quad (36)$$

定义, 或者等价地, 由

$$L(E(x)) = x \quad (x \text{ 实数}). \quad (37)$$

定义, 将(37)微分, 便得到(对照定理 5.5)

$$L'(E(x)) \cdot E(x) = 1.$$

令  $y = E(x)$ , 便得到

$$L'(y) = \frac{1}{y} \quad (y > 0). \quad (38)$$

在(37)中取  $x=0$ , 便看到  $L(1)=0$ , 因此(38)意味着

$$L(y) = \int_1^y \frac{dx}{x}. \quad (39)$$

常常把(39)作为对数和指数函数理论的起点. 令  $u=E(x)$ ,  $v=E(y)$ , (26)能告

诉我们

$$L(uv) = L(E(x) \cdot E(y)) = L(E(x+y)) = x+y,$$

因而

$$L(uv) = L(u) + L(v) \quad (u > 0, v > 0). \quad (40)$$

这表明,  $L$  有我们熟知的使对数成为有效的计算工具的那种性质. 自然, 在习惯上  $L(x)$  的记号是  $\log x$ .

至于在  $x \to +\infty$  和  $x \to 0$  时  $\log x$  的性态, 定理 8.6(e) 表明

$$\text{当 } x \to +\infty \text{ 时 } \log x \to +\infty,$$

$$\text{当 } x \to 0 \text{ 时 } \log x \to -\infty.$$

容易看出, 若  $x > 0$ ,  $n$  为整数时,

$$x^n = E(nL(x)) \quad (41)$$

$m$  若是正整数, 同样会得到

$$x^{\frac{1}{m}} = E\left(\frac{1}{m}L(x)\right), \quad (42)$$

原因是(42)的每项自乘  $m$  次. 就得出(37)的相应各项. 联合(41)与(42), 就知道对于任意有理数  $a$ ,

$$x^a = E(aL(x)) = e^{a\log x} \quad (43)$$

现在, 我们就用(43)来对于任意实数  $a$  和任意  $x > 0$  定义  $x^a$ .  $E$  和  $L$  的连续性和单调性说明这样的定义与原先的定义产生的结果相同. 第1章习题6叙述的事实是(43)的简单推论.

将(43)微分, 由定理 5.5, 我们得到

$$(x^a)' = E(aL(x)) \cdot \frac{a}{x} = ax^{a-1}. \quad (44)$$

注意, 以前我们只能对于整数  $a$  使用(44)式, 那时候很轻易地就从定理 5.3(b) 推得了(44)式. 如果  $a$  为无理数, 而  $x^a$  用(33)式来定义, 要直接从导数的定义来证明(44)是十分麻烦的.

熟知的关于  $x^a$  的积分公式, 在  $a \neq -1$  时, 可以从(44)直接推出来, 而当  $a = -1$  时, 便由(38)推导. 我们打算证明  $\log x$  的另一个性质, 即是对于任一  $a > 0$ ,

$$\lim_{x \to +\infty} x^{-a} \log x = 0 \quad (45)$$

就是说, 当  $x \to +\infty$  时,  $\log x \to +\infty$  比  $x$  的任何正数次幂都“慢”.

因为, 若是  $0 < \epsilon < a$ ,  $x > 1$ , 那么

$$\begin{aligned} x^{-\alpha} \log x &= x^{-\alpha} \int_{1}^{x} t^{-1} dt < x^{-\alpha} \int_{1}^{x} t^{\alpha-1} dt \\ &= x^{-\alpha} \cdot \frac{x^{\alpha} - 1}{\epsilon} < \frac{x^{\alpha}}{\epsilon}, \end{aligned}$$

于是(45)成立. 我们也可以利用定理 8.6(f) 推导出(45)式来.

## 三角函数

定义

$$\begin{aligned} C(x) &= \frac{1}{2} [E(ix) + E(-ix)], \\ S(x) &= \frac{1}{2i} [E(ix) - E(-ix)]. \end{aligned} \quad (46)$$

我们就要证明  $C(x)$  和  $S(x)$  与通常根据几何考虑来定义的  $\cos x$  和  $\sin x$  一致. 由 (25)式知道  $E(\bar{z}) = \overline{E(z)}$ . 因此(46)式表明  $C(x)$ 、 $S(x)$  对于实数  $x$  是实数. 又

$$E(ix) = C(x) + iS(x). \quad (47)$$

所以, 当  $x$  是实数时,  $C(x)$  与  $S(x)$  分别是  $E(ix)$  的实部和虚部. 由(27)知道

$$|E(ix)|^2 = E(ix) \overline{E(ix)} = E(ix) E(-ix) = 1,$$

所以

$$|E(ix)| = 1 \quad (x \text{ 为实数}). \quad (48)$$

从(46)式可以断定  $C(0)=1$ ,  $S(0)=0$ , 并且(28)式说明

$$C'(x) = -S(x), \quad S'(x) = C(x). \quad (49)$$

我们可以断言存在着正数  $x$  使  $C(x)=0$ . 因为假若不然, 由  $C(0)=1$ , 便对于一切  $x>0$  必然  $C(x)>0$ , 因而由(49)必然  $S'(x)>0$ , 那么  $S$  就严格递增; 又因为  $S(0)=0$ , 那么当  $x>0$  时  $S(x)>0$ . 所以若是  $0 < x < y$ , 便将要有

$$S(x)(y-x) < \int_{x}^{y} S(t) dt = C(x) - C(y) \le 2. \quad (50)$$

其中最末一个不等式是从(48)式与(47)式推来的. 因为  $S(x)>0$ , 所以(50)式不能对很大的  $y$  成立, 从而出现了矛盾.

令  $x_0$  是使  $C(x_0)=0$  的最小正数. 这是存在的, 因为连续函数的零点集是闭集而且  $C(0) \ne 0$ . 定义数  $\pi$  如下:

$$\pi = 2x_0. \quad (51)$$

那么  $C\left(\frac{\pi}{2}\right) = 0$ , 于是(48)式说明  $S\left(\frac{\pi}{2}\right) = \pm 1$ . 既然在  $\left(0, \frac{\pi}{2}\right)$  内,

$C(x) > 0$ ,  $S$  便在  $(0, \frac{\pi}{2})$  内递增; 因而  $S(\frac{\pi}{2}) = 1$ . 于是

$$E\left(\frac{\pi i}{2}\right) = i,$$

再由加法公式得出

$$E(\pi i) = -1, \quad E(2\pi i) = 1; \quad (52)$$

因此

$$E(z + 2\pi i) = E(z) \quad (z \text{ 复数}). \quad (53)$$

**8.7 定理**

(a)  $E$  是以  $2\pi i$  为周期的周期函数.

(b)  $C$  和  $S$  是以  $2\pi$  为周期的周期函数.

(c) 若  $0 < t < 2\pi$ , 那么  $E(it) \neq 1$ .

(d) 如果  $z$  是复数且  $|z| = 1$ , 那么在  $[0, 2\pi]$  中存在着惟一的  $t$ , 使  $E(it) = z$ .

证 由 (53), (a) 成立; (b) 可从 (a) 及 (46) 推得.

设  $0 < t < \frac{\pi}{2}$ , 并设  $E(it) = x + iy$ ,  $x$  与  $y$  是实数. 我们以前的工作说明  $0 < x < 1, 0 < y < 1$ . 注意

$$E(4it) = (x + iy)^4 = x^4 - 6x^2y^2 + y^4 + 4ixy(x^2 - y^2).$$

如果  $E(4it)$  是实数, 那么  $x^2 - y^2 = 0$ ; 因为从 (48) 式知道  $x^2 + y^2 = 1$ , 于是  $x^2 = y^2 = \frac{1}{2}$ , 因而  $E(4it) = -1$ . 这就证明了 (c).

如果  $0 \le t_1 < t_2 < 2\pi$ , 那么由 (c) 知道

$$E(it_2)[E(it_1)]^{-1} = E(it_2 - it_1) \neq 1,$$

这就确定了 (d) 中的惟一性的论断.

要证明 (d) 中的存在性的论断, 取定  $z$ ,  $|z| = 1$ . 设  $z = x + iy$ ,  $x, y$  都是实数. 先假定  $x \ge 0$  而且  $y \ge 0$ . 在  $[0, \frac{\pi}{2}]$  上  $C$  由 1 降到 0. 所以有某个  $t \in [0, \frac{\pi}{2}]$  使得  $C(t) = x$ . 既然  $C^2 + S^2 = 1$ , 而且在  $[0, \frac{\pi}{2}]$  上  $S \ge 0$ , 所以  $z = E(it)$ .

如果  $x < 0, y \ge 0$ , 前边的各条件能被  $-iz$  满足. 于是在某个  $t \in [0, \frac{\pi}{2}]$  使得  $-iz = E(it)$ , 又因为  $i = E(\pi i/2)$ , 那么又得到  $z = E\left(i(t + \frac{\pi}{2})\right)$ . 最后, 如果  $y < 0$ , 前两种情形表示有某个  $t \in (0, \pi)$  使得  $-z = E(it)$ . 所以  $z = -E(it) = E(i(t + \pi))$ .

这就证明了 (d), 从而也证明了本定理.

从(d)和(48)式可以知道, 用

$$\gamma(t) = E(it) \quad (0 \le t \le 2\pi) \quad (54)$$

定义的曲线  $\gamma$  是简单闭合曲线. 它的值域是平面上的单位圆. 由于  $\gamma'(t) = iE(it)$ , 根据定理 6.35,  $\gamma$  的长度是

$$\int_{0}^{2\pi} |\gamma'(t)| dt = 2\pi,$$

这自然是对于半径为 1 的圆周所期待的结果; 它也表明(51)所定义的  $\pi$  具有通常的几何意义.

用同样的方法, 我们看到当  $t$  自 0 增至  $t_0$  时, 点  $\gamma(t)$  描出一段长度为  $t_0$  的圆弧. 考虑顶点为

$$z_1 = 0, z_2 = \gamma(t_0), z_3 = C(t_0)$$

的三角形, 它说明  $C(t)$  与  $S(t)$  和按通常办法作为直角三角形边长之比来定义的  $\cos x$  与  $\sin x$  确实等价.

应该强调说一下的是: 我们从(46)式和(25)式导出了三角函数的基本性质, 而丝毫未曾借助于角的几何概念. 还有其他非几何的途径去研究这些函数. W. F. Eberlein (*Amer. Math. Monthly*, 1967 年 74 卷 1223—1225 页) 和 G. B. Robison (*Math. Mag.*, 1968 年 41 卷 66—70 页) 的论文就是讨论这些专题的.

## 复数域的代数完备性

在代数上复数域是完备的, 这就是说任何复系数的、不是常数的多项式必有复数根. 目前正是给它作简单证明的时机.

**8.8 定理** 假设  $a_0, \dots, a_n$  都是复数,  $n \ge 1$ ,  $a_n \ne 0$ ,

$$P(z) = \sum_{0}^{n} a_k z^k.$$

那么必有某个复数  $z$  使  $P(z) = 0$ .

**证** 假定  $a_n = 1$  无损于一般性, 令

$$\mu = \inf |P(z)| \quad (z \text{ 为复数}) \quad (55)$$

如果  $|z| = R$ , 那么

$$|P(z)| \ge R^n [1 - |a_{n-1}|R^{-1} - \dots - |a_0|R^{-n}]. \quad (56)$$

(56)的右端在  $R \to \infty$  时趋于  $\infty$ . 因此存在着一个  $R_0$ , 一旦  $|z| > R_0$  了, 便使得  $|P(z)| > \mu$ . 因为  $|P|$  在以 0 为圆心,  $R_0$  为半径的圆面上连续, 定理 4.16 说明, 有某个  $z_0$  使  $|P(z_0)| = \mu$ .

我们断言  $\mu = 0$ .

若是不然的话, 令  $Q(z) = P(z + z_0)/P(z_0)$ . 那么  $Q$  是异于常数的多项式,  $Q(0) = 1$ , 而且对一切  $z$ ,  $|Q(z)| \ge 1$ . 有最小整数  $k$ ,  $1 \le k \le n$ , 使得

$$Q(z) = 1 + b_k z^k + \cdots + b_n z^n, \quad b_k \neq 0. \quad (57)$$

根据定理 8.7(d), 有一个实数  $\theta$ , 使得

$$e^{i\theta} b_k = -|b_k|. \quad (58)$$

如果  $r > 0$  而且  $r^k |b_k| < 1$ , 那么从(58)式有

$$|1 + b_k r^k e^{i\theta}| = 1 - r^k |b_k|,$$

所以

$$|Q(re^{i\theta})| \le 1 - r^k \{ |b_k| - r |b_{k+1}| - \cdots - r^{n-k} |b_n| \}.$$

当  $r$  足够小时, 大括号中的表达式是正数; 因此  $|Q(re^{i\theta})| < 1$ . 得出矛盾来了.

于是  $\mu = 0$ , 即是  $P(z_0) = 0$

习题 27 包含着更一般的结果.

## Fourier 级数

**8.9 定义** 三角多项式是形如

$$f(x) = a_0 + \sum_{n=1}^{N} (a_n \cos nx + b_n \sin nx) \quad (x \text{ 为实数}), \quad (59)$$

的有限和, 其中  $a_0, \dots, a_N, b_1, \dots, b_N$  都是复数. 考虑到恒等式(46)也可以把(59)式写作

$$f(x) = \sum_{-N}^{N} c_n e^{inx} \quad (x \text{ 为实数}), \quad (60)$$

为了多种目的, 这样写更方便. 显然, 每个三角多项式以  $2\pi$  为周期.

当  $n$  是异于零的整数时,  $e^{inx}$  是  $e^{inx}/in$  的导数, 后者也以  $2\pi$  为周期. 因此

$$\frac{1}{2\pi} \int_{-\pi}^{\pi} e^{inx} dx = \begin{cases} 1 & (n = 0), \\ 0 & (n = \pm 1, \pm 2, \dots). \end{cases} \quad (61)$$

设  $m$  为整数, 用  $e^{-imx}$  乘(60)式, 将这乘积积分, 这时(61)式说明  $|m| \le N$  时

$$c_m = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(x) e^{-imx} dx \quad (62)$$

而  $|m| > N$  时, (62)式里的积分便是零.

从(60)式和(62)式可以推得以下的结论: 用(60)所写的三角多项式  $f$  是实的, 当且仅当  $c_{-n} = \overline{c_n}$ ,  $n = 0, \dots, N$ .

为了与(60)相呼应, 我们定义三角级数是形如

$$\sum_{-\infty}^{\infty} c_n e^{inx} \quad (x \text{ 为实数}); \quad (63)$$

的级数; (63)的第  $N$  个部分和定义为(60)的右端.

假若  $f$  是  $[-\pi, \pi]$  上的可积函数, 对于一切整数  $m$ , 按(62)确定的数  $c_m$ , 叫做  $f$  的 Fourier 系数, 用这些系数做成的级数(63)叫做  $f$  的 Fourier 级数.

现在自然要发生的一个问题是,  $f$  的 Fourier 级数是否收敛于  $f$ . 或者更一般地说,  $f$  能否被它的 Fourier 级数确定. 即是说, 如果知道一个函数的 Fourier 系数, 能否找到这个函数. 如果能, 怎么找?

研究这种级数, 特别是研究用三角级数表示已知函数的问题, 起源于物理问题, 例如振动理论和热传导理论 (Fourier 所著“热的解析理论”(“Théorie analytique de la chaleur”)于 1822 年出版). 这些研究中发生的许多困难而精致的问题引起了整个实变函数论全面的修正和改革. 许多杰出的数学家的名字, 诸如 Riemann, Cantor, Lebesgue 都与这个领域紧密联系. 现在可以恰当地说, 它的一切推广和分枝在整个分析学中占有核心的地位.

我们将满足于导出一些基本定理, 这些定理根据前几章所展示的方法, 是容易理解的. 关于更彻底的讨论, Lebesgue 积分是自然而必须的工具.

首先讨论性质类似于(61)的更一般的函数系:

**8.10 定义**  $\{\phi_n\} (n=1, 2, 3, \dots)$  是  $[a, b]$  上合于

$$\int_a^b \phi_n(x) \overline{\phi_m(x)} dx = 0 \quad (n \neq m). \quad (64)$$

的复值函数序列. 那么,  $\{\phi_n\}$  叫做  $[a, b]$  上的函数的正交系. 此外, 若是对于一切  $n$

$$\int_a^b |\phi_n(x)|^2 dx = 1 \quad (65)$$

$\{\phi_n\}$  便叫作正规正交系 (orthonormal).

例如, 函数  $(2\pi)^{-\frac{1}{2}} e^{inx}$  组成  $[-\pi, \pi]$  上的正规正交系. 实函数

$$\frac{1}{\sqrt{2\pi}}, \frac{\cos x}{\sqrt{\pi}}, \frac{\sin x}{\sqrt{\pi}}, \frac{\cos 2x}{\sqrt{\pi}}, \frac{\sin 2x}{\sqrt{\pi}}, \dots$$

同样也是.

假若  $\{\phi_n\}$  是  $[a, b]$  上的正规正交系, 而且

$$c_n = \int_a^b f(t) \overline{\phi_n(t)} dt \quad (n = 1, 2, 3, \dots), \quad (66)$$

我们便说  $c_n$  是  $f$  关于  $\{\phi_n\}$  的第  $n$  个 Fourier 系数. 我们写作

$$f(x) \sim \sum_1^{\infty} c_n \phi_n(x) \quad (67)$$

并且说这级数是  $f$  的 Fourier 级数(关于  $\{\phi_n\}$  的).

注意, (67)中的符号  $\sim$ , 并不意味着任何关于级数收敛性的事实; 它仅表示系数是按(66)计算的.

下列定理说明  $f$  的 Fourier 级数的部分和有某种极小性质. 在这里和本章其余部分, 我们都假定  $f \in \mathcal{R}$ , 虽然这假定可以减弱.

**8.11 定理** 设  $\{\phi_n\}$  是  $[a, b]$  上的正规正交系. 令

$$s_n(x) = \sum_{m=1}^{n} c_m \phi_m(x) \quad (68)$$

是  $f$  的 Fourier 级数的第  $n$  个部分和. 又假定

$$t_n(x) = \sum_{m=1}^{n} \gamma_m \phi_m(x). \quad (69)$$

那么

$$\int_a^b |f - s_n|^2 dx \le \int_a^b |f - t_n|^2 dx, \quad (70)$$

并且, 当且仅当

$$\gamma_m = c_m \quad (m = 1, \dots, n). \quad (71)$$

时才能使等式成立.

这就是说, 在所有函数  $t_n$  中,  $s_n$  是对于  $f$  的最佳均方逼近.

**证** 设  $\int$  表示在  $[a, b]$  上的积分,  $\Sigma$  表示从 1 到  $n$  的求和. 于是按  $\{c_m\}$  的定义,

$$\int \bar{f} t_n = \int f \sum \bar{\gamma}_m \phi_m = \sum c_m \bar{\gamma}_m$$

因为  $\{\phi_n\}$  是正规正交的; 那么

$$\int |t_n|^2 = \int t_n \bar{t}_n = \int \sum \gamma_m \phi_m \sum \bar{\gamma}_k \bar{\phi}_k = \sum |\gamma_m|^2$$

于是

$$\begin{aligned} \int |f - t_n|^2 &= \int |f|^2 - \int \bar{f} t_n - \int \bar{f} t_n + \int |t_n|^2 \\ &= \int |f|^2 - \sum c_m \bar{\gamma}_m - \sum \bar{c}_m \gamma_m + \sum |\gamma_m|^2 \\ &= \int |f|^2 - \sum |c_m|^2 + \sum |\gamma_m - c_m|^2, \end{aligned}$$

显然, 当且仅当  $\gamma_m = c_m$  时, 它最小.

在算式中, 令  $\gamma_m = c_m$ , 由于  $\int |f - t_n|^2 \ge 0$ , 我们得到

$$\int_a^b |s_n(x)|^2 dx = \sum_1^n |c_n|^2 \le \int_a^b |f(x)|^2 dx, \quad (72)$$

**8.12 定理** 若  $\{\phi_n\}$  是  $[a, b]$  上的正规正交系, 又若

$$f(x) \sim \sum_{n=1}^{\infty} c_n \phi_n(x),$$

那么

$$\sum_{n=1}^{\infty} |c_n|^2 \le \int_a^b |f(x)|^2 dx. \quad (73)$$

特别地

$$\lim_{n \to \infty} c_n = 0. \quad (74)$$

证 在(72)式中令  $n \to \infty$ , 就得(73), 这即是所谓“Bessel 不等式”.

8.13 三角级数 从现在起只讨论三角函数系. 将要考虑的函数都以  $2\pi$  为周期, 都在  $[-\pi, \pi]$  上 Riemann 可积(因而又在每个有界闭区间上可积). 那么  $f$  的 Fourier 级数便是(63), 它的系数  $c_n$  就是(62)所写的积分, 并且

$$s_N(x) = s_N(f; x) = \sum_{-N}^{N} c_n e^{inx} \quad (75)$$

是  $f$  的 Fourier 级数的第  $N$  个部分和. 不等式(72)现在变成

$$\frac{1}{2\pi} \int_{-\pi}^{\pi} |s_N(x)|^2 dx = \sum_{-N}^{N} |c_n|^2 \le \frac{1}{2\pi} \int_{-\pi}^{\pi} |f(x)|^2 dx. \quad (76)$$

为了给  $s_N$  找到一个比(75)便于使用的表示式, 我们先讲 Dirichlet 核

$$D_N(x) = \sum_{n=-N}^{N} e^{inx} = \frac{\sin\left(N + \frac{1}{2}\right)x}{\sin\left(\frac{x}{2}\right)}. \quad (77)$$

这里第一个等式是  $D_N(x)$  的定义; 如果将等式

$$(e^{ix} - 1)D_N(x) = e^{i(N+1)x} - e^{-iNx}$$

的两端都乘以  $e^{-\frac{ix}{2}}$  就能得到(77)里的第二个等式.

由(62)式与(75)式求得

$$\begin{aligned} s_N(f; x) &= \sum_{-N}^{N} \frac{1}{2\pi} \int_{-\pi}^{\pi} f(t) e^{-int} dt e^{inx} \\ &= \frac{1}{2\pi} \int_{-\pi}^{\pi} f(t) \sum_{-N}^{N} e^{in(x-t)} dt, \end{aligned}$$

所以

$$\begin{aligned} s_N(f; x) &= \frac{1}{2\pi} \int_{-\pi}^{\pi} f(t) D_N(x-t) dt \\ &= \frac{1}{2\pi} \int_{-\pi}^{\pi} f(x-t) D_N(t) dt. \end{aligned} \quad (78)$$

这里卷入的函数有共同的周期，说明积分区间只要是长度等于  $2\pi$ ，在什么区间上积分是无关紧要的。这说明(78)里的两个积分相等。

关于 Fourier 级数的逐点收敛，只证一条定理。

**8.14 定理** 如果对于某一点  $x$ ，有两个常数  $\delta > 0$  和  $M < \infty$ ，对所有的  $t \in (-\delta, \delta)$ ，使得

$$|f(x+t) - f(x)| \le M|t| \quad (79)$$

便一定有

$$\lim_{N \to \infty} s_N(f; x) = f(x). \quad (80)$$

**证** 当  $0 < |t| \le \pi$  时，定义

$$g(t) = \frac{f(x-t) - f(x)}{\sin\left(\frac{t}{2}\right)} \quad (81)$$

再令  $g(0) = 0$ 。由定义(77)得

$$\frac{1}{2\pi} \int_{-\pi}^{\pi} D_N(x) dx = 1.$$

所以(78)表示

$$\begin{aligned} S_N(f; x) - f(x) &= \frac{1}{2\pi} \int_{-\pi}^{\pi} g(t) \sin\left(N + \frac{1}{2}\right)t dt \\ &= \frac{1}{2\pi} \int_{-\pi}^{\pi} \left[ g(t) \cos \frac{t}{2} \right] \sin Nt dt \\ &\quad + \frac{1}{2\pi} \int_{-\pi}^{\pi} \left[ g(t) \sin \frac{t}{2} \right] \cos Nt dt. \end{aligned}$$

从(79)与(81)来看， $g(t) \cos \frac{t}{2}$  与  $g(t) \sin \frac{t}{2}$  都有界。所以，根据(74)式，当  $N \to \infty$  时上边两个积分都趋于零。这就证明了(80)式。

**推论** 如果对于某个开区间  $J$  内的一切  $x$ ， $f(x) = 0$ ，那么便对于每个  $x \in J$ ， $\lim s_N(f; x) = 0$ 。

这推论还有一种叙述方式是：

如果对于  $x$  的某个邻域之内的一切  $t$ ,  $f(t) = g(t)$ , 那么当  $N \to \infty$  时

$$s_N(f; x) - s_N(g; x) = s_N(f - g; x) \to 0.$$

时常把这叫做局部化定理. 它说明凡是说到收敛性时, 序列  $\{s_N(f; x)\}$  的性态只依赖于  $f$  在  $x$  的某个(任意小的)邻域内的值. 所以两个 Fourier 级数可以在一个区间里有相同的性态, 而在另一个区间里便完全不同. 从这里看到 Fourier 级数与幂级数(定理 8.5)之间有极其显著的不同.

我们用另外两个逼近定理作结束.

**8.15 定理** 如果  $f$  连续(以  $2\pi$  为周期), 并且  $\varepsilon > 0$ , 那么便有一个三角多项式  $P$ , 对于一切实数  $x$

$$|P(x) - f(x)| < \varepsilon$$

证 如果把  $x$  和  $x + 2\pi$  等同起来, 就可以根据映射  $x \to e^{ix}$  把  $R^1$  上周期为  $2\pi$  的函数当作单位圆  $T$  上的函数. 三角多项式, 即是形式为(60)的函数, 形成一个自伴代数  $\mathcal{A}$ , 它能分离  $T$  上的点, 不在  $T$  的点消失. 由于  $T$  是紧的, 那么定理 7.33 能告诉我们  $\mathcal{A}$  在  $\mathcal{C}(T)$  内稠密. 这正好是这定理所断定的.

习题 15 里有这定理的一个更确切的形式.

**8.16 Parseval 定理** 假定  $f$  与  $g$  都是 Riemann 可积而且周期为  $2\pi$  的函数.

$$f(x) \sim \sum_{-\infty}^{\infty} c_n e^{inx}, g(x) \sim \sum_{-\infty}^{\infty} \gamma_n e^{inx}. \quad (82)$$

那么

$$\lim_{N \to \infty} \frac{1}{2\pi} \int_{-\pi}^{\pi} |f(x) - S_N(f; x)|^2 dx = 0, \quad (83)$$

$$\frac{1}{2\pi} \int_{-\pi}^{\pi} f(x) \overline{g(x)} dx = \sum_{-\infty}^{\infty} c_n \overline{\gamma_n}, \quad (84)$$

$$\frac{1}{2\pi} \int_{-\pi}^{\pi} |f(x)|^2 dx = \sum_{-\infty}^{\infty} |c_n|^2. \quad (85)$$

证 我们将要用记号

$$\|h\|_2 = \left\{ \frac{1}{2\pi} \int_{-\pi}^{\pi} |h(x)|^2 dx \right\}^{\frac{1}{2}}. \quad (86)$$

假设给定了  $\varepsilon < 0$ . 因为  $f \in \mathcal{R}$ , 又  $f(\pi) = f(-\pi)$ . 那么第 6 章习题 12 所说的方法, 能造成一个连续的  $2\pi$  周期的函数  $h$ , 合于

$$\|f - h\|_2 < \varepsilon. \quad (87)$$

根据定理 8.15, 存在一个三角多项式  $P$ , 对于所有的  $x$  满足  $|h(x) - P(x)| < \varepsilon$ ; 从而  $\|h - P\|_2 < \varepsilon$ . 如果  $P$  是  $N_0$  次的, 那么定理 8.11 表示  $N \ge N_0$  时

$$\|h - S_N(h)\|_2 \le \|h - P\|_2 < \varepsilon \quad (88)$$

根据(72), 用  $h-f$  代换  $f$

$$\|S_N(h) - S_N(f)\|_2 = \|S_N(h-f)\|_2 \le \|h-f\|_2 < \varepsilon. \quad (89)$$

现在三角形不等式(第 6 章习题 11)与(87)、(88)、(89)联合起来就能说明

$$\|f - S_N(f)\|_2 < 3\varepsilon \quad (N \ge N_0). \quad (90)$$

这证明(83)成立. 其次

$$\frac{1}{2\pi} \int_{-\pi}^{\pi} S_N(f) \bar{g} dx = \sum_{-N}^{N} c_n \frac{1}{2\pi} \int_{-\pi}^{\pi} e^{inx} \overline{g(x)} dx = \sum_{-N}^{N} c_n \bar{y}_n, \quad (91)$$

和 Schwarz 不等式, 说明

$$\begin{aligned} \left| \int f \bar{g} - \int S_N(f) \bar{g} \right| &\le \left| \int f - S_N(f) \right| \|g\| \\ &\le \left\{ \int |f - S_N|^2 \right\}^{\frac{1}{2}} \left\{ \int |g|^2 \right\}^{\frac{1}{2}}, \end{aligned} \quad (92)$$

根据(83), 当  $N \to \infty$  时它趋于零. 比较(91)与(92)便得到(84). 最后, (85)是(84)在  $g=f$  之下的特别情形.

第 11 章还有定理 8.16 的较为一般的说法.

### Γ 函数

这函数与阶乘有密切的关系, 时常在分析学的意料不到的地方出现. 在 P. J. Davis 的有趣的作品里 (*Amer. Math. Monthly*, 1959 年, 66 卷 849—869 页) 对于它的起源、历史和发展都有很好的叙述. 书目中 Artin 的书是另一本很好的初等引论.

这里提出来的内容很紧凑, 在每个定理后边只有很少的评论. 所以这一节可以看作一个大的习题, 也是应用以前提供的一些材料的机会.

**8.17 定义** 当  $0 < x < \infty$  时

$$\Gamma(x) = \int_{0}^{\infty} t^{x-1} e^{-t} dt. \quad (93)$$

对于这些  $x$ , 这积分收敛. (当  $x < 1$  时,  $0$  与  $\infty$  都必须观察.)

**8.18 定理**

(a) 如果  $0 < x < \infty$ , 函数方程

$$\Gamma(x+1) = x\Gamma(x)$$

成立.

(b)  $\Gamma(n+1) = n!$ ,  $n=1, 2, 3, \dots$ .

(c)  $\log \Gamma$  在  $(0, \infty)$  上是凸的.

证 一次分部积分就能证明(a). 因为  $\Gamma(1)=1$ , 那么用归纳法就能由(a)推得(b). 如果  $1 < p < \infty$ , 又  $(1/p) + (1/q) = 1$ , 将 Hölder 不等式(第 6 章习题 10)用于(93), 便得到

$$\Gamma\left(\frac{x}{p} + \frac{x}{q}\right) \le \Gamma(x)^{\frac{1}{p}} \Gamma(y)^{\frac{1}{q}}.$$

这与(c)等价.

Bohr 与 Møllerup 发现的这三个性质能完全表达  $\Gamma$  的本性, 这事实有些令人惊奇.

**8.19 定理** 如果  $f$  在  $(0, \infty)$  上是正值函数, 合于

$$(a) f(x+1) = xf(x),$$

$$(b) f(1) = 1,$$

$$(c) \log f \text{ 是凸的},$$

那么  $f(x) = \Gamma(x)$ .

证 因为  $\Gamma$  满足(a), (b), (c), 那么证明  $x > 0$  时  $f(x)$  是(a), (b), (c)惟一决定的函数就行了. 根据(a)只须对于  $x \in (0, 1)$  做到这一步就够了.

令  $\varphi = \log f$ , 那么

$$\varphi(x+1) = \varphi(x) + \log x \quad (0 < x < \infty), \quad (94)$$

$\varphi(1) = 0$ , 而且  $\varphi$  是凸的. 假定  $0 < x < 1$ , 而  $n$  是正整数. 根据(94),  $\varphi(n+1) = \log(n!)$ . 现在考虑一下  $\varphi$  在  $[n, n+1]$ ,  $[n+1, n+1+x]$ ,  $[n+1, n+2]$  三个闭区间上的差商. 既然  $\varphi$  是凸的, 那么

$$\log n \le \frac{\varphi(n+1+x) - \varphi(n+1)}{x} \le \log(n+1).$$

重复地使用(94)便得到

$$\varphi(n+1+x) = \varphi(x) + \log[x(x+1)\cdots(x+n)].$$

所以

$$0 \le \varphi(x) - \log\left[\frac{n!n^x}{x(x+1)\cdots(x+n)}\right] \le x \log\left(1 + \frac{1}{n}\right).$$

最后的式子当  $n \to \infty$  时趋于零. 从而确定了  $\varphi$ , 证明也完成了.

作为一个副产品, 我们还得到了一个关系式

$$\Gamma(x) = \lim_{n \to \infty} \frac{n!n^x}{x(x+1)\cdots(x+n)} \quad (95)$$

至少当  $0 < x < 1$  时是这样; 从这又可以推得(95)适用于一切  $x > 0$ ; 这因为  $\Gamma(x+1) = x\Gamma(x)$ .

**8.20 定理** 如果  $x > 0$ , 又  $y > 0$ , 那么

$$\int_{0}^{1} t^{x-1} (1-t)^{y-1} dt = \frac{\Gamma(x)\Gamma(y)}{\Gamma(x+y)}. \quad (96)$$

这积分是所谓的  $B$  函数  $B(x, y)$ .

**证** 注意  $B(1, y) = \frac{1}{y}$ , 照定理 8.18 那样, 根据 Hölder 不等式, 知道  $B(x, y)$  对于每个固定的  $y$  是  $x$  的凸函数; 还有

$$B(x+1, y) = \frac{x}{x+y} B(x, y). \quad (97)$$

要证明(97), 可以把分部积分用于

$$B(x+1, y) = \int_{0}^{1} \left( \frac{t}{1-t} \right)^x (1-t)^{x+y-1} dt.$$

$B(x, y)$  的三个性质说明定理 8.19 可以对于每个  $y$  用于

$$f(x) = \frac{\Gamma(x+y)}{\Gamma(y)} B(x, y).$$

所定义的函数  $f$ . 所以  $f(x) = \Gamma(x)$ .

**8.21 一些推论** 用  $t = \sin^2 \theta$  作代换, 便将(96)变为

$$2 \int_{0}^{\frac{\pi}{2}} (\sin \theta)^{2x-1} (\cos \theta)^{2y-1} d\theta = \frac{\Gamma(x)\Gamma(y)}{\Gamma(x+y)}. \quad (98)$$

特别地, 当  $x = y = \frac{1}{2}$  时有

$$\Gamma\left(\frac{1}{2}\right) = \sqrt{\pi}. \quad (99)$$

用  $t = s^2$  作代换, 便将(93)变为

$$\Gamma(x) = 2 \int_{0}^{\infty} s^{2x-1} e^{-s^2} ds \quad (0 < x < \infty). \quad (100)$$

特别当  $x = \frac{1}{2}$  时有

$$\int_{-\infty}^{\infty} e^{-s^2} ds = \sqrt{\pi}. \quad (101)$$

根据(99), 可以从定理 8.19 直接推得恒等式

$$\Gamma(x) = \frac{2^{x-1}}{\sqrt{\pi}} \Gamma\left(\frac{x}{2}\right) \Gamma\left(\frac{x+1}{2}\right) \quad (102)$$

**8.22 Stirling 公式** 当  $x$  很大时, 这给  $\Gamma(x+1)$  提供了一个简单的近似表达式(当  $n$  很大时, 就是  $n!$  的近似表达式). 这公式是

$$\lim_{x \to \infty} \frac{\Gamma(x+1)}{(x/e)^x \sqrt{2\pi x}} = 1. \quad (103)$$

下面是一种证明. 在(93)中置  $t=x(1+u)$ , 得

$$\Gamma(x+1) = x^{x+1} e^{-x} \int_{-1}^{\infty} [(1+u)e^{-u}]^x du. \quad (104)$$

确定  $h(u)$ , 要求  $h(0)=1$ , 以及当  $-1 < u < \infty$ ,  $u \neq 0$  时

$$(1+u)e^{-u} = \exp\left[-\frac{u^2}{2}h(u)\right] \quad (105)$$

于是

$$h(u) = \frac{2}{u^2} [u - \log(1+u)]. \quad (106)$$

因此,  $h$  是连续函数, 并且当  $u$  从  $-1$  递增到  $\infty$  时,  $h(u)$  从  $\infty$  递降到 0.

做代换  $u=s\sqrt{x}$  后, (104)式就变成

$$\Gamma(x+1) = x^x e^{-x} \sqrt{2x} \int_{-\infty}^{\infty} \psi_x(s) ds \quad (107)$$

这里

$$\psi_x(s) = \begin{cases} \exp[-s^2 h(s\sqrt{\frac{x}{2}})] & \left(-\sqrt{\frac{x}{2}} < s < \infty\right), \\ 0 & \left(s \le -\sqrt{\frac{x}{2}}\right). \end{cases}$$

注意下述关于  $\psi_x(s)$  的几个事实:

(a) 对于每个  $s$  来说, 当  $x \to \infty$  时,

$$\psi_x(s) \to e^{-s^2}.$$

(b) 对于任何  $A < \infty$  来说, (a)中的收敛性, 在  $[-A, A]$  上是一致的.

(c)  $s < 0$  时,  $0 < \psi_x(s) < e^{-s^2}$ .

(d)  $s > 0$  并且  $x > 1$  时,  $0 < \psi_x(s) < \psi_1(s)$ .

(e)  $\int_0^\infty \psi_1(s) ds < \infty$ .

因此, 第 7 章习题 12 中所说的收敛定理能应用于积分(107), 再根据(101)式, 就证明了当  $x \to \infty$  时这个积分收敛到  $\sqrt{\pi}$ . 这就证明了(103)式.

R. C. Buck 的“高等分析”(Advanced Calculus)第 216—218 页中有对这个证明更详尽的叙述. 在 *Amer. Math. Monthly*, 1967 年 74 卷 1223—1225 页

W. Feller的论文(1968年75卷第518页有一订正)及Artin的书第20—24页中有两个完全不同的证明.

习题20给一个精确度稍差的结论作了一个简单的证明.

### 习题

#### 1. 定义

$$f(x) = \begin{cases} e^{-\frac{1}{x^2}} & (x \neq 0), \\ 0 & (x = 0). \end{cases}$$

试证  $f$  在  $x=0$  有一切阶的导数, 并且对于  $n=1, 2, 3, \dots$ ,  $f^{(n)}(0)=0$ .

#### 2. 设阵

$$\begin{array}{cccccc} -1 & 0 & 0 & 0 & \dots & \\ \frac{1}{2} & -1 & 0 & 0 & \dots & \\ \frac{1}{4} & \frac{1}{2} & -1 & 0 & \dots & \\ \frac{1}{8} & \frac{1}{4} & \frac{1}{2} & -1 & \dots & \\ \dots & \dots & \dots & \dots & \dots & \dots \end{array}$$

中第  $i$  行第  $j$  列的数是  $a_{ij}$ , 就是

$$a_{ij} = \begin{cases} 0 & (i < j), \\ -1 & (i = j), \\ 2^{j-i} & (i > j). \end{cases}$$

试证

$$\sum_i \sum_j a_{ij} = -2, \quad \sum_j \sum_i a_{ij} = 0.$$

3. 设对于一切  $i, j$  来说,  $a_{ij} \ge 0$ , 试证

$$\sum_i \sum_j a_{ij} = \sum_j \sum_i a_{ij}$$

(也可能出现  $+\infty = +\infty$  这种情况).

4. 试证以下的极限关系:

$$(a) \lim_{x \to 0} \frac{b^x - 1}{x} = \log b \quad (b > 0).$$

$$(b) \lim_{x \to 0} \frac{\log(1+x)}{x} = 1.$$

$$(c) \lim_{x \to 0} (1+x)^{\frac{1}{x}} = e.$$

$$(d) \lim_{n \to \infty} \left(1 + \frac{x}{n}\right)^n = e^x.$$

5. 求下列极限

$$(a) \lim_{x \to 0} \frac{e - (1+x)^{\frac{1}{x}}}{x}.$$

$$(b) \lim_{n \to \infty} \frac{n}{\log n} [n^{\frac{1}{n}} - 1].$$

$$(c) \lim_{x \to 0} \frac{\tan x - x}{x(1 - \cos x)}.$$

$$(d) \lim_{x \to 0} \frac{x - \sin x}{\tan x - x}.$$

6. 设对任何实数  $x, y$ ,  $f(x)f(y) = f(x+y)$ .

(a) 假设  $f$  可微且不是零, 试证

$$f(x) = e^{cx}$$

这里  $c$  是常数.

(b) 只假定  $f$  连续, 证明这同一结论.

7. 设  $0 < x < \frac{\pi}{2}$ , 试证

$$\frac{2}{\pi} < \frac{\sin x}{x} < 1.$$

8. 设  $n=0, 1, 2, \dots$ , 而  $x$  是实数, 试证

$$|\sin nx| \le n |\sin x|.$$

注意, 对于其他的  $n$  来说, 不等式可能不成立. 例如,

$$\left| \sin \frac{1}{2} \pi \right| > \frac{1}{2} |\sin \pi|.$$

9. (a) 令  $s_N = 1 + \frac{1}{2} + \dots + \frac{1}{N}$ . 试证

$$\lim_{N \to \infty} (s_N - \log N)$$

存在. (这个极限叫做 Euler 常数, 通常记作  $\gamma$ . 它的数值是 0.5772\dots. 还不知道  $\gamma$  是有理数还是无理数.)

(b)  $m$  大约要多大, 才能使  $N=10^m$  满足

$$s_N > 100?$$

10. 试证  $\sum 1/p$  发散; 和中的  $p$  遍历一切质数.

(这说明, 质数是正整数集的真正有份量的子集.)

提示: 给定  $N$ , 设  $p_1, \dots, p_k$  是那样的质数, 它至少能整除一个不大于  $N$

的正整数. 那么

$$\begin{aligned}\sum_{n=1}^{N} \frac{1}{n} &\le \prod_{j=1}^{k} \left(1 + \frac{1}{p_j} + \frac{1}{p_j^2} + \cdots\right) = \prod_{j=1}^{k} \left(1 - \frac{1}{p_j}\right)^{-1} \\ &\le \exp \sum_{j=1}^{k} \frac{2}{p_j}.\end{aligned}$$

最后这个不等式能成立, 是因为当  $0 \le x \le \frac{1}{2}$  时,

$$(1-x)^{-1} \le e^{2x}$$

(这个结论有许多种证法. 例如, 可参看 I. Niven 在 *Amer. Math. Monthly*, 1971 年 78 卷, 272—273 页的文章, 以及 R. Bellman 在 *Amer. Math. Monthly*, 1943 年 50 卷 318—319 页的文章).

11. 设对于一切  $A < \infty$ , 在  $[0, A]$  上  $f \in \mathcal{R}$ , 而当  $x \to \infty$  时,  $f(x) \to 1$ . 试证

$$\lim_{t \to 0} t \int_{0}^{\infty} e^{-tx} f(x) dx = 1 \quad (t > 0).$$

12. 设  $0 < \delta < \pi$ , 当  $|x| \le \delta$  时  $f(x) = 1$ , 当  $\delta < |x| \le \pi$  时  $f(x) = 0$ , 而对于一切  $x$ ,  $f(x+2\pi) = f(x)$ .

(a) 求  $f$  的 Fourier 系数.

(b) 推证

$$\sum_{n=1}^{\infty} \frac{\sin(n\delta)}{n} = \frac{\pi - \delta}{2} \quad (0 < \delta < \pi).$$

(c) 由 Parseval 定理导出

$$\sum_{n=1}^{\infty} \frac{\sin^2(n\delta)}{n^2 \delta} = \frac{\pi - \delta}{2}.$$

(d) 令  $\delta \to 0$  以证

$$\int_{0}^{\infty} \left( \frac{\sin x}{x} \right)^2 dx = \frac{\pi}{2}.$$

(e) 在 (c) 中令  $\delta = \frac{\pi}{2}$ , 能得出什么结论来?

13. 当  $0 \le x < 2\pi$  时, 令  $f(x) = x$ , 应用 Parseval 定理推证

$$\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}.$$

14. 设在  $[-\pi, \pi]$  上  $f(x) = (\pi - |x|)^2$ , 试证

$$f(x) = \frac{\pi^2}{3} + \sum_{n=1}^{\infty} \frac{4}{n^2} \cos nx$$

并推证

$$\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}, \quad \sum_{n=1}^{\infty} \frac{1}{n^4} = \frac{\pi^4}{90}.$$

(E. L. Stark 的最近的作品, 对形如  $\Sigma n^{-s}$  的级数多有论及; 这里的  $s$  是正整数. 参看 *Math. Mag.*, 1974 年 47 卷, 197—202 页.)

15. 设  $D_n$  的定义为 (77) 式, 而令

$$K_N(x) = \frac{1}{N+1} \sum_{n=0}^{N} D_n(x).$$

试证

$$K_N(x) = \frac{1}{N+1} \cdot \frac{1 - \cos((N+1)x)}{1 - \cos x}$$

及

$$(a) K_N \ge 0,$$

$$(b) \frac{1}{2\pi} \int_{-\pi}^{\pi} K_N(x) dx = 1,$$

$$(c) \text{若 } 0 < \delta \le |x| \le \pi, \text{ 那么 } K_N(x) \le \frac{1}{N+1} \cdot \frac{2}{1 - \cos \delta}.$$

设  $s_N = s_N(f; x)$  是  $f$  的 Fourier 级数的第  $N$  个部分和, 并设

$$\sigma_N = \frac{s_0 + s_1 + \dots + s_N}{N+1}$$

是算术平均值. 试证

$$\sigma_N(f; x) = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(x-t) K_N(t) dt,$$

并由此证明 Fejér 定理:

设  $f$  连续, 以  $2\pi$  为周期. 那么, 在  $[-\pi, \pi]$  上  $\sigma_N(f; x) \to f(x)$  是一致的.

提示: 应用性质 (a)、(b)、(c), 像在定理 7.26 中那样进行.

16. 证明 Fejér 定理的一个逐点收敛的说法:

设  $f \in \mathcal{R}$  且在某些点  $x$  上  $f(x+)$ ,  $f(x-)$  存在, 那么

$$\lim_{N \to \infty} \sigma_N(f; x) = \frac{1}{2} [f(x+) + f(x-)].$$

17. 假设  $f$  在  $[-\pi, \pi]$  有界且单调, 并且它的 Fourier 系数  $c_n$  由 (62) 式定出.

(a) 用第 6 章习题 17 证明  $\{nc_n\}$  是有界序列.

(b) 把(a)及习题 16 与第 3 章的习题 14(e)结合起来, 以证明, 对于每个  $x$ ,

$$\lim_{N \to \infty} s_N(f; x) = \frac{1}{2} [f(x+) + f(x-)]$$

(c) 如果只假定在  $[-\pi, \pi]$  上  $f \in \mathcal{R}$ , 而  $f$  在某开区间  $(\alpha, \beta) \subset [-\pi, \pi]$  单调. 试证, 对于每个  $x \in (\alpha, \beta)$ , (b) 的结论仍能成立.

(这是局部化定理的一项应用).

18. 设

$$f(x) = x^3 - \sin^2 x \tan x$$

$$g(x) = 2x^2 - \sin^2 x - x \tan x.$$

对每个函数来断定, 对一切  $x \in (0, \frac{\pi}{2})$ , 函数值都是正的, 或者都是负的, 还是变号. 证实你的答案.

19. 设  $f$  是  $R^1$  上的连续函数,  $f(x+2\pi) = f(x)$ , 并且  $\alpha/\pi$  是无理数. 试证:

$$\lim_{N \to \infty} \frac{1}{N} \sum_{n=1}^{N} f(x + n\alpha) = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(t) dt$$

对于每个  $x$  成立. 提示: 先对  $f(x) = e^{ix}$  来证.

20. 下面的简单计算能得出 Stirling 公式的一个很好的近似值.

设  $m=1, 2, 3, \dots$ , 当  $m \le x \le m+1$  时, 规定

$$f(x) = (m+1-x) \log m + (x-m) \log(m+1)$$

而当  $m - \frac{1}{2} \le x < m + \frac{1}{2}$  时, 规定

$$g(x) = \frac{x}{m} - 1 + \log m$$

作出  $f$  和  $g$  的图像. 注意, 当  $x \ge 1$  时  $f(x) \le \log x \le g(x)$ , 并且

$$\int_{1}^{n} f(x) dx = \log(n!) - \frac{1}{2} \log n > -\frac{1}{8} + \int_{1}^{n} g(x) dx.$$

在  $[1, n]$  上积分  $\log x$ , 就推断出当  $n=2, 3, 4, \dots$  时

$$\frac{7}{8} < \log(n!) - \left(n + \frac{1}{2}\right) \log n + n < 1$$

(注意:  $\log\sqrt{2\pi} \sim 0.918\dots$ ). 于是

$$e^{\frac{1}{2}} < \frac{n!}{(n/e)^n \sqrt{n}} < e.$$

21. 设

$$L_n = \frac{1}{2\pi} \int_{-\pi}^{\pi} |D_n(t)| dt \quad (n = 1, 2, 3, \dots).$$

试证, 存在着常数  $C > 0$ , 使得

$$L_n > C \log n \quad (n = 1, 2, 3, \dots),$$

或者更精确些, 就是序列

$$\left\{ L_n - \frac{4}{\pi^2} \log n \right\}$$

有界.

22. 设  $a$  是实数,  $-1 < x < 1$ , 试证牛顿二项式定理:

$$(1+x)^a = 1 + \sum_{n=1}^{\infty} \frac{a(a-1)\cdots(a-n+1)}{n!} x^n.$$

提示: 把右端记作  $f(x)$ . 证明级数收敛, 证明

$$(1+x)f'(x) = af(x)$$

再解这个微分方程.

又设  $-1 < x < 1$ , 并设  $a > 0$ . 试证

$$(1-x)^{-a} = \sum_{n=0}^{\infty} \frac{\Gamma(n+a)}{n!\Gamma(a)} x^n$$

23. 设  $\gamma$  是复平面里的连续可微闭曲线, 它的参数区间是  $[a, b]$ , 并假定对每个  $t \in [a, b]$ ,  $\gamma(t) \neq 0$ . 定义  $\gamma$  的指标是

$$\text{Ind}(\gamma) = \frac{1}{2\pi i} \int_a^b \frac{\gamma'(t)}{\gamma(t)} dt.$$

试证  $\text{Ind}(\gamma)$  必定是整数.

提示: 存在  $[a, b]$  上的函数  $\varphi$ ,  $\varphi' = \gamma'/\gamma$ ,  $\varphi(a) = 0$ , 因此  $\gamma \exp(-\varphi)$  是常数. 因为  $\gamma(a) = \gamma(b)$ , 于是  $\exp \varphi(b) = \exp \varphi(a) = 1$ . 注意

$$\varphi(b) = 2\pi i \text{Ind}(\gamma).$$

当  $\gamma = e^{imz}$ ,  $a=0$ ,  $b=2\pi$  时, 求  $\text{Ind}(\gamma)$ .

解释为什么通常把  $\text{Ind}(\gamma)$  叫做  $\gamma$  绕 0 的圈数.

24. 令  $\gamma$  是习题 23 中那样的曲线, 又假定  $\gamma$  的值域与负实轴不交. 试证  $\text{Ind}(\gamma)=0$ . 提示:  $\text{Ind}(\gamma+c)$  在  $0 \le c < \infty$  上是  $c$  的连续整数值函数. 又当  $c \to \infty$  时,  $\text{Ind}(\gamma+c) \to 0$ .

25. 设  $\gamma_1, \gamma_2$  都是习题 23 中说的那样的曲线, 并且

$$|\gamma_1(t) - \gamma_2(t)| < |\gamma_1(t)| \quad (a \le t \le b).$$

试证  $\text{Ind}(\gamma_1) = \text{Ind}(\gamma_2)$ .

提示: 令  $\gamma = \gamma_2/\gamma_1$ , 于是  $|1-\gamma| < 1$ , 而据习题 24, 必然  $\text{Ind}(\gamma)=0$ , 又

$$\frac{\gamma'}{\gamma} = \frac{\gamma'_2}{\gamma_2} - \frac{\gamma'_1}{\gamma_1}.$$

26. 设  $\gamma$  是复平面里的闭曲线(不需假定可微), 参数区间是  $[0, 2\pi]$ , 并且对于每个  $t \in [0, 2\pi]$ ,  $\gamma(t) \neq 0$ .

选定  $\delta > 0$ , 使得对于一切  $t \in [0, 2\pi]$ , 合于  $|\gamma(t)| > \delta$ . 设  $P_1, P_2$  是对于一切  $t \in [0, 2\pi]$  都合于  $|P_j(t) - \gamma(t)| < \frac{\delta}{4}$  的三角多项式(据定理 8.15, 这样的多项式必定存在), 利用习题 25 证明

$$\text{Ind}(P_1) = \text{Ind}(P_2)$$

把这个公共的值定义作  $\text{Ind}(\gamma)$ .

试证习题 24 及 25 的叙述不要任何可微性的假定, 仍然成立.

27. 令  $f$  是定义在复平面中的连续复函数. 设有正整数  $n$  及复数  $c \neq 0$ , 合于

$$\lim_{z \to \infty} z^{-n} f(z) = c.$$

试证至少有一个复数  $z$  能使  $f(z)=0$ .

注意, 这是定理 8.8 的推广.

提示: 假如对于一切  $z$ ,  $f(z) \neq 0$ , 定义

$$\gamma_r(t) = f(re^{it})$$

这时  $0 \le r < \infty$ ,  $0 \le t \le 2\pi$ , 而对曲线  $\gamma_r$  来证明以下的命题:

- (a)  $\text{Ind}(\gamma_0)=0$ .
- (b) 当  $r$  足够大时,  $\text{Ind}(\gamma_r)=n$ .

- (c)  $\text{Ind}(\gamma_r)$  是  $r$  在  $[0, \infty]$  上的连续函数

[在(b)和(c)中, 利用习题 26 的后一部分.]

证明, 由于  $n > 0$ , (a)、(b)与(c)是矛盾的.

28. 令  $\bar{D}$  是复平面中的闭单位圆盘. (即是当且仅当  $|z| \le 1$  时  $z \in \bar{D}$ .) 又令  $g$  是把  $\bar{D}$  映入单位圆  $T$  的连续映射. (于是对于每个  $z \in \bar{D}$ ,  $|g(z)|=1$ .)

试证, 至少有一个  $z \in T$ , 使得  $g(z) = -z$ .

提示: 对于  $0 \le r \le 1$ ,  $0 \le t \le 2\pi$ , 令

$$\gamma_r(t) = g(re^{it}),$$

而置  $\psi(t) = e^{-it}\gamma_1(t)$ . 如果对于每个  $z \in T$ ,  $g(z) \neq -z$ , 那么对于每个  $t \in [0, 2\pi]$  就  $\psi(t) \neq -1$ . 因此, 据习题 24 及 26,  $\text{Ind}(\psi) = 0$ . 因之

$$\text{Ind}(\gamma_1) = 1.$$

但  $\text{Ind}(\gamma_0) = 0$ , 像习题 27 那样, 导出矛盾来.

29. 试证把  $\bar{D}$  映入  $\bar{D}$  的每个连续映射在  $\bar{D}$  中有不动点.

(这是 Brouwer 的不动点定理的二维情形.)

提示: 假定对每个  $z \in \bar{D}$ ,  $f(z) \neq z$ . 给每个  $z \in \bar{D}$  联系一点  $g(z) \in T$ , 该点位于从  $f(z)$  出发而通过  $z$  的射线上. 于是  $g$  把  $\bar{D}$  映入  $T$  内, 而当  $g \in T$  时,  $g(z) = z$ , 因为

$$g(z) = z - s(z)[f(z) - z],$$

所以  $g(z)$  连续, 这里  $s(z)$  是某个二次方程的惟一非负根, 这方程的系数是  $f$  和  $z$  的连续函数. 应用习题 28.

30. 利用 Stirling 公式证明: 对任意实数常数  $c$ ,

$$\lim_{x \to \infty} \frac{\Gamma(x+c)}{x^c \Gamma(x)} = 1.$$

31. 在定理 7.26 的证明中, 我们有

$$\int_{-1}^{1} (1-x^2)^n dx \ge \frac{4}{3\sqrt{n}}, \quad n = 1, 2, 3, \dots$$

试用定理 8.20 和习题 30, 证明下述更准确的结论:

$$\lim_{n \to \infty} \sqrt{n} \int_{-1}^{1} (1-x^2)^n dx = \sqrt{\pi}.$$
