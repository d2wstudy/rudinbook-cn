# 第9章 多元函数

## 线性变换

本章开始先讨论  $n$  维欧氏空间  $R^n$  内的向量的集. 这里提出的代数事项, 不用改变就可以扩充到任何标量域上的有限维向量空间去. 但是按我们的目的来说, 只限于欧氏空间提供的那种熟悉的结构就够了.

**9.1 定义**

(a) 非空集  $X \subset R^n$  是一个向量空间, 如果对于所有  $x \in X$ ,  $y \in X$  及所有标量  $c$ ,  $x+y \in X$ , 且  $cx \in X$ .

(b) 若  $x_1, \dots, x_k \in R^n$ ,  $c_1, \dots, c_k$  为标量, 则向量  $c_1 x_1 + \dots + c_k x_k$  叫做  $x_1, \dots, x_k$  的线性组合. 若  $S \subset R^n$ , 而  $E$  为  $S$  内的元素的所有线性组合的集, 便说  $S$  生成  $E$ , 或说  $E$  是  $S$  的生成.

注意, 每个生成是向量空间.

(c)  $k$  个向量  $x_1, \dots, x_k$  的集(以后记作  $\{x_1, \dots, x_k\}$ )叫做无关的, 如果从关系式  $c_1 x_1 + \dots + c_k x_k = 0$  可以推出  $c_1 = \dots = c_k = 0$ . 不然的话, 就说  $\{x_1, \dots, x_k\}$  是相关的.

注意, 无关集不含零向量.

(d) 若向量空间  $X$  含有由  $r$  个向量做成的无关集, 但是不含  $r+1$  个向量的无关集, 便说  $X$  是  $r$  维的, 并记作:  $\dim X = r$ .

只含  $0$  的集, 是一个向量空间. 它的维数是 0.

(e) 如果向量空间  $X$  的一个无关子集能够生成  $X$ , 则把这个无关子集叫做  $X$  的基.

注意, 若  $B = \{x_1, \dots, x_r\}$  是  $X$  的一个基, 则每个  $x \in X$  能惟一地表示成  $x = \sum c_j x_j$ . 因为  $B$  生成  $X$ , 所以这样的表示存在; 又因  $B$  是无关的, 所以这个表示是惟一的.  $c_1, \dots, c_r$  这些数叫做  $x$  关于基  $B$  的坐标.

集  $\{e_1, \dots, e_n\}$  是我们最熟悉的基的例子, 这里  $e_j$  是  $R^n$  中的向量, 它的第  $j$  个坐标是 1, 而其余坐标是 0. 若  $x \in R^n$ ,  $x = (x_1, \dots, x_n)$ , 则  $x = \sum x_j e_j$ . 我们把  $\{e_1, \dots, e_n\}$  叫做  $R^n$  的标准基.

**9.2 定理** 设  $r$  为正整数. 若向量空间  $X$  能由  $r$  个向量的集生成, 那么  $\dim X \le r$ .

**证** 若定理不成立, 就要有一个向量空间  $X$ , 它含有无关集  $Q = \{y_1, \dots, y_{r+1}\}$ , 但  $X$  能由含  $r$  个向量的集  $S_0$  生成.

假设  $0 \le i < r$ , 而我们已经作成了生成  $X$  的集  $S_i$ , 它含有  $y_j$ :  $1 \le j \le i$  及  $S_0$  中的某  $r-i$  个元, 设它们是  $x_1, \dots, x_{r-i}$  (换句话说,  $S_i$  是把  $S_0$  中的  $i$  个元代以

Q 的成员而不改变它的生成). 因为  $S_i$  生成  $X$ ,  $y_{i+1}$  在  $X$  中, 所以有标量  $a_1, \dots, a_{i+1}, b_1, \dots, b_{r-i}$ , 其中  $a_{i+1}=1$ , 使得

$$\sum_{j=1}^{i+1} a_j y_j + \sum_{k=1}^{r-i} b_k x_k = \mathbf{0}.$$

如果所有  $b_k$  为 0, 那么 Q 的无关性将要迫使所有  $a_j$  为 0, 矛盾. 所以必有某个  $x_k \in S_i$ , 它是  $T_i = S_i \cup \{y_{i+1}\}$  的其余元的线性组合. 从  $T_i$  中把这个  $x_k$  去掉, 而把所余下来的集叫做  $S_{i+1}$ . 那么  $S_{i+1}$  与  $T_i$  生成的空间相同, 即是  $X$ . 于是  $S_{i+1}$  具有对于  $S_i$  所假定的那些性质, 只是把其中的  $i$  换成  $i+1$  而已.

从  $S_0$  出发, 我们照这样造出集  $S_1, \dots, S_r$ . 其最后一个由  $y_1, \dots, y_r$  组成, 并且我们的构造方法, 说明它能生成  $X$ . 然而 Q 是无关的, 所以  $y_{r+1}$  不在  $S_r$  的生成之中. 这矛盾说明定理成立.

推论  $\dim R^n = n$ .

证 因  $\{e_1, \dots, e_n\}$  生成  $R^n$ . 由本定理知道

$$\dim R^n \le n.$$

因  $\{e_1, \dots, e_n\}$  是无关的, 所以  $\dim R^n \ge n$ .

**9.3 定理** 设  $X$  为向量空间, 且  $\dim X = n$ .

(a)  $X$  中  $n$  个向量的集  $E$  能生成  $X$ , 当且仅当  $E$  是无关的.

(b)  $X$  必有基, 而且每个基由  $n$  个向量组成.

(c) 若  $1 \le r \le n$ , 而  $\{y_1, \dots, y_r\}$  是  $X$  中的一个无关集, 则  $X$  必有包含  $\{y_1, \dots, y_r\}$  的基.

证 设  $E = \{x_1, \dots, x_n\}$ . 因  $\dim X = n$ , 对于每个  $y \in X$ , 集  $\{x_1, \dots, x_n, y\}$  是相关的. 若  $E$  是无关的, 那么  $y$  就在  $E$  的生成中; 因此  $E$  生成  $X$ . 反之, 若  $E$  相关, 就可以去掉  $E$  中一元而不改变  $E$  的生成. 因之, 由定理 9.2,  $E$  不能生成  $X$ . (a) 证完.

因  $\dim X = n$ ,  $X$  必含有  $n$  个向量的一个无关集. 但是(a)说明这样的集是  $X$  的基. 由 9.1(d)及 9.2 即得(b).

今证(c). 设  $\{x_1, \dots, x_n\}$  是  $X$  的基. 集

$$S = \{y_1, \dots, y_r, x_1, \dots, x_n\}$$

能生成  $X$ , 又因为它包含的向量多于  $n$  个, 所以是相关的. 定理 9.2 所用的论证说明, 这些  $x_i$  中必有一个是  $S$  中其他元的线性组合. 若从  $S$  中去掉这个  $x_i$ , 所余的集仍然能生成  $X$ . 这种手续重复  $r$  次就得到一个包含  $\{y_1, \dots, y_r\}$  的向量组; 据(a), 它是  $X$  的一个基.

**9.4 定义** 向量空间  $X$  到向量空间  $Y$  的一个映射  $A$  叫做线性变换, 假如对于所有  $x_1, x_2, x \in X$  及所有标量  $c$

$$A(\mathbf{x}_1 + \mathbf{x}_2) = A\mathbf{x}_1 + A\mathbf{x}_2, \quad A(c\mathbf{x}) = cA\mathbf{x}$$

成立. 如果  $A$  是线性的, 便时常把  $A(\mathbf{x})$  写成  $A\mathbf{x}$ .

注意,  $A$  若是线性的, 便有  $A\mathbf{0} = \mathbf{0}$ . 还要注意, 一个把  $X$  变成  $Y$  的线性变换, 完全决定于它关于任何基的作用: 如果  $\{\mathbf{x}_1, \dots, \mathbf{x}_n\}$  是  $X$  的一个基, 那么每个  $\mathbf{x} \in X$  有惟一的一个表示式

$$\mathbf{x} = \sum_{i=1}^{n} c_i \mathbf{x}_i,$$

而  $A$  的一次性(线性)容许我们用公式

$$A\mathbf{x} = \sum_{i=1}^{n} c_i A\mathbf{x}_i.$$

从向量  $A\mathbf{x}_1, \dots, A\mathbf{x}_n$  及从标  $c_1, \dots, c_n$  计算  $A\mathbf{x}$ .

$X$  到  $X$  的线性变换, 时常叫做  $X$  上的线性算子. 若  $A$  是  $X$  上的线性算子, 它(i)是 1-1 的, (ii)把  $X$  映满  $X$ , 则说  $A$  是可逆的. 这时可以在  $X$  上定义一个线性算子  $A^{-1}$ , 要它对于所有  $\mathbf{x} \in X$  使得  $A^{-1}(A\mathbf{x}) = \mathbf{x}$  成立. 不难对于所有  $\mathbf{x} \in X$  证明  $A(A^{-1}\mathbf{x}) = \mathbf{x}$ , 并且  $A^{-1}$  是线性的.

关于有限维向量空间上线性算子的一个重要事实是, 上述条件(i)与(ii)中的每一个, 都可推出另一个:

**9.5 定理** 有限维向量空间  $X$  上的线性算子  $A$  是 1-1 的, 当且仅当  $A$  的值域是  $X$  全体.

证 设  $\{\mathbf{x}_1, \dots, \mathbf{x}_n\}$  是  $X$  的一个基.  $A$  的线性, 说明它的值域  $\mathcal{R}(A)$  是集  $Q = \{A\mathbf{x}_1, \dots, A\mathbf{x}_n\}$  的生成. 于是由定理 9.3(a)可以推得,  $\mathcal{R}(A) = X$  当且仅当  $Q$  是无关的. 现在要证明  $Q$  是无关的, 当且仅当  $A$  是 1-1 的.

设  $A$  是 1-1 的, 且  $\sum c_i A\mathbf{x}_i = \mathbf{0}$ . 于是  $A(\sum c_i \mathbf{x}_i) = \mathbf{0}$ , 因之  $\sum c_i \mathbf{x}_i = \mathbf{0}$ . 由此  $c_1 = \dots = c_n = 0$ . 即  $Q$  是无关的.

反之, 设  $Q$  是无关的. 如果  $A(\sum c_i \mathbf{x}_i) = \mathbf{0}$ , 于是  $\sum c_i A\mathbf{x}_i = \mathbf{0}$ . 因此  $c_1 = \dots = c_n = 0$ . 所以只有当  $\mathbf{x} = \mathbf{0}$  时才有  $A\mathbf{x} = \mathbf{0}$ . 如果  $A\mathbf{x} = A\mathbf{y}$ , 那么  $A(\mathbf{x} - \mathbf{y}) = A\mathbf{x} - A\mathbf{y} = \mathbf{0}$ , 因此  $\mathbf{x} - \mathbf{y} = \mathbf{0}$ . 这就是说  $A$  是 1-1 的.

**9.6 定义**

(a) 设  $L(X, Y)$  是向量空间  $X$  到向量空间  $Y$  内的所有线性变换构成的集. 把  $L(X, X)$  简写成  $L(X)$ . 若  $A_1, A_2 \in L(X, Y)$  而  $c_1, c_2$  是标量. 定义  $c_1 A_1 + c_2 A_2$  是这样一个变换:

$$(c_1 A_1 + c_2 A_2)\mathbf{x} = c_1 A_1 \mathbf{x} + c_2 A_2 \mathbf{x} \quad (\mathbf{x} \in X).$$

显然,  $c_1 A_1 + c_2 A_2 \in L(X, Y)$ .

(b) 设  $X, Y, Z$  为向量空间. 若  $A \in L(X, Y)$ ,  $B \in L(Y, Z)$ , 将  $A$  与  $B$  的

复合

$$(BA)x = B(Ax) \quad (x \in X).$$

定义为它们的乘积  $BA$ . 那么  $BA \in L(X, Z)$ .

注意,  $BA$  不必与  $AB$  相同; 即使  $X=Y=Z$  也是这样.

(c) 对于  $A \in L(R^n, R^m)$ , 定义  $A$  的范数  $\|A\|$  为所有数  $|Ax|$  的最小上界  $\sup$ , 这里  $x$  取遍  $R^n$  中合于  $|x| \le 1$  的一切向量  $x$ .

注意, 不等式

$$|Ax| \le \|A\| |x|$$

对于所有  $x \in R^n$  成立. 又如果  $\lambda$  对于所有  $x \in R^n$  使  $|Ax| \le \lambda |x|$  成立, 那么  $\|A\| \le \lambda$ .

**9.7 定理**

- (a) 若  $A \in L(R^n, R^m)$ , 则  $\|A\| < \infty$  且  $A$  为  $R^n$  到  $R^m$  的一致连续映射.  
(b) 若  $A, B \in L(R^n, R^m)$ ,  $c$  为一标量, 那么

$$\|A + B\| \le \|A\| + \|B\|, \quad \|cA\| = |c| \|A\|.$$

以  $\|A - B\|$  作为  $A, B$  之间的距离, 那么  $L(R^n, R^m)$  就是一个度量空间.

- (c) 若  $A \in L(R^n, R^m)$ , 而  $B \in L(R^m, R^k)$ , 则

$$\|BA\| \le \|B\| \|A\|.$$

证

(a) 设  $\{e_1, \dots, e_n\}$  为  $R^n$  中的标准基, 又设  $x = \sum c_i e_i$ ,  $|x| \le 1$ , 由此对于所有  $i=1, 2, \dots, n$ ,  $|c_i| \le 1$ . 于是

$$|Ax| = \left| \sum c_i A e_i \right| \le \sum |c_i| |A e_i| \le \sum |A e_i|.$$

所以

$$\|A\| \le \sum_{i=1}^{n} |A e_i| < \infty.$$

因为当  $x, y \in R^n$  时  $|Ax - Ay| \le \|A\| |x - y|$ , 所以  $A$  是一致连续的.

- (b)(b)中的不等式, 由不等式

$$|(A+B)x| = |Ax + Bx| \le |Ax| + |Bx| \le (\|A\| + \|B\|) |x| \text{ 推来.}$$

- (b)中第二部分按同样方式证明. 若

$$A, B, C \in L(R^n, R^m),$$

可得到三角形不等式

$$\|A - C\| = \|(A - B) + (B - C)\| \le \|A - B\| + \|B - C\|,$$

易证  $\|A-B\|$  有度量的其他性质.

(c)最后, 由下式推出(c):

$$|(BA)x| = |B(Ax)| \le \|B\| \cdot |Ax| \le \|B\| \|A\| |x|.$$

因为我们现在在空间  $L(R^n, R^n)$  内有了度量, 开集、连续等概念对这些空间就有了意义. 下面的定理就要利用这些概念.

**9.8 定理** 设  $\Omega$  为  $R^n$  上所有可逆线性算子的集.

(a)若  $A \in \Omega$ ,  $B \in L(R^n)$ , 而且

$$\|B-A\| \cdot \|A^{-1}\| < 1,$$

则  $B \in \Omega$ .

(b)  $\Omega$  是  $L(R^n)$  的开子集, 映射  $A \to A^{-1}$  在  $\Omega$  上是连续的. (显然, 它又是把  $\Omega$  映满  $\Omega$  的 1-1 映射, 它是其自身的逆.)

证

(a)令  $\|A^{-1}\| = 1/a$ , 令  $\|B-A\| = \beta$ , 那么  $\beta < a$ . 对于每个  $x \in R^n$ ,

$$\begin{aligned} a|x| &= a|A^{-1}Ax| \le a\|A^{-1}\| \cdot |Ax| \\ &= |Ax| \le |(A-B)x| + |Bx| \le \beta|x| + |Bx|, \end{aligned}$$

所以,

$$(a-\beta)|x| \le |Bx| \quad (x \in R^n). \quad (1)$$

因为  $a-\beta > 0$ , (1)说明只要  $x \neq 0$ , 则  $Bx \neq 0$ . 所以  $B$  是 1-1 的. 根据定理 9.5,  $B \in \Omega$ . 这对于一切合于  $\|B-A\| < a$  的  $B$  都成立. 这样就证明了(a)而且  $\Omega$  是开集.

(b)然后在(1)里把  $x$  换作  $B^{-1}y$ . 所得的不等式

$$(a-\beta)|B^{-1}y| \le \|BB^{-1}y\| = |y| \quad (y \in R^n) \quad (2)$$

说明  $\|B^{-1}\| \le (a-\beta)^{-1}$ . 于是恒等式

$$B^{-1} - A^{-1} = B^{-1}(A-B)A^{-1},$$

与定理 9.7(c)合起来就得出

$$\|B^{-1} - A^{-1}\| \le \|B^{-1}\| \|A-B\| \|A^{-1}\| \le \frac{\beta}{a(a-\beta)}.$$

因为当  $B \to A$  时,  $\beta \to 0$ , 这证明了(b)中连续性的论断.

**9.9 矩阵** 设  $\{x_1, \dots, x_n\}$  与  $\{y_1, \dots, y_m\}$  分别为向量空间  $X$  与  $Y$  的基, 于是每个  $A \in L(X, Y)$  确定一组数  $a_{ij}$ , 使得

$$Ax_j = \sum_{i=1}^{m} a_{ij} y_i \quad (1 \le j \le n). \quad (3)$$

把这些数形象地写成一个  $m$  行  $n$  列的长方阵是方便的；称这个长方阵为  $m$  行  $n$  列的矩阵（又简称为  $m \times n$  矩阵）。

$$[A] = \begin{bmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \cdots & \cdots & \cdots & \cdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{bmatrix}$$

注意，向量  $Ax_j$  对于基  $\{y_1, \dots, y_m\}$  的坐标出现在  $[A]$  的第  $j$  列，所以向量  $Ax_j$  往往叫做列向量。应用这个名词，可以说  $A$  的值域是由  $[A]$  的列向量生成的。

若  $x = \sum c_j x_j$ ，由  $A$  的线性及(3)式，就得到

$$Ax = \sum_{j=1}^{m} \left( \sum_{i=1}^{n} a_{ij} c_j \right) y_i. \quad (4)$$

所以， $Ax$  的坐标为  $\sum a_{ij} c_j$ 。注意，在(3)中按  $a_{ij}$  的第一个下标求和；而当计算坐标时，则是按第二个下标求和。

假定已经给出了一个具有实数阵元  $a_{ij}$  的  $m \times n$  矩阵。如果这时  $A$  由(4)定义，显然  $A \in L(X, Y)$ ，而且  $[A]$  就是所给的矩阵。于是，在  $L(X, Y)$  与所有实  $m \times n$  矩阵的集间，存在一个自然的 1-1 对应。可是还要强调， $[A]$  不只是依赖于  $A$ ，还与  $X$  及  $Y$  中基的选择有关。如果换基的话，同一个  $A$  可以导致许多不同的矩阵；反之亦然。我们不打算再进一步去讨论这一点，因为我们将固定的基上进行工作（关于这问题，在 § 9.37 里提供了一些评注）。

若  $Z$  是第三个向量空间，具有基  $\{z_1, \dots, z_p\}$ ，如果  $A$  由(3)式给出，而

$$By_j = \sum_k b_{kj} z_k, \quad (BA)x_j = \sum_k c_{kj} z_k,$$

那么  $A \in L(X, Y)$ ， $B \in L(Y, Z)$ ， $BA \in L(X, Z)$ ；又因为

$$\begin{aligned} B(Ax_j) &= B \sum_i a_{ij} y_i = \sum_i a_{ij} By_i \\ &= \sum_i a_{ij} \sum_k b_{kj} z_k \\ &= \sum_k \left( \sum_i b_{kj} a_{ij} \right) z_k, \end{aligned}$$

那么， $\{z_1, \dots, z_p\}$  的无关性就说明

$$c_{kj} = \sum_i b_{ki} a_{ij} \quad (1 \le k \le p, \quad 1 \le j \le n). \quad (5)$$

这说明了如何由  $[B]$  和  $[A]$  来计算  $p \times n$  矩阵  $[BA]$ 。如果我们把  $[B][A]$  定义为

[BA], 那么(5)式描绘了矩阵乘法的普通法则.

最后, 设  $\{x_1, \dots, x_n\}$  与  $\{y_1, \dots, y_m\}$  为  $R^n$  与  $R^m$  的标准基, 而  $A$  由(4)给出. 从 Schwarz 不等式, 得到

$$\begin{aligned} |Ax|^2 &= \sum_i \left( \sum_j a_{ij} c_j \right)^2 \le \sum_i \left( \sum_j a_{ij}^2 \cdot \sum_j c_j^2 \right) \\ &= \sum_{i,j} a_{ij}^2 |x|^2. \end{aligned}$$

所以

$$\|A\| \le \left\{ \sum_{i,j} a_{ij}^2 \right\}^{1/2}. \quad (6)$$

如果  $A, B \in L(R^n, R^m)$ , 而把(6)中的  $A$  代以  $B-A$ , 就可以知道, 矩阵元  $a_{ij}$  是某个参变量的连续函数时,  $A$  也是连续的. 更确切地说, 就是:

若  $S$  是一个度量空间, 且  $a_{11}, \dots, a_{mm}$  是  $S$  上的实连续函数, 又若对于每个  $p \in S$ ,  $A_p$  是  $R^n$  到  $R^m$  内的线性变换, 它的矩阵的阵元为  $a_{ij}(p)$ , 那么映射  $p \to A_p$  为  $S$  到  $L(R^n, R^m)$  内的连续映射.

## 微分法

**9.10 前言**

为了得到定义在  $R^n$  (或  $R^n$  中的开子集) 上的函数的导数定义, 现在对大家熟悉的  $n=1$  的情形, 取另一种观点, 看看怎样把  $n=1$  时的导数解释一下, 便能自然地扩充到  $n>1$  的情况.

设  $f$  是定义在  $(a, b) \subset R^1$  上的实函数,  $x \in (a, b)$ , 那么,  $f'(x)$  通常定义作实数

$$\lim_{h \to 0} \frac{f(x+h) - f(x)}{h}, \quad (7)$$

当然, 这里假定这个极限存在. 于是

$$f(x+h) - f(x) = f'(x)h + r(h), \quad (8)$$

这里“余项” $r(h)$  很小, 这意思是说

$$\lim_{h \to 0} \frac{r(h)}{h} = 0. \quad (9)$$

注意, (8)式把差式  $f(x+h) - f(x)$  表示成  $h$  的线性函数  $f'(x)h$  与一个小余项的和, 这里线性函数的功能是把  $h$  变成  $f'(x)h$ . 所以我们可以不说  $f$  在  $x$  的导数是一个实数, 而说它是在  $R^1$  上把  $h$  变为  $f'(x)h$  的线性算子.

(注意, 每个实数  $a$  都能引出  $R^1$  上的线性算子; 所说的这个算子, 只是用  $a$  去乘. 反之, 把  $R^1$  变成  $R^1$  的每个线性函数, 都是乘以某个实数. 正是  $R^1$  与

$L(R^1)$ 之间的这个 1-1 对应关系, 促成了上面的说法.)

其次考虑把  $(a, b) \subset R^1$  映入  $R^m$  的函数  $f$ . 这时,  $f'(x)$  被定义做满足

$$\lim_{h \to 0} \left\{ \frac{f(x+h) - f(x)}{h} - y \right\} = 0. \quad (10)$$

的向量  $y \in R^m$  (假如它存在的话). 这个式子可以重写成

$$f(x+h) - f(x) = hy + r(h), \quad (11)$$

这里, 当  $h \to 0$  时,  $r(h)/h \to 0$ . (11) 式右端的主项, 又是  $h$  的线性函数. 只要把每个  $h \in R^1$  与向量  $hy \in R^m$  相联系, 就使每个  $y \in R^m$  产生一个从  $R^1$  到  $R^m$  内的线性变换.  $R^m$  与  $L(R^1, R^m)$  的同一化, 使我们能把  $f'(x)$  看作  $L(R^1, R^m)$  的一员.

于是, 如果  $f$  是  $(a, b) \subset R^1$  映入  $R^m$  内的可微映射, 并且  $x \in (a, b)$ , 那么  $f'(x)$  就是把  $R^1$  映入  $R^m$  的线性变换, 这线性变换适合

$$\lim_{h \to 0} \frac{f(x+h) - f(x) - f'(x)h}{h} = 0, \quad (12)$$

或与之等价的式子

$$\lim_{h \to 0} \frac{|f(x+h) - f(x) - f'(x)h|}{|h|} = 0. \quad (13)$$

对于  $n > 1$  的情形, 现在已经准备好了.

**9.11 定义** 设  $E$  是  $R^n$  中的开集,  $f$  把  $E$  映入  $R^m$  内,  $x \in E$ . 如果存在把  $R^n$  映入  $R^m$  的线性变换  $A$ , 使得

$$\lim_{h \to 0} \frac{|f(x+h) - f(x) - Ah|}{|h|} = 0, \quad (14)$$

就说  $f$  在  $x$  处可微, 并且写成

$$f'(x) = A. \quad (15)$$

如果  $f$  在每个  $x \in E$  可微, 就说  $f$  在  $E$  内可微.

在 (14) 式中, 当然不用说就知道  $h \in R^n$ . 如果  $|h|$  足够小, 因为  $E$  是开集, 所以  $x+h \in E$ . 这样,  $f(x+h)$  有定义而  $\in R^m$ . 又因  $A \in L(R^n, R^m)$ , 而  $Ah \in R^m$ . 于是

$$f(x+h) - f(x) - Ah \in R^m.$$

在 (14) 式的分子上的范数是  $R^m$  中的范数. 而在分母中  $h$  的范数是  $R^n$  中的范数.

在进一步讨论之前, 必须先解决明摆着的惟一性问题.

**9.12 定理** 设  $E$  和  $f$  的意义如定义 9.11 的一样,  $x \in E$ . (14) 式在  $A = A_1$  时

及  $A = A_2$  时都成立. 那么  $A_1 = A_2$ .

证 如果  $B = A_1 - A_2$ . 由不等式

$$|Bh| \le |f(x+h) - f(x) - A_1h| + |f(x+h) - f(x) - A_2h|$$

即知, 当  $h \to 0$  时,  $|Bh|/|h| \to 0$ . 对于固定的  $h \neq 0$ , 则有

$$\left| \frac{B(th)}{th} \right| \to 0, \quad \text{当 } t \to 0. \quad (16)$$

由于  $B$  是线性的, (16) 式左端与  $t$  无关.

因此, 对每个  $h \in R^n$ ,  $Bh = 0$ . 从而  $B = 0$

**9.13 评注**

(a) 关系 (14) 能被写成

$$f(x+h) - f(x) = f'(x)h + r(h) \quad (17)$$

的形式, 这里余项  $r(h)$  适合于

$$\lim_{h \to 0} \frac{|r(h)|}{|h|} = 0. \quad (18)$$

像 § 9.10 那样, 可以把 (17) 式说成是, 对于固定的  $x$  及小的  $h$ , (17) 式的左端近似地等于  $f'(x)h$ , 就是说, 近似地等于一个线性变换作用于  $h$  上的值.

(b) 设  $f$  及  $E$  都像定义 9.11 中的那样,  $f$  在  $E$  内可微. 于是对于每个  $x \in E$ ,  $f'(x)$  是个函数, 即是把  $R^n$  映入  $R^m$  内的线性变换. 但  $f'$  又是函数:  $f'$  把  $E$  映入  $L(R^n, R^m)$  内.

(c) 看看 (17) 式即知, 在  $f$  可微的点上,  $f$  都连续.

(d) 由 (14) 式及 (17) 式所定义的导数, 常被称为  $f$  在  $x$  的微分, 或叫做  $f$  在  $x$  的全导数, 以便与后面将出现的偏导数相区别.

**9.14 例** 我们已经把  $R^n$  映入  $R^m$  内的函数的导数, 定义为把  $R^n$  映入  $R^m$  内的线性变换. 那么, 这样一个线性变换的导数是什么呢? 答案很简单.

如果  $A \in L(R^n, R^m)$  并且  $x \in R^n$ , 那么

$$A'(x) = A. \quad (19)$$

注意,  $x$  只在 (19) 的左端出现, 但不在右端出现. (19) 式的两边都是  $L(R^n, R^m)$  的成员. 然而  $Ax \in R^m$ .

由于  $A$  是线性的, 所以

$$A(x+h) - Ax = Ah. \quad (20)$$

因此, (19) 式的证明是显然的. 于  $f(x) = Ax$  时, (14) 式中的分子, 对每个  $h \in R^n$  来说都是 0. 因之在 (17) 式中

$$r(h) = 0.$$

现将链导法(定理 5.5)推广到这里来.

**9.15 定理** 设  $E$  是  $R^n$  的开集,  $f$  把  $E$  映入  $R^m$  内,  $f$  在  $x_0 \in E$  可微,  $g$  把包含  $f(E)$  的一个开集映入  $R^k$  内, 且  $g$  在  $f(x_0)$  可微. 那么, 由

$$F(x) = g(f(x))$$

确定的, 把  $E$  映入  $R^k$  内的映射  $F$  在  $x_0$  可微, 并且

$$F'(x_0) = g'(f(x_0))f'(x_0). \quad (21)$$

(21)的右端是两个线性变换的积和 § 9.6 定义的一样.

**证** 令  $y_0 = f(x_0)$ ,  $A = f'(x_0)$ ,  $B = g'(y_0)$ , 对于使  $f(x_0 + h)$  及  $g(y_0 + k)$  有定义的所有的  $h \in R^n$  和  $k \in R^m$ , 规定

$$u(h) = f(x_0 + h) - f(x_0) - Ah,$$

$$v(k) = g(y_0 + k) - g(y_0) - Bk,$$

于是

$$|u(h)| = \varepsilon(h)|h|, \quad |v(k)| = \eta(k)|k|, \quad (22)$$

这里, 当  $h \to 0$  时  $\varepsilon(h) \to 0$ , 而当  $k \to 0$  时,  $\eta(k) \to 0$ .

给定  $h$ , 令  $k = f(x_0 + h) - f(x_0)$ . 那么

$$|k| = |Ah + u(h)| \le [\|A\| + \varepsilon(h)]|h|, \quad (23)$$

且

$$\begin{aligned} F(x_0 + h) - F(x_0) - BAh &= g(y_0 + k) - g(y_0) - BAh \\ &= B(k - Ah) + v(k) \\ &= Bu(h) + v(k). \end{aligned}$$

因此, 对于  $h \neq 0$ , 由(22)及(23)式可得出

$$\begin{aligned} \frac{|F(x_0 + h) - F(x_0) - BAh|}{|h|} &\le \|B\|\varepsilon(h) \\ &\quad + [\|A\| + \varepsilon(h)]\eta(k). \end{aligned}$$

令  $h \to 0$ , 则  $\varepsilon(h) \to 0$ . 据(23), 又有  $k \to 0$ , 因此  $\eta(k) \to 0$ . 随之,  $F'(x_0) = BA$ , 此即(21)式所说的.

**9.16 偏导数** 再考虑把开集  $E \subset R^n$  映入  $R^m$  的函数  $f$ . 设  $\{e_1, \dots, e_n\}$  及  $\{u_1, \dots, u_m\}$  分别是  $R^n$  及  $R^m$  的标准基.  $f$  的分量是由

$$f(x) = \sum_{i=1}^{m} f_i(x) u_i \quad (x \in E), \quad (24)$$

确定的实函数  $f_1, \dots, f_m$ ; (24)式还可以等价地写成

$$f_i(x) = f(x) \cdot u_i, \quad 1 \le i \le m.$$

对于  $x \in E$ ,  $1 \le i \le m$ ,  $1 \le j \le n$ , 定义

$$(D_j f_i)(x) = \lim_{t \to 0} \frac{f_i(x + te_j) - f_i(x)}{t}, \quad (25)$$

这里假定此极限存在. 把  $f_i(x)$  写成  $f_i(x_1, \dots, x_n)$ , 就知道  $D_j f_i$  是  $f_i$  对于  $x_j$  的导数(其他变量保持不变). 所以, 经常用记号

$$\frac{\partial f_i}{\partial x_j} \quad (26)$$

代替  $D_j f_i$ , 而  $D_j f_i$  被叫做偏导数.

对于单变量函数, 只要求导数存在的许多情况, 对于多变量函数, 却需要各个偏导数连续, 或至少要求其有界. 例如第 4 章习题 7 中所说的函数  $f$  及  $g$ , 虽然它们的各个偏导数在  $R^2$  的每个点上存在, 但  $f$  及  $g$  都不连续. 对于函数连续, 即使所有偏导数都存在, 也不能保证其在定义 9.11 的意义下可微; 参看习题 6 与 14 及定理 9.21.

然而, 如果已知  $f$  在某点  $x$  可微, 那么, 它的各个偏导数必在  $x$  处存在, 并且它们能完全决定线性变换  $f'(x)$ :

**9.17 定理** 设  $f$  把开集  $E \subset R^n$  映入  $R^m$  内,  $f$  在点  $x \in E$  可微. 那么, 偏导数  $D_j f_i(x)$  存在, 且

$$f'(x)e_j = \sum_{i=1}^{m} (D_j f_i)(x)u_i \quad (1 \le j \le n). \quad (27)$$

这里像 § 9.16 那样,  $\{e_1, \dots, e_n\}$ ,  $\{u_1, \dots, u_m\}$  分别是  $R^n$  及  $R^m$  的标准基.

证 固定  $j$ . 因  $f$  在  $x$  可微,

$$f(x + te_j) - f(x) = f'(x)(te_j) + r(te_j),$$

这里, 当  $t \to 0$  时,  $|r(te_j)|/t \to 0$ . 因为  $f'(x)$  是线性的, 所以

$$\lim_{t \to 0} \frac{f(x + te_j) - f(x)}{t} = f'(x)e_j. \quad (28)$$

现在, 如果像在(24)式中那样把  $f$  用它的分量表示出来, 那么, (28)式变为

$$\lim_{t \to 0} \sum_{i=1}^{m} \frac{f_i(x + te_j) - f_i(x)}{t} u_i = f'(x)e_j. \quad (29)$$

随之, 当  $t \to 0$  时, 上面的和式中的每个商有极限(看定理 4.10), 于是每个  $(D_j f_i)(x)$  存在, 而由(29)即得(27).

定理 9.17 有一些推论:

照 § 9.9 那样, 令  $[f'(x)]$  是关于上述标准基的  $f'(x)$  的表现矩阵. 那么  $f'(x)$  是  $[f'(x)]$  的第  $j$  个列向量, 而 (27) 式就说明数  $(D_j f_i)(x)$  占有  $[f'(x)]$  的第  $i$  行第  $j$  列的位置. 即是

$$[f'(x)] = \begin{bmatrix} (D_1 f_1)(x) & \cdots & (D_n f_1)(x) \\ \cdots & \cdots & \cdots \\ (D_1 f_m)(x) & \cdots & (D_n f_m)(x) \end{bmatrix}.$$

如果  $h = \sum h_i e_i$  是  $R^n$  中的任何向量, 那么, 由 (27) 式说明

$$f'(x)h = \sum_{i=1}^{m} \left\{ \sum_{j=1}^{n} (D_j f_i)(x) h_j \right\} u_i. \quad (30)$$

**9.18 例** 设  $\gamma$  是把开区间  $(a, b) \subset R^1$  映入开集  $E \subset R^n$  内的可微映射, 换句话说,  $\gamma$  是  $E$  内的可微曲线. 令  $f$  是域  $E$  上的实值可微函数. 于是  $f$  是从  $E$  到  $R^1$  内的可微映射. 定义

$$g(t) = f(\gamma(t)) \quad (a < t < b). \quad (31)$$

于是由链导法得到

$$g'(t) = f'(\gamma(t)) \gamma'(t) \quad (a < t < b). \quad (32)$$

因  $\gamma'(t) \in L(R^1, R^n)$  而  $f'(\gamma(t)) \in L(R^n, R^1)$ , 可见  $g'(t)$  是由 (32) 确定的  $R^1$  上的线性算子. 这与  $g$  把  $(a, b)$  映入  $R^1$  的事实是一致的. 然而  $g'(t)$  也能当作一个实数 (这已在 § 9.10 中讨论过). 我们即将看到, 这个实数能够用  $f$  的偏导数及  $\gamma$  的分量的导数算出来.

对于  $R^n$  的标准基  $\{e_1, \dots, e_n\}$  来说,  $[\gamma'(t)]$  是  $n \times 1$  矩阵 (“列矩阵”), 它的第  $i$  行上是  $\gamma'_i(t)$ , 其中  $\gamma_1, \dots, \gamma_n$  是  $\gamma$  的分量. 对于每个  $x \in E$ ,  $[f'(x)]$  是  $1 \times n$  矩阵 (“行矩阵”), 它的第  $j$  列上是  $(D_j f)(x)$ . 因此  $g'(t)$  是  $1 \times 1$  矩阵, 它的惟一的阵元是实数

$$g'(t) = \sum_{i=1}^{n} (D_i f)(\gamma(t)) \gamma'_i(t). \quad (33)$$

这是链导法的常遇到的一种特殊情形, 并可按下面的方式来表述.

联系着每个  $x \in E$  有一个向量, 称为  $f$  在  $x$  的“梯度”, 它的定义是

$$(\nabla f)(x) = \sum_{i=1}^{n} (D_i f)(x) e_i. \quad (34)$$

因为

$$\gamma'(t) = \sum_{i=1}^{n} \gamma'_i(t) e_i, \quad (35)$$

所以(33)式能写成向量 $(\nabla f)(\gamma(t))$ 与 $\gamma'(t)$ 的标量积的形式:

$$g'(t) = (\nabla f)(\gamma(t)) \cdot \gamma'(t). \quad (36)$$

固定一个 $x \in E$ , 令 $u \in R^n$ 是单位向量(即 $|u| = 1$ )并且按照

$$\gamma(t) = x + tu \quad (-\infty < t < \infty). \quad (37)$$

限定 $\gamma$ . 于是对任何 $t$ 都有 $\gamma'(t) = u$ . 因之, (36)式说明:

$$g'(0) = (\nabla f)(x) \cdot u. \quad (38)$$

另一方面, (37)式表示

$$g(t) - g(0) = f(x + tu) - f(x).$$

因此, 从(38)式得到

$$\lim_{t \to 0} \frac{f(x + tu) - f(x)}{t} = (\nabla f)(x) \cdot u. \quad (39)$$

(39)中的极限, 时常被称为 $f$ 在点 $x$ 的, 沿着单位向量 $u$ 的方向的方向导数, 并记作 $(D_u f)(x)$ .

如果 $f$ 和 $x$ 都固定, 但 $u$ 变动, 那么(39)式说明, 当 $u$ 是 $(\nabla f)(x)$ 的正数倍时,  $(D_u f)(x)$ 达到它的最大值. [这里 $(\nabla f)(x) = 0$ 的情况除外].

如果 $u = \sum u_i e_i$ , 那么(39)式说明,  $(D_u f)(x)$ 能用 $f$ 在 $x$ 的偏导数, 借公式

$$(D_u f)(x) = \sum_{i=1}^{n} (D_i f)(x) u_i \quad (40)$$

表出来.

上面的某些概念将在下列定理里起作用.

**9.19 定理** 设 $f$ 把凸开集 $E \subset R^n$ 映入 $R^m$ 内,  $f$ 在 $E$ 内可微, 并有对于每个 $x \in E$ 使

$$\|f'(x)\| \le M$$

都成立的实数 $M$ . 那么, 对于一切 $a \in E$ 及 $b \in E$ ,

$$\|f(b) - f(a)\| \le M \|b - a\|.$$

**证** 固定了 $a \in E$ ,  $b \in E$ , 对一切 $t \in R^1$ 定义

$$\gamma(t) = (1 - t)a + tb,$$

因为 $E$ 是凸集, 当 $0 \le t \le 1$ 时 $\gamma(t) \in E$ . 令

$$g(t) = f(\gamma(t)).$$

于是

$$g'(t) = f'(\gamma(t))\gamma'(t) = f'(\gamma(t))(b-a),$$

因而对于一切  $t \in [0, 1]$

$$|g'(t)| \le \|f'(\gamma(t))\| \cdot |b-a| \le M|b-a|$$

据定理 5.19.

$$|g(1) - g(0)| \le M|b-a|.$$

但  $g(0)=f(a)$ ,  $g(1)=f(b)$ , 所以定理获证.

**推论** 如果再加上条件: 对于一切  $x \in E$ ,  $f'(x)=0$ , 那么,  $f$  是常值映射.

**证** 只需注意到定理中的题设在  $M=0$  时成立就行了.

**9.20 定义** 设  $f$  是开集  $E \subset R^n$  到  $R^m$  内的可微映射. 如果  $f'$  是把  $E$  映入  $L(R^n, R^m)$  的连续映射, 就说  $f$  是在  $E$  内连续可微的.

更明确地说, 它要求对于每个  $x \in E$  及每个  $\varepsilon > 0$ , 存在着  $\delta > 0$ , 使得当  $y \in E$  及  $|x-y| < \delta$ ,

$$\|f'(y) - f'(x)\| < \varepsilon$$

若是这样的话, 我们也说  $f$  是  $C^1$  映射, 或说  $f \in C^1(E)$ .

**9.21 定理** 设  $f$  把开集  $E \subset R^n$  映入  $R^m$  内. 那么, 当且仅当  $f$  的所有偏导数  $D_j f_i$  ( $1 \le i \le m$ ,  $1 \le j \le n$ ) 在  $E$  上都存在并且连续时,  $f \in C^1(E)$ .

**证** 首先假定  $f \in C^1(E)$ . 由(27)式, 对于一切  $i, j$  及一切  $x \in E$ ,

$$(D_j f_i)(x) = (f'(x)e_j) \cdot u_i$$

因之

$$(D_j f_i)(y) - (D_j f_i)(x) = \{[f'(y) - f'(x)]e_j\} \cdot u_i$$

再因  $|u_i| = |e_j| = 1$ , 随之有

$$\begin{aligned} |(D_j f_i)(y) - (D_j f_i)(x)| &\le |[f'(y) - f'(x)]e_j| \\ &\le \|f'(y) - f'(x)\|. \end{aligned}$$

因此  $D_j f_i$  连续.

关于逆命题, 只需考虑  $m=1$  的情况(为什么?). 固定  $x \in E$  及  $\varepsilon > 0$ . 因  $E$  是开集, 便有开球  $S \subset E$ , 其中心在  $x$  而半径为  $r$ . 由于  $D_j f$  连续, 所以能把  $r$  取得很小, 以致于  $y \in S$  时

$$|(D_j f)(y) - (D_j f)(x)| < \frac{\varepsilon}{n} \quad (y \in S, 1 \le j \le n). \quad (41)$$

设  $h = \sum h_i e_i$ ,  $|h| < r$ , 又命  $v_0 = 0$ , 而当  $1 \le k \le n$  时, 命  $v_k = h_1 e_1 + \cdots + h_k e_k$ .

于是

$$f(x+h) - f(x) = \sum_{j=1}^{n} [f(x+v_j) - f(x+v_{j-1})]. \quad (42)$$

因为当  $1 \le k \le n$  时,  $|v_k| < r$ , 又因  $S$  是凸的, 所以连接  $x+v_{j-1}$  与  $x+v_j$  的线段位于球内. 因为  $v_j = v_{j-1} + h_j e_j$ , 由中值定理(5.10), 知道(42)式中的第  $j$  个被加量等于

$$h_j (D_j f)(x + v_{j-1} + \theta_j h_j e_j),$$

这里的  $\theta_j \in (0, 1)$ . 应用(41)式, 知道它与  $h_j (D_j f)(x)$  的差小于  $|h_j| \varepsilon/n$ . 再据(42)式即知对于所有合于  $|h| < r$  的一切  $h$ , 有

$$\left| f(x+h) - f(x) - \sum_{j=1}^{n} h_j (D_j f)(x) \right| \le \frac{1}{n} \sum_{j=1}^{n} |h_j| \varepsilon \le |h| \varepsilon.$$

这就是说,  $f$  在  $x$  处可微, 且  $f'(x)$  是一个线性函数, 它对于每个向量  $h = \sum h_j e_j$  确定一个数  $\sum h_j (D_j f)(x)$ . 矩阵  $[f'(x)]$  由行向量  $(D_1 f)(x), \dots, (D_n f)(x)$  组成; 又因  $D_1 f, \dots, D_n f$  都是  $E$  上的连续函数, 那么 § 9.9 的结束语说明  $f \in \mathcal{C}^1(E)$ .

## 凝缩原理

现在我们中断了微分的讨论, 而插入在任何完备度量空间都有效的不动点定理. 这个定理将在反函数定理的证明中用到.

**9.22 定义** 设  $X$  是度量为  $d$  的度量空间. 如果  $\varphi$  把  $X$  映入  $X$  内, 并且存在着数  $c < 1$ , 能够对于一切  $x, y \in X$ , 使得

$$d(\varphi(x), \varphi(y)) \le cd(x, y), \quad (43)$$

那么, 就说  $\varphi$  是  $X$  到  $X$  内的一个凝缩函数.

**9.23 定理** 如果  $X$  是完备度量空间,  $\varphi$  是  $X$  到  $X$  内的凝缩函数, 那么, 存在着惟一合于  $\varphi(x) = x$  的  $x \in X$ .

换句话说, 就是  $\varphi$  有惟一的不动点. 惟一性是明显的, 因为如果  $\varphi(x) = x$  并且  $\varphi(y) = y$ , 于是由(43)式得知  $d(x, y) \le cd(x, y)$ . 而这只有在  $d(x, y) = 0$  时才能成立.

$\varphi$  的不动点的存在性, 是这个定理的主要部分. 这个证明实际上提供了一种确定不动点位置的构造性的方法.

**证** 任取  $x_0 \in X$ , 而用

$$x_{n+1} = \varphi(x_n) \quad (n = 0, 1, 2, \dots) \quad (44)$$

来递归地定义  $\{x_n\}$ .

选一个合于(43)的  $c < 1$ . 于是当  $n \ge 1$  时

$$d(x_{n+1}, x_n) = d(\varphi(x_n), \varphi(x_{n-1})) \le cd(x_n, x_{n-1}).$$

因此, 由归纳法得

$$d(x_{n+1}, x_n) \le c^n d(x_1, x_0) \quad (n = 0, 1, 2, \dots). \quad (45)$$

如果  $n < m$ , 那么

$$\begin{aligned} d(x_n, x_m) &\le \sum_{i=n+1}^{m} d(x_i, x_{i-1}) \\ &\le (c^n + c^{n+1} + \dots + c^{m-1})d(x_1, x_0) \\ &\le [(1-c)^{-1}d(x_1, x_0)]c^n. \end{aligned}$$

所以  $\{x_n\}$  是 Cauchy 序列. 因为  $X$  完备. 所以有某个  $x \in X$

$$\lim x_n = x.$$

因  $\varphi$  是  $X$  上的凝缩函数, 所以  $\varphi$  在  $X$  上连续(实际上还是一致连续的). 因此

$$\varphi(x) = \lim_{n \to \infty} \varphi(x_n) = \lim_{n \to \infty} x_{n+1} = x.$$

### 反函数定理

粗略地说, 反函数定理说的是, 一个连续可微映射  $f$ , 在使线性变换  $f'(x)$  可逆的点  $x$  的邻域内是可逆的.

**9.24 定理** 设  $f$  是把开集  $E \subset R^n$  映入  $R^n$  内的  $C^1$  映射, 对某个  $a \in E$ ,  $f'(a)$  可逆, 且  $b = f(a)$ . 那么

(a) 在  $R^n$  内存在开集  $U$  及  $V$ , 使得  $a \in U$ ,  $b \in V$ ,  $f$  在  $U$  上是 1-1 的, 并且  $f(U) = V$ ;

(b) 若  $g$  是  $f$  的逆(由(a), 这个逆存在), 它在  $V$  内由

$$g(f(x)) = x \quad (x \in U),$$

确定, 那么  $g \in C^1(V)$ .

把方程  $y = f(x)$  写成分量的形式, 那么, 便可以对于这定理的结论, 得到以下的解释:  $n$  个方程的方程组

$$y_i = f_i(x_1, \dots, x_n) \quad (1 \le i \le n)$$

如果把  $x$  和  $y$  限制在  $a$  和  $b$  的足够小的邻域内, 就能用  $y_1, \dots, y_n$  把  $x_1, \dots, x_n$  解出来; 这组解是惟一的, 并且是连续可微的.

证

(a) 命  $f'(a) = A$ , 并且选一个  $\lambda$  使得

$$2\lambda \|A^{-1}\| = 1. \quad (46)$$

因为  $f'$  在  $a$  连续, 必有以  $a$  为中心的开球  $U \subset E$ , 使得

$$\|f'(x)' - A\| < \lambda \quad (x \in U). \quad (47)$$

我们给每个  $y \in R^n$  配置一个函数  $\varphi$ ,  $\varphi$  的定义是

$$\varphi(x) = x + A^{-1}(y - f(x)) \quad (x \in E). \quad (48)$$

注意,  $f(x) = y$  当且仅当  $x$  是  $\varphi$  的不动点.

因  $\varphi'(x) = I - A^{-1}f'(x) = A^{-1}(A - f'(x))$ , 那么由(46)及(47)式得到

$$\|\varphi'(x)\| < \frac{1}{2} \quad (x \in U). \quad (49)$$

因之, 由定理 9.19 就有

$$|\varphi(x_1) - \varphi(x_2)| \le \frac{1}{2} |x_1 - x_2| \quad (x_1, x_2 \in U), \quad (50)$$

因此,  $\varphi$  在  $U$  中最多有一个不动点; 所以最多有一个  $x \in U$ , 使得  $f(x) = y$ .

这样,  $f$  在  $U$  中是 1-1 映射.

次令  $V = f(U)$ , 并取  $y_0 \in V$ . 于是有某个  $x_0 \in U$  使  $y_0 = f(x_0)$ . 设  $B$  是以  $x_0$  为中心的开球, 其半径  $r > 0$  相当小, 以致闭包  $\bar{B}$  完全含于  $U$  内. 现在要证明, 只要  $|y - y_0| < \lambda r$ , 就必定  $y \in V$ , 当然这也就证明了  $V$  是开集.

固定了  $y$ ,  $|y - y_0| < \lambda r$ . 关于(48)式的  $\varphi$ , 有

$$|\varphi(x_0) - x_0| = |A^{-1}(y - y_0)| < \|A^{-1}\| \lambda r = \frac{r}{2}.$$

如果  $x \in \bar{B}$ , 那么, 由(50)式,

$$\begin{aligned} |\varphi(x) - x_0| &\le |\varphi(x) - \varphi(x_0)| + |\varphi(x_0) - x_0| \\ &< \frac{1}{2} |x - x_0| + \frac{r}{2} \le r; \end{aligned}$$

因此,  $\varphi(x) \in B$ . 注意, 如果  $x_1 \in \bar{B}$ ,  $x_2 \in \bar{B}$ , (50)就成立.

于是,  $\varphi$  是  $\bar{B}$  到  $\bar{B}$  内的凝缩函数.  $\bar{B}$  作为  $R^n$  的闭子集, 必是完备集. 所以定理 9.23 说明  $\varphi$  有不动点  $x \in \bar{B}$ . 对于这个  $x$  来说,  $f(x) = y$ . 于是  $y \in f(\bar{B}) \subset f(U) = V$ .

这就证明了定理中的(a).

(b) 取  $y \in V$ ,  $y + k \in V$ . 于是存在  $x \in U$ ,  $x + h \in U$ , 使  $y = f(x)$ ,  $y + k =$

$f(x+h)$ . 用(48)式里的  $\varphi$ ,

$$\varphi(x+h) - \varphi(x) = h + A^{-1}[f(x) - f(x+h)] = h - A^{-1}k.$$

由(50)式得  $|h - A^{-1}k| \le \frac{1}{2}|h|$ . 因此,  $|A^{-1}k| \ge \frac{1}{2}|h|$ , 并且

$$|h| \le 2\|A^{-1}\| |k| = \lambda^{-1} |k|. \quad (51)$$

由(46), (47)式及定理 9.8 知道  $f'(x)$  有逆, 比如说是  $T$ . 因为

$$\begin{aligned} g(y+k) - g(y) - Tk &= h - Tk \\ &= -T[f(x+h) - f(x) - f'(x)h], \end{aligned}$$

(51)式说明

$$\frac{|g(y+k) - g(y) - Tk|}{|k|} \le \frac{\|T\|}{\lambda} \cdot \frac{|f(x+h) - f(x) - f'(x)h|}{|h|}$$

当  $k \to 0$  时, (51)说明  $h \to 0$ . 上面的不等式的右端也趋于 0. 因之左端也趋于 0. 这就证明了  $g'(y) = T$ . 但  $T$  是  $f'(x) = f'(g(y))$  的逆, 于是

$$g'(y) = \{f'(g(y))\}^{-1} \quad (y \in V). \quad (52)$$

最后, 注意  $g$  是把  $V$  映满  $U$  的连续映射(因为  $g$  是可微的),  $f'$  是  $U$  到  $L(R^n)$  的所有可逆元的集  $\Omega$  中的连续映射. 而由定理 9.8, 它的逆是把  $\Omega$  映满  $\Omega$  的连续映射. 把这些与(52)式结合起来就知道  $g \in \mathcal{C}'(V)$ .

定理证完.

评注 题设  $f \in \mathcal{C}(E)$  的全部力量, 只用在上面证明中的最后一段里. 直到方程(52)以前的所有其他证明, 都是由  $f'(x)$  在  $x \in E$  存在,  $f'(a)$  的可逆性, 及  $f'$  在这一点  $a$  的连续性等导出的. 关于这一点, 请参看 *Amer. Math. Monthly* 1974 年卷 81 第 969~980 页中 A. Nijenhuis 的论文.

下面是反函数定理部分(a)的直接推论.

**9.25 定理** 如果  $f$  是开集  $E \subset R^n$  到  $R^n$  内的  $\mathcal{C}'$  映射,  $f'(x)$  在每个  $x \in E$  可逆, 那么, 对于每个开集  $W \subset E$ ,  $f(W)$  是  $R^n$  的开子集.

换句话说,  $f$  是  $E$  到  $R^n$  内的开映射.

这定理中的假定, 保证每个点  $x \in E$  有一个邻域, 使  $f$  在其中是 1-1 的. 这可说成  $f$  在  $E$  中是局部一对一的. 但这时  $f$  并不一定在  $E$  中是 1-1 的. 关于实例, 看习题 17.

### 隐函数定理

如果  $f$  是平面上的连续可微实函数, 函数  $f$  在点  $(a, b)$  满足  $f(a, b) = 0$  且  $\frac{\partial f}{\partial y}(a, b) \neq 0$ , 那么在  $(a, b)$  的某个邻域内, 方程  $f(x, y) = 0$  能把  $y$  用  $x$  解出. 类似地,

如果在 $(a, b)$ ,  $\frac{\partial f}{\partial x} \neq 0$ , 就能在 $(a, b)$ 附近把 $x$ 解出而用 $y$ 表示. 为了说明题设中 $\frac{\partial f}{\partial y} \neq 0$ 之必要, 可以考虑把函数 $f(x, y) = x^2 + y^2 - 1$ 作为一个实例.

上面这个极不正式的陈述, 是所谓“隐函数定理”的最简单的情形. (定理 9.28 的 $m=n=1$ 的情形). 隐函数定理的证明, 很需要应用连续可微函数的局部性态与它们的各导数非常相像这个事实. 因此, 我们首先证明定理 9.27, 它是定理 9.28 的线性的说法.

**9.26 记号** 如果 $x = (x_1, \dots, x_n) \in R^n$  而 $y = (y_1, \dots, y_m) \in R^m$ . 就把点 (或向量)

$$(x_1, \dots, x_n, y_1, \dots, y_m) \in R^{n+m}.$$

记作 $(x, y)$ . 此后, 在 $(x, y)$ 或在类似的记号中, 第一个阵元总是 $R^n$ 中的向量, 而第二个阵元总是 $R^m$ 中的向量.

每个 $A \in L(R^{n+m}, R^n)$ 能被分裂成两个线性变换 $A_x$ 及 $A_y$ , 它们分别由

$$A_x h = A(h, \mathbf{0}), \quad A_y k = A(\mathbf{0}, k) \quad (53)$$

来确定,  $h \in R^n$ ,  $k \in R^m$ . 于是 $A_x \in L(R^n)$ ,  $A_y \in L(R^m, R^n)$ , 而

$$A(h, k) = A_x h + A_y k. \quad (54)$$

隐函数定理的线性说法现在差不多就是显然的了.

**9.27 定理** 如果 $A \in L(R^{n+m}, R^n)$ 而 $A_x$ 可逆, 那么, 对应于每个 $k \in R^m$ , 有惟一的 $h \in R^n$ 使 $A(h, k) = \mathbf{0}$ .

这个 $h$ 能够从 $k$ 利用公式

$$h = -(A_x)^{-1} A_y k. \quad (55)$$

计算出来.

**证** 由(54)式,  $A(h, k) = \mathbf{0}$ 当且仅当

$$A_x h + A_y k = \mathbf{0},$$

当 $A_x$ 可逆时, 它与(55)式是一样的.

换句话说, 定理 9.27 的结论是, 如果 $k$ 已经给定, 从方程 $A(h, k) = \mathbf{0}$ 能够(惟一地)解出 $h$ 来, 并且 $h$ 是 $k$ 的线性函数. 对于线性代数稍为熟悉的读者, 将发觉这是线性方程组的一个极为熟悉的命题.

**9.28 定理** 设 $f$ 是开集 $E \subset R^{n+m}$ 到 $R^n$ 内的 $C^1$ 映射, 且在某点 $(a, b) \in E$ 使 $f(a, b) = \mathbf{0}$

令 $A = f'(a, b)$ , 并假定 $A_x$ 可逆.

那么, 存在着开集  $U \subset \mathbb{R}^{n+m}$  及  $W \subset \mathbb{R}^m$ ,  $(a, b) \in U$  而  $b \in W$ , 它们有以下的性质:

对应于每个  $y \in W$ , 有惟一的  $x$ , 它合于

$$(x, y) \in U \quad \text{且} \quad \mathbf{f}(x, y) = \mathbf{0}. \tag{56}$$

如果把这  $x$  定义成  $g(y)$ , 那么  $g$  是  $W$  到  $\mathbb{R}^n$  内的  $\mathscr{C}'$  映射,  $g(b)=a$ ,

$$\mathbf{f}(\mathbf{g}(\mathbf{y}), \mathbf{y}) = \mathbf{0} \quad (\mathbf{y} \in W), \tag{57}$$

并且

$$\mathbf{g}'(\mathbf{b}) = -(\mathbf{A}_x)^{-1} \mathbf{A}_y. \tag{58}$$

这个函数  $g$  是由(57)式“不明显地”确定的，因此，给定理起了这个名字。

方程  $\mathbf{f}(x, y) = \mathbf{0}$  可以写成含有  $n+m$  个变量的  $n$  个方程的方程组:

$$\begin{aligned} f_1(x_1, \dots, x_n, y_1, \dots, y_m) &= 0 \\ \dots\dots\dots\dots\dots\dots\dots\dots\dots\dots\dots & \\ f_n(x_1, \dots, x_n, y_1, \dots, y_m) &= 0. \end{aligned} \tag{59}$$

$\mathbf{A}_x$  可逆的假定意味着  $n \times n$  矩阵

$$\begin{bmatrix} D_1 f_1 & \cdots & D_n f_1 \\ \cdots & \cdots & \cdots \\ D_1 f_n & \cdots & D_n f_n \end{bmatrix}$$

在  $(a, b)$  的值, 确定  $\mathbb{R}^n$  内的一个可逆线性算子; 换句话说, 它的列向量应是无关的, 或用等价的说法就是, 它的行列式  $\neq 0$  (参看定理 9.36) 如果再假定当  $x=a$  及  $y=b$  时 (59) 成立, 那么, 定理的结论就是, 对于  $b$  附近的每个  $y$ , 可以从 (59) 用  $y_1, \dots, y_m$  把  $x_1, \dots, x_n$  解出, 并且这些解是  $y$  的连续可微函数.

**证** 定义  $\mathbf{F}$  为

$$\mathbf{F}(x, y) = (\mathbf{f}(x, y), y), \quad ((x, y) \in E). \tag{60}$$

于是  $\mathbf{F}$  是把  $E$  映到  $\mathbb{R}^{n+m}$  内的  $\mathscr{C}'$  映射. 我们断定  $\mathbf{F}'(a, b)$  是  $L(\mathbb{R}^{n+m})$  的可逆元.

因为  $\mathbf{f}(a, b) = \mathbf{0}$ , 所以

$$\mathbf{f}(a + h, b + k) = A(h, k) + \mathbf{r}(h, k),$$

其中  $\mathbf{r}$  是  $\mathbf{f}'(a, b)$  的定义中所出现的余项. 因为

$$\begin{aligned} \mathbf{F}(a+h, b+k) - \mathbf{F}(a, b) &= (\mathbf{f}(a+h, b+k), k) \\ &= (A(h, k), k) + (\mathbf{r}(h, k), 0) \end{aligned}$$

所以  $F'(a, b)$  是  $R^{n+m}$  上的线性算子, 它把  $(h, k)$  映射成  $(A(h, k), k)$ . 如果这个象向量是  $\mathbf{0}$ , 那么  $A(h, k) = \mathbf{0}$  且  $k = \mathbf{0}$ , 因之  $A(h, \mathbf{0}) = \mathbf{0}$ , 而定理 9.27 说明  $h = \mathbf{0}$ . 因此,  $F'(a, b)$  是 1-1 的, 因而也是可逆的(定理 9.5).

因此, 反函数定理能够应用于  $F$ . 这就证明了在  $R^{n+m}$  中存在着开集  $U$  和  $V$ ,  $(a, b) \in U$ ,  $(\mathbf{0}, b) \in V$ , 而  $F$  是把  $U$  昡满  $V$  的 1-1 映射.

令  $W$  是适合  $(\mathbf{0}, y) \in V$  的一切  $y \in R^m$  组成的集. 注意,  $b \in W$ .

因  $V$  是开集, 显然  $W$  也是开集.

如果  $y \in W$ , 那么必有某个  $(x, y) \in U$  使  $(\mathbf{0}, y) = F(x, y)$ . 由(60)式, 这个  $x$  必合于  $f(x, y) = \mathbf{0}$ .

假如对于这同一个  $y$  来说, 又有个  $(x', y) \in U$  合于  $f(x', y) = \mathbf{0}$ . 那么

$$F(x', y) = (f(x', y), y) = (f(x, y), y) = F(x, y).$$

因为  $F$  在  $U$  中是 1-1 的, 所以  $x' = x$ .

这就证明了定理的第一部分.

现证第二部分. 对于  $y \in W$  定义  $g(y)$ , 使得  $(g(y), y) \in U$  并且(57)式成立. 于是

$$F(g(y), y) = (\mathbf{0}, y) \quad (y \in W). \quad (61)$$

如果  $G$  是把  $V$  昡满  $U$  的映射, 而且是  $F$  的逆. 那么, 由反函数定理  $G \in \mathcal{C}'$ , 而(61)式就给出

$$(g(y), y) = G(\mathbf{0}, y) \quad (y \in W). \quad (62)$$

因为  $G \in \mathcal{C}'$ , (62)式说明  $g \in \mathcal{C}'$ ,

最后, 为求  $g'(b)$  而令  $(g(y), y) = \Phi(y)$ . 于是

$$\Phi'(y)k = (g'(y)k, k) \quad (y \in W, k \in R^m). \quad (63)$$

据(57)式, 在  $W$  中  $f(\Phi(y)) = \mathbf{0}$ . 所以由链导法得到

$$f'(\Phi(y))\Phi'(y) = \mathbf{0}.$$

当  $y = b$  时,  $\Phi(y) = (a, b)$  而  $f'(\Phi(y)) = A$ . 所以

$$A\Phi'(b) = \mathbf{0}. \quad (64)$$

从(64), (63)及(54), 诸式知道对于每个  $k \in R^m$  有

$$A_x g'(b)k + A_y k = A(g'(b)k, k) = A\Phi'(b)k = \mathbf{0}$$

于是

$$A_x g'(b) + A_y = \mathbf{0}. \quad (65)$$

这与(58)式等价, 而证明完毕.

注 把(65)式写成  $\mathbf{f}$  及  $\mathbf{g}$  的分量的形式, 就成为

$$\sum_{j=1}^{n} (D_j f_i)(\mathbf{a}, \mathbf{b}) (D_k g_j)(\mathbf{b}) = - (D_{n+k} f_i)(\mathbf{a}, \mathbf{b})$$

或

$$\sum_{j=1}^{n} \left( \frac{\partial f_i}{\partial x_j} \right) \left( \frac{\partial g_j}{\partial y_k} \right) = - \left( \frac{\partial f_i}{\partial y_k} \right)$$

其中  $1 \le i \le n$ ,  $1 \le k \le m$ .

对于每个  $k$  来说, 这是以(偏)导数  $\frac{\partial g_j}{\partial y_k}$  ( $1 \le j \le n$ ) 为未知量的, 有  $n$  个线性方程的方程组.

**9.29 例** 取  $n=2$ ,  $m=3$ , 考虑  $R^5$  到  $R^2$  内的, 由

$$f_1(x_1, x_2, y_1, y_2, y_3) = 2e^{x_1} + x_2 y_1 - 4y_2 + 3$$

$$f_2(x_1, x_2, y_1, y_2, y_3) = x_2 \cos x_1 - 6x_1 + 2y_1 - y_3.$$

给出的映射  $\mathbf{f} = (f_1, f_2)$ . 如果  $\mathbf{a} = (0, 1)$ ,  $\mathbf{b} = (3, 2, 7)$ , 那么,  $\mathbf{f}(\mathbf{a}, \mathbf{b}) = \mathbf{0}$ .

关于标准基来说, 变换  $A = \mathbf{f}'(\mathbf{a}, \mathbf{b})$  的矩阵是

$$[A] = \begin{bmatrix} 2 & 3 & 1 & -4 & 0 \\ -6 & 1 & 2 & 0 & -1 \end{bmatrix}.$$

因此,

$$[A_x] = \begin{bmatrix} 2 & 3 \\ -6 & 1 \end{bmatrix}, [A_y] = \begin{bmatrix} 1 & -4 & 0 \\ 2 & 0 & -1 \end{bmatrix}.$$

$[A_x]$  的列向量是无关的, 所以  $A_x$  是可逆的, 而隐函数定理断定, 在  $(3, 2, 7)$  的某个邻域内存在一个  $\mathcal{C}^1$  映射  $\mathbf{g}$ , 使得  $\mathbf{g}(3, 2, 7) = (0, 1)$  且  $\mathbf{f}(\mathbf{g}(\mathbf{y}), \mathbf{y}) = \mathbf{0}$ .

现在用(58)式来计算  $\mathbf{g}'(3, 2, 7)$ : 因为

$$[(A_x)^{-1}] = [A_x]^{-1} = \frac{1}{20} \begin{bmatrix} 1 & -3 \\ 6 & 2 \end{bmatrix}$$

从(58)式得到

$$[\mathbf{g}'(3, 2, 7)] = -\frac{1}{20} \begin{bmatrix} 1 & -3 \\ 6 & 2 \end{bmatrix} \begin{bmatrix} 1 & -4 & 0 \\ 2 & 0 & -1 \end{bmatrix} = \begin{bmatrix} \frac{1}{4} & \frac{1}{5} & -\frac{3}{20} \\ -\frac{1}{2} & \frac{6}{5} & \frac{1}{10} \end{bmatrix}.$$

写成偏导数, 结果就是在点  $(3, 2, 7)$  上

$$D_1 g_1 = \frac{1}{4}, \quad D_2 g_1 = \frac{1}{5}, \quad D_3 g_1 = -\frac{3}{20}$$

$$D_1 g_2 = -\frac{1}{2}, \quad D_2 g_2 = \frac{6}{5}, \quad D_3 g_2 = \frac{1}{10}$$

### 秩定理

虽然这个定理不如反函数定理和隐函数定理重要，我们也把它算作是“连续可微映射  $F$  在一点  $x$  的局部性质，与线性变换  $F'(x)$  在  $x$  点附近的局部性质相似”这个一般原理的另一个有趣的实例。

在讲它以前，还需要再说一点关于线性变换的事实。

**9.30 定义** 设  $X$  和  $Y$  是向量空间，而  $A \in L(X, Y)$  如定义 9.6 中所说的。  $A$  的零空间  $\mathcal{N}(A)$  是由合于  $Ax = \mathbf{0}$  的所有  $x \in X$  组成的集。显然  $\mathcal{N}(A)$  是  $X$  中的向量空间。

同样， $A$  的值域  $\mathcal{R}(A)$  是  $Y$  中的向量空间。

$A$  的秩定义作  $\mathcal{R}(A)$  的维数。

例如， $L(R^n)$  的可逆元，恰好是那些秩为  $n$  的元。这由定理 9.5 就可知道。

如果  $A \in L(X, Y)$  而  $A$  的秩是 0，那么，对于一切  $x \in X$ ， $Ax = \mathbf{0}$ ，因此  $\mathcal{N}(A) = X$ 。关于这一点，看习题 25。

**9.31 射影** 设  $X$  是向量空间。如果算子  $P \in L(X)$ ，合于  $P^2 = P$ ，就说  $P$  是  $X$  里的射影。

更明确点说，就是要求对于每个  $x \in X$ ， $P(Px) = Px$ 。换句话说， $P$  把每个向量固定在它的值域  $\mathcal{R}(P)$  中。

现在讲射影的初等性质：

(a) 若  $P$  是  $X$  中的射影，那么每个  $x \in X$  能惟一地表示成

$$x = x_1 + x_2$$

的形式，其中  $x_1 \in \mathcal{R}(P)$ ， $x_2 \in \mathcal{N}(P)$ 。

为得到这种表示，令  $x_1 = Px$ ， $x_2 = x - x_1$ 。于是  $Px_2 = Px - Px_1 = Px - P^2x = \mathbf{0}$ 。关于惟一性，把  $P$  作用于方程  $x = x_1 + x_2$  上，因为  $x_1 \in \mathcal{R}(P)$ ， $Px_1 = x_1$ ，因为  $Px_2 = \mathbf{0}$ ，所以  $x_1 = Px$ 。

(b) 如果  $X$  是有限维的向量空间， $X_1$  是  $X$  内的一个向量空间，那么，在  $X$  中存在着射影  $P$ ， $\mathcal{R}(P) = X_1$ 。

如果  $X_1$  只包含  $\mathbf{0}$ ，这就是显然的：对一切  $x \in X$  令  $Px = \mathbf{0}$  好了。

假定  $\dim X_1 = k > 0$ 。据定理 9.3， $X$  就有这样一个基  $\{u_1, \dots, u_n\}$ ，使  $\{u_1, \dots, u_k\}$  是  $X_1$  的基。对于任意的标量  $c_1, \dots, c_n$ ，定义

$$P(c_1 u_1 + \dots + c_n u_n) = c_1 u_1 + \dots + c_k u_k$$

于是，对于每个  $x \in X_1$ ， $Px = x$ ，并且  $X_1 = \mathcal{R}(P)$ 。

注意  $\{u_{k+1}, \dots, u_n\}$  是  $\mathcal{N}(P)$  的基. 还应注意, 如果  $0 < \dim X_1 < \dim X$ , 在  $X$  中存在着无穷多个值域是  $X_1$  的射影.

**9.32 定理** 设  $m, n, r$  是非负整数,  $m \ge r, n \ge r$ .  $F$  是把开集  $E \subset R^n$  映入  $R^m$  内的  $\mathcal{C}'$  映射, 对于每个  $x \in E$ ,  $F'(x)$  的秩是  $r$ .

固定  $a \in E$ , 令  $A = F'(a)$ , 设  $A$  的值域是  $Y_1$ ,  $P$  是  $R^m$  中的射影, 其值域也是  $Y_1$ .  $Y_2$  是  $P$  的零空间.

那么, 在  $R^n$  中存在着开集  $U$  及  $V$ ,  $a \in U, U \subset E$ , 并且存在着把  $V$  映满  $U$  的 1-1  $\mathcal{C}'$  映射  $H$  (它的逆也属于  $\mathcal{C}'$  类) 使得

$$F(H(x)) = Ax + \varphi(Ax) \quad (x \in V) \quad (66)$$

这里  $\varphi$  是把开集  $A(V) \subset Y_1$  映入  $Y_2$  内的  $\mathcal{C}'$  映射.

证完以后再把 (66) 式的含义给予更几何的解示.

证 如果  $r=0$ , 定理 9.19 说明, 在  $a$  的某邻域  $U$  内,  $F(x)$  是常量, 这时让  $V=U, H(x)=x, \varphi(0)=F(a)$ , (66) 式显然成立.

以下假定  $r>0$ . 因  $\dim Y_1 = r$ ,  $Y_1$  必有基  $\{y_1, \dots, y_r\}$ . 选  $z_i \in R^n$  使得  $Az_i = y_i$  ( $1 \le i \le r$ ), 并定义  $Y_1$  到  $R^n$  的线性映射  $S$ : 对一切标量  $c_1, \dots, c_r$ , 令

$$S(c_1 y_1 + \dots + c_r y_r) = c_1 z_1 + \dots + c_r z_r \quad (67)$$

于是  $ASy_i = Az_i = y_i$  ( $1 \le i \le r$ ). 所以

$$ASy = y \quad (y \in Y_1). \quad (68)$$

定义  $E$  到  $R^n$  内的映射  $G$ :

$$G(x) = x + SP[F(x) - Ax] \quad (x \in E). \quad (69)$$

因  $F'(a) = A$ , 把 (69) 微分, 得到  $R^n$  上的恒等算子:  $G'(a) = I$ . 据反函数定理, 在  $R^n$  中有开集  $U$  及  $V$ ,  $a \in U$ , 使得  $G$  是把  $U$  映满  $V$  的 1-1 映射,  $G$  的逆  $H$  也属于  $\mathcal{C}'$  类. 此外, 如果需要的话, 可以把  $U$  和  $V$  收缩一下, 使  $V$  成为凸集, 而  $H'(x)$  对于每个  $x \in V$  可逆.

注意  $ASPA = A$ , 这因为  $PA = A$ , 并且 (68) 成立. 所以由 (69) 就得

$$AG(x) = PF(x) \quad (x \in E). \quad (70)$$

特别当  $x \in U$  时, (70) 成立. 如果我们把  $x$  换成  $H(x)$ , 就得到

$$PF(H(x)) = Ax \quad (x \in V). \quad (71)$$

定义

$$\Psi(x) = F(H(x)) - Ax \quad (x \in V). \quad (72)$$

因为  $PA = A$ , (71) 式说明  $P\Psi(x) = 0$  对一切  $x \in V$  成立, 于是  $\Psi$  是  $V$  到  $Y_2$  内的  $\mathcal{C}'$  映射.

因  $V$  是开集, 显然  $A(V)$  是它的值域  $\mathcal{R}(A)=Y_1$  的开子集.

为了完成定理的证明, 即是从(72)式出发得(66)式, 必须证明存在着  $A(V)$  到  $Y_2$  的  $\mathcal{C}'$  映射  $\varphi$  它满足

$$\varphi(Ax) = \Psi(x) \quad (x \in V). \quad (73)$$

作为走向(73)的第一步, 先证: 如果  $x_1 \in V, x_2 \in V, Ax_1 = Ax_2$ , 那么

$$\Psi(x_1) = \Psi(x_2) \quad (74)$$

令  $\Phi(x) = F(H(x)), (x \in V)$ . 因为对于每个  $x \in V, H'(x)$  的秩是  $n$ , 而对每个  $x \in U, F'(x)$  的秩是  $r$ , 必然

$$\Phi'(x) \text{ 的秩} = F'(H(x))H'(x) \text{ 的秩} = r, (x \in V). \quad (75)$$

固定  $x \in V$ . 令  $M$  是  $\Phi'(x)$  的值域. 那么  $M \subset R^m, \dim M = r$ . 据(71),

$$P\Phi'(x) = A. \quad (76)$$

因此,  $P$  把  $M$  映满  $\mathcal{R}(A)=Y_1$ . 因  $M$  与  $Y_1$  的维数相同, 所以  $P$  (限制在  $M$  上时) 是 1-1 的.

今设  $Ah=0$ . 于是由(76),  $P\Phi'(x)h=0$ . 但  $\Phi'(x)h \in M$ , 且  $P$  在  $M$  上是 1-1 的. 因此,  $\Phi'(x)h=0$ . 看一看(72)式, 就知道我们已经证明了:

如果  $x \in V$ , 且  $Ah=0$ , 那么  $\Psi'(x)h=0$

现在能证(74)式了. 设  $x_1 \in V, x_2 \in V, Ax_1 = Ax_2$ . 令  $h = x_2 - x_1$  并且定义

$$g(t) = \Psi(x_1 + th) \quad (0 \le t \le 1). \quad (77)$$

$V$  的凸性说明, 对于这些  $t$  来说,  $x_1 + th \in V$ . 因此,

$$g'(t) = \Psi'(x_1 + th)h = 0 \quad (0 \le t \le 1), \quad (78)$$

因此  $g(1) = g(0)$ . 但  $g(1) = \Psi(x_2), g(0) = \Psi(x_1)$ . (74)式获证.

据(74)式, 对于  $x \in V$  来说,  $\Psi(x)$  只依赖于  $Ax$ . 因此, (73)式确实在  $A(V)$  中确定了  $\varphi$ . 剩下的只是要证明  $\varphi \in \mathcal{C}'$  了.

固定  $y_0 \in A(V)$ , 再固定  $x_0 \in V$  使  $Ax_0 = y_0$ . 因为  $V$  是开集,  $y_0$  必在  $Y_1$  中有邻域  $W$ , 凡是当  $y \in W$  时, 向量

$$x = x_0 + S(y - y_0) \quad (79)$$

必在  $V$  内. 由(68)式.

$$Ax = Ax_0 + y - y_0 = y.$$

于是由(73)及(79)式得到

$$\varphi(y) = \Psi(x_0 - Sy_0 + Sy) \quad (y \in W). \quad (80)$$

这公式说明, 在  $W$  中  $\varphi \in \mathcal{C}'$ , 由于  $y_0$  是在  $A(V)$  中任意取的, 所以在  $A(V)$  中也是  $\varphi \in \mathcal{C}'$ .

定理证完.

现在说一说关于映射  $F$  的几何, 这个定理告诉我们一些什么.

如果  $y \in F(U)$ , 那么有某个  $x \in V$ , 使  $y = F(H(x))$ , 而(66)式说明  $Py = Ax$ . 所以

$$y = Py + \varphi(Py) \quad (y \in F(U)). \quad (81)$$

这就说明  $y$  被它的射影  $Py$  所确定, 而如果把  $P$  限制在  $F(U)$  内,  $P$  就是把  $F(U)$  映满  $A(V)$  的 1-1 映射. 因此  $F(U)$  是“ $r$  维曲面”, 在  $A(V)$  的每个点的“上面”, 恰好有  $F(U)$  的一个点. 也可以把  $F(U)$  当成  $\varphi$  的图像.

如果像在证明中那样,  $\Phi(x) = F(H(x))$ , 那么(66)说明  $\Phi$  的水平集(在这个集上,  $\Phi$  的值是一个给定的值)恰好是  $A$  在  $V$  中的水平集. 这些集( $A$  的水平集)都是平坦的, 因为它们都是向量空间  $\mathcal{N}(A)$  的平移与  $V$  的交.

注意  $\dim \mathcal{N}(A) = n - r$ (习题 25).

$F$  在  $U$  中的水平集, 是  $\Phi$  在  $V$  中的平坦水平集在  $H$  之下的像. 于是它们是  $U$  中的“ $n - r$  维曲面”.

### 行列式

行列式是与方阵有关的数, 因此, 与方阵所表示的算子有关. 行列式是 0 的充要条件是相应的算子不可逆. 所以可用它们来断定前面几个定理中的某些假定是否满足. 在第 10 章中, 它们甚至起更重要的作用.

**9.33 定义** 如果  $(j_1, \dots, j_n)$  是正整数的有序  $n$  元组(有序的  $n$  个正整数), 定义

$$s(j_1, \dots, j_n) = \prod_{p < q} \operatorname{sgn}(j_q - j_p), \quad (82)$$

这里, 当  $x > 0$  时,  $\operatorname{sgn}x = 1$ , 当  $x < 0$  时,  $\operatorname{sgn}x = -1$ , 当  $x = 0$  时,  $\operatorname{sgn}x = 0$ . 于是,  $s(j_1, \dots, j_n) = 1, -1$  或 0, 如果任意两个  $j$  交换, 它就变号.

设  $[A]$  是  $R^n$  上线性算子  $A$  关于标准基  $\{e_1, \dots, e_n\}$  的矩阵, 它在第  $i$  行第  $j$  列的阵元是  $a(i, j)$ .  $[A]$  的行列式定义为数

$$\det[A] = \sum s(j_1, \dots, j_n) a(1, j_1) a(2, j_2) \dots a(n, j_n). \quad (83)$$

(83) 中的和遍及整数  $(j_1, \dots, j_n)$  的一切有序  $n$  元组(一切排列法), 其中  $1 \le j_i \le n$ .

$[A]$  的列向量  $x_j$  是

$$x_j = \sum_{i=1}^{n} a(i, j) e_i \quad (1 \le j \le n). \quad (84)$$

把  $\det[A]$  考虑成是  $[A]$  的列向量的函数, 将是方便的. 如果这样写:

$$\det(x_1, \dots, x_n) = \det[A],$$

$\det$  就是一个实函数, 它的定义域是  $R^n$  中向量的一切有序  $n$  元组所组成的集.

**9.34 定理**

(a) 如果  $I$  是  $R^n$  上的恒等算子, 那么

$$\det[I] = \det(e_1, \dots, e_n) = 1.$$

(b) 如果除  $x_i$  外, 其他列向量都保持不变,  $\det$  便是(每个)向量  $x_i$  的线性函数.

(c) 如果  $[A]_1$  是把  $[A]$  的某两列交换而得到的, 那么,  $\det[A]_1 = -\det[A]$ .

(d) 如果  $[A]$  有两列相等, 那么,  $\det[A] = 0$ .

证 如果  $A = I$ , 那么  $a(i, i) = 1$ , 而  $i \neq j$  时  $a(i, j) = 0$ . 因此,

$$\det[I] = s(1, 2, \dots, n) = 1,$$

(a) 获证. 如果有两个  $j$  相等, 根据(82)式,  $s(j_1, \dots, j_n) = 0$ .

(83)中余下的  $n!$  个乘积中, 每个乘积刚好包含每一列的一个数作因子. 这就证明了(b). 任意两个  $j$  互相交换时  $s(j_1, \dots, j_n)$  就变号这个事实的直接结果就是(c), (d)是(c)的推论.

**9.35 定理** 如果  $[A]$  及  $[B]$  都是  $n \times n$  方阵, 那么

$$\det([B][A]) = \det[B] \det[A].$$

证 设  $x_1, \dots, x_n$  是  $[A]$  的各列, 定义

$$\Delta_B(x_1, \dots, x_n) = \Delta_B[A] = \det([B][A]). \quad (85)$$

$[B][A]$  的各列是向量  $Bx_1, \dots, Bx_n$ . 因此

$$\Delta_B(x_1, \dots, x_n) = \det(Bx_1, \dots, Bx_n). \quad (86)$$

据(86)式及定理 9.34,  $\Delta_B$  具有性质(b)–(d). 由(b)及(84)式

$$\Delta_B[A] = \Delta_B(\sum_i a(i, 1)e_1, x_2, \dots, x_n) = \sum_i a(i, 1) \Delta_B(e_i, x_2, \dots, x_n).$$

对于  $x_2, \dots, x_n$  重复这种手续, 就得到

$$\Delta_B[A] = \sum a(i_1, 1) a(i_2, 2) \dots a(i_n, n) \Delta_B(e_{i_1}, \dots, e_{i_n}), \quad (87)$$

求和时遍及一切有序  $n$  元组  $(i_1, \dots, i_n)$ ,  $1 \le i_i \le n$ . 由(c)及(d),

$$\Delta_B(e_{i_1}, \dots, e_{i_n}) = t(i_1, \dots, i_n) \Delta_B(e_1, \dots, e_n), \quad (88)$$

这里的  $t = 1, 0$  或  $-1$ ; 因  $[B][I] = [B]$ , (85)式说明

$$\Delta_B(e_1, \dots, e_n) = \det[B]. \quad (89)$$

将(88), (89)式代入(87)式, 就得到

$$\det[B][A] = \left\{ \sum a(i_1, 1) \cdots a(i_n, n) t(i_1, \dots, i_n) \right\} \det[B],$$

这对一切  $n \times n$  方阵  $[A]$ ,  $[B]$  都成立. 取  $B=I$ , 就看到上面花括号内的和是  $\det[A]$ .

证毕.

**9.36 定理**  $R^n$  上的线性算子  $A$  可逆的充分且必要条件是  $\det[A] \neq 0$ .

**证** 如果  $A$  可逆, 定理 9.35 说明

$$\det[A] \det[A^{-1}] = \det[AA^{-1}] = \det[I] = 1,$$

所以  $\det[A] \neq 0$ .

如果  $A$  不可逆,  $[A]$  的列  $x_1, \dots, x_n$  是相关的(定理 9.5); 因此有一列, 比如是  $x_k$ , 使得:

$$x_k + \sum_{j \neq k} c_j x_j = 0 \quad (90)$$

$c_j$  是某些标量. 由 9.34(b)及(d), 如果  $j \neq k$ , 行列式中的  $x_k$  可以用  $x_k + c_j x_j$  代替而使行列式(的值)不变. 重复这样做下去, 就看到  $x_k$  可以代以(90)式的左端, 即代以  $0$  而不改变行列式. 但当行列式有一列是  $0$  时, 行列式就是  $0$ . 因此  $\det[A] = 0$ .

**9.37 评注** 设  $\{e_1, \dots, e_n\}$  及  $\{u_1, \dots, u_n\}$  都是  $R^n$  的基.  $R^n$  上的每个线性算子  $A$ , 能确定两个方阵  $[A]$  及  $[A]_U$ , 它们的阵元  $a_{ij}$  及  $\alpha_{ij}$  由

$$Ae_j = \sum_i a_{ij} e_i, \quad Au_j = \sum_i \alpha_{ij} u_i,$$

计算. 如果  $u_j = Be_j = \sum_i b_{ij} e_i$ , 那么  $Au_j$  等于

$$\sum_k \alpha_{kj} Be_k = \sum_k \alpha_{kj} \sum_i b_{ik} e_i = \sum_i \left( \sum_k b_{ik} \alpha_{kj} \right) e_i,$$

又等于

$$ABe_j = A \sum_k b_{kj} e_k = \sum_i \left( \sum_k a_{ik} b_{kj} \right) e_i.$$

于是  $\sum_k b_{ik} \alpha_{kj} = \sum_k a_{ik} b_{kj}$  或

$$[B][A]_U = [A][B]. \quad (91)$$

因  $B$  可逆,  $\det[B] \neq 0$ . 因此, (91)式结合定理 9.35 说明:

$$\det[A]_U = \det[A]. \quad (92)$$

所以线性算子的矩阵的行列式, 与用以构成矩阵的基无关. 于是不管基而只谈线性算子的行列式, 是有意义的.

**9.38 函数行列式** 如果  $f$  把开集  $E \subset R^n$  映入  $R^n$  内, 并且  $f$  在点  $x \in E$  可微, 线性算子  $f'(x)$  的行列式就叫做  $f$  在  $x$  的函数行列式. 记成:

$$J_f(x) = \det f'(x). \quad (93)$$

如果  $(y_1, \dots, y_n) = f(x_1, \dots, x_n)$ , 我们又用记号

$$\frac{\partial(y_1, \dots, y_n)}{\partial(x_1, \dots, x_n)} \quad (94)$$

来记  $J_f(x)$ .

在反函数定理中, 有决定意义的题设, 用函数行列式表示就是  $J_f(a) \neq 0$ . (比较定理 9.36). 如果隐函数定理是用诸函数 (59) 来叙述的, 那么, 那里对  $A$  的假定就是

$$\frac{\partial(f_1, \dots, f_n)}{\partial(x_1, \dots, x_n)} \neq 0.$$

## 高阶导数

**9.39 定义** 设  $f$  是定义在开集  $E \subset R^n$  内的实函数, 其偏导数是  $D_1 f, \dots, D_n f$ . 如果诸函数  $D_i f$  本身也可微, 那么  $f$  的二阶偏导数定义为

$$D_{ij} f = D_i D_j f \quad (i, j = 1, \dots, n).$$

如果所有这些函数  $D_{ij} f$  都在  $E$  内连续, 就说  $f$  在  $E$  内属于  $C^2$  类, 或  $f \in C^2(E)$ .

如果  $E$  到  $R^m$  内的映射  $f$  的每个分量都是属于  $C^2$  类的, 就说  $f$  是属于  $C^2$  类的.

即使两个导数  $D_{ij} f$  和  $D_{ji} f$  都存在, 也能够在某个点上出现  $D_{ij} f \neq D_{ji} f$  (见习题 27). 但是, 下面就要看到, 当这些导数都连续时,  $D_{ij} f = D_{ji} f$ .

为简单起见 (但不失掉普遍性), 我们对二元实函数来叙述下面两条定理. 第一条是中值定理.

**9.40 定理** 设  $f$  定义在开集  $E \subset R^2$  中, 并且  $D_1 f$  及  $D_2 f$  在  $E$  的每个点处存在. 设  $Q \subset E$  是闭矩形, 它的边与坐标轴平行, 并且  $(a, b)$  及  $(a+h, b+k)$  是它的对顶 ( $h \neq 0, k \neq 0$ ). 令

$\Delta(f, Q) = f(a+h, b+k) - f(a+h, b) - f(a, b+k) + f(a, b)$  那么, 在  $Q$  内存在一点  $(x, y)$ , 使

$$\Delta(f, Q) = hk(D_{21} f)(x, y). \quad (95)$$

注意 (95) 与定理 5.10 间的类似;  $Q$  的面积是  $hk$ .

证 命  $u(t) = f(t, b+k) - f(t, b)$ . 应用定理 5.10 两次, 就表明了在  $a$  与  $a+h$  之间存在着一个  $x$ , 并且  $b$  与  $b+k$  之间存在着一个  $y$ , 使得

$$\begin{aligned}\Delta(f, Q) &= u(a+h) - u(a) \\ &= hu'(x) \\ &= h[(D_1 f)(x, b+k) - (D_1 f)(x, b)] \\ &= hk(D_{21} f)(x, y).\end{aligned}$$

**9.41 定理** 设  $f$  定义在开集  $E \subset \mathbb{R}^2$  上, 又设  $D_1 f$ ,  $D_{21} f$  及  $D_2 f$  在  $E$  的每个点上存在, 并且  $D_{21} f$  在某点  $(a, b) \in E$  上连续.

那么  $D_{12} f$  在  $(a, b)$  上存在, 并且

$$(D_{12} f)(a, b) = (D_{21} f)(a, b). \quad (96)$$

推论 如果  $f \in \mathcal{C}''(E)$ , 那么  $D_{21} f = D_{12} f$ .

证 设  $A = (D_{21} f)(a, b)$ . 任意选定  $\epsilon > 0$ . 如果  $Q$  是像在定理 9.40 中那样的矩形, 而  $h$  及  $k$  充分小, 那么对于一切  $(x, y) \in Q$ , 就有

$$|A - (D_{21} f)(x, y)| < \epsilon$$

于是, 由 (95) 式有

$$\left| \frac{\Delta(f, Q)}{hk} - A \right| < \epsilon,$$

固定  $h$  而令  $k \to 0$ . 因为  $D_2 f$  在  $E$  中存在, 由上面这个不等式就推出

$$\left| \frac{(D_2 f)(a+h, b) - (D_2 f)(a, b)}{h} - A \right| \le \epsilon. \quad (97)$$

因为  $\epsilon$  是任意的, 并且 (97) 式对于一切足够小的  $h \neq 0$  都成立, 所以  $(D_{12} f)(a, b) = A$ . 这就是 (96) 式.

## 积分的微分法

设  $\varphi$  是二元函数, 它对其中一变元可积, 而对另一变元可微. 如果把这两种极限过程交换次序, 在什么条件下, 将会得到同样的结果呢? 更确切地说, 就是: 在  $\varphi$  满足什么条件的时候, 能证明等式

$$\frac{d}{dt} \int_a^b \varphi(x, t) dx = \int_a^b \frac{\partial \varphi}{\partial t}(x, t) dx \quad (98)$$

成立? (习题 28 提供一个反例)

用下边这种记号将很方便:

$$\varphi'(x) = \varphi(x, t). \quad (99)$$

于是对于每个  $t$  来说,  $\varphi'(x)$  是一元函数.

**9.42 定理** 设

- (a) 对于  $a \le x \le b$ ,  $c \le t \le d$ ,  $\varphi(x, t)$  有定义;
- (b)  $\alpha$  是  $[a, b]$  上的递增函数;
- (c) 对于每个  $t \in [c, d]$ ,  $\varphi' \in \mathfrak{R}(\alpha)$ ;
- (d)  $c < s < d$ , 并且对于每个  $\varepsilon > 0$  有  $\delta > 0$ , 使得对于一切  $x \in [a, b]$  及一切  $t \in (s - \delta, s + \delta)$

$$|(D_2 \varphi)(x, t) - (D_2 \varphi)(x, s)| < \varepsilon$$

定义

$$f(t) = \int_a^b \varphi(x, t) d\alpha(x) \quad (c \le t \le d). \quad (100)$$

那么,  $(D_2 \varphi)' \in \mathfrak{R}(\alpha)$ ,  $f'(s)$  存在, 并且

$$f'(s) = \int_a^b (D_2 \varphi)(x, s) d\alpha(x). \quad (101)$$

注意(c)只是断言积分(100)对一切  $t \in [c, d]$  都存在. 再注意, 只要  $D_2 \varphi$  在定义  $\varphi$  的那个矩形上连续, (d)就一定成立.

证 考虑差商

$$\Psi(x, t) = \frac{\varphi(x, t) - \varphi(x, s)}{t - s}$$

其中  $0 < |t - s| < \delta$ . 据定理 5.10, 对应于每个  $(x, t)$ , 在  $s$  与  $t$  之间有数  $u$ , 使得

$$\Psi(x, t) = (D_2 \varphi)(x, u).$$

因此, (d)说明

$$|\Psi(x, t) - (D_2 \varphi)(x, s)| < \varepsilon \quad (a \le x \le b, \quad 0 < |t - s| < \delta). \quad (102)$$

注意

$$\frac{f(t) - f(s)}{t - s} = \int_a^b \Psi(x, t) d\alpha(x). \quad (103)$$

由(102)式, 当  $t \to s$  时, 在  $[a, b]$  上一致地有  $\Psi \to (D_2 \varphi)'$ . 因为每个  $\Psi \in \mathfrak{R}(\alpha)$ , 从(103)式及定理 7.16 即得到所需要的结论.

**9.43 例** 当然也能证明把定理 9.42 中的  $[a, b]$  换成  $(-\infty, \infty)$  时所得的类似的定理. 我们不来证明这事, 只来看个例子.

定义

$$f(t) = \int_{-\infty}^{\infty} e^{-x^2} \cos(xt) dx \quad (104)$$

及

$$g(t) = -\int_{-\infty}^{\infty} x e^{-x^2} \sin(xt) dx, \quad (105)$$

其中  $-\infty < t < \infty$ . 两个积分都存在(绝对收敛), 因为被积函数的绝对值分别最多是  $\exp(-x^2)$  及  $|x| \exp(-x^2)$ .

注意.  $g$  是从  $f$  把被积式对  $t$  微分得来的, 我们断定  $f$  可微, 且

$$f'(t) = g(t) \quad (-\infty < t < \infty). \quad (106)$$

为了证明这件事, 首先检查余弦的差商: 如果  $\beta > 0$ , 那么

$$\frac{\cos(\alpha + \beta) - \cos \alpha}{\beta} + \sin \alpha = \frac{1}{\beta} \int_{\alpha}^{\alpha + \beta} (\sin \alpha - \sin t) dt. \quad (107)$$

因为  $|\sin \alpha - \sin t| \le |t - \alpha|$ , (107)式右端的绝对值最大是  $\beta/2$ ;  $\beta < 0$  时, 可类似地处理. 于是对于所有  $\beta$ ,

$$\left| \frac{\cos(\alpha + \beta) - \cos \alpha}{\beta} + \sin \alpha \right| \le |\beta| \quad (108)$$

(如果当  $\beta=0$  时把左端解释成 0).

现在固定  $t$  且固定  $h \neq 0$ . 以  $\alpha = xt$ ,  $\beta = xh$ , 应用(108)式; 随之从(104)及(105)式得到

$$\left| \frac{f(t+h) - f(t)}{h} - g(t) \right| \le |h| \int_{-\infty}^{\infty} x^2 e^{-x^2} dx.$$

于是当  $h \to 0$  时, 就得到(106)式.

让我们再前进一步: 把(104)分部积分, 就表明

$$f(t) = 2 \int_{-\infty}^{\infty} x e^{-x^2} \frac{\sin(xt)}{t} dx. \quad (109)$$

于是  $tf(t) = -2g(t)$ , 而现在由(106)式就推出  $f$  满足微分方程

$$2f'(t) + tf(t) = 0. \quad (110)$$

如果解出这个方程, 并用  $f(0) = \sqrt{\pi}$  这个事实(见 § 8.21), 就发现

$$f(t) = \sqrt{\pi} \exp\left(-\frac{t^2}{4}\right).$$

于是积分(104)就用显式确定出来了.

### 习题

1. 设  $S$  是向量空间  $X$  的不空子集. 证明(像在 9.1 段中所断定的) $S$  的生成

是一向量空间.

2. 证明(像在 9.6 段中所断定的)如果  $A$  及  $B$  都是线性变换, 那么  $BA$  是线性的.

再证  $A^{-1}$  是线性的并且是可逆的.

3. 假设  $A \in L(X, Y)$ , 而只有在  $\mathbf{x} = \mathbf{0}$  时才有  $A\mathbf{x} = \mathbf{0}$ . 证明  $A$  是 1-1 的.

4. 证明(像 9.30 段所断定的)零空间及线性变换的值域都是线性空间.

5. 设  $A \in L(R^n, R^1)$ , 证明有惟一的  $\mathbf{y} \in R^n$ , 合于  $A\mathbf{x} = \mathbf{x} \cdot \mathbf{y}$ .

又证  $\|A\| = \|\mathbf{y}\|$ .

提示: Schwarz 不等式在某些条件下等号能成立.

6. 设  $f(0, 0) = 0$ , 而当  $(x, y) \neq (0, 0)$  时

$$f(x, y) = \frac{xy}{x^2 + y^2}$$

证明虽然  $f$  在  $(0, 0)$  不连续, 然而  $(D_1 f)(x, y)$  及  $(D_2 f)(x, y)$  在  $R^2$  的每点存在.

7. 设  $f$  是定义在开集  $E \subset R^n$  中的实值函数, 并且诸偏导数  $D_1 f, \dots, D_n f$  在  $E$  内有界. 证明  $f$  在  $E$  内连续.

提示: 像在定理 9.21 的证明中那样进行.

8. 设  $f$  是开集  $E \subset R^n$  上的可微实函数,  $f$  在点  $\mathbf{x} \in E$  有局部极大. 证明  $f'(\mathbf{x}) = 0$ .

9. 设  $\mathbf{f}$  是连通开集  $E \subset R^n$  到  $R^m$  内的可微映射. 并且对于每个  $\mathbf{x} \in E$ ,  $\mathbf{f}'(\mathbf{x}) = 0$ . 证明  $\mathbf{f}$  在  $E$  中是常量.

10. 设  $f$  是定义在凸开集  $E \subset R^n$  中的实值函数, 并且对于每个  $\mathbf{x} \in E$ ,  $(D_1 f)(\mathbf{x}) = 0$ . 证明  $f(\mathbf{x})$  只依赖于  $x_2, \dots, x_n$ .

试说明  $E$  的凸性能换成较弱的条件. 但有些条件却是必要的. 例如当  $n=2$  时, 如果  $E$  的形状像个马蹄形, 命题就可能不成立.

11. 设  $f$  及  $g$  都是  $R^n$  中的可微实函数, 证明

$$\nabla(fg) = f\nabla g + g\nabla f$$

及

$$\nabla(1/f) = -f^{-2}\nabla f, \quad \text{这里 } f \neq 0.$$

12. 固定二实数  $a$  及  $b$ ,  $0 < a < b$ . 由

$$f_1(s, t) = (b + a \cos s) \cos t$$

$$f_2(s, t) = (b + a \cos s) \sin t$$

$$f_3(s, t) = a \sin s.$$

定义映  $R^2$  到  $R^3$  内的映射  $\mathbf{f}=(f_1, f_2, f_3)$ . 把  $\mathbf{f}$  的值域  $K$  描述出来(它是  $R^3$  的某个紧子集).

(a)证明存在着四个点  $\mathbf{p} \in K$ , 合于

$$(\nabla f_1)(\mathbf{f}^{-1}(\mathbf{p})) = 0.$$

找出这些点来.

(b)确定合于

$$(\nabla f_3)(\mathbf{f}^{-1}(\mathbf{q})) = 0.$$

的一切  $\mathbf{q} \in K$ .

(c)证明在(a)中找到的四个点  $\mathbf{p}$  之中, 一个对应于  $f_1$  的局部极大值, 一个对应于局部极小, 另两个既不对应局部极大, 也不对应局部极小(它们叫做“鞍点”).

在(b)中找到的点  $\mathbf{q}$  之中, 哪些点对应于极大或极小?

(d)令  $\lambda$  是无理实数. 规定  $\mathbf{g}(t) = \mathbf{f}(t, \lambda t)$ . 证明  $\mathbf{g}$  是把  $R^1$  映满  $K$  的某个稠子集的 1-1 映射. 证明

$$|\mathbf{g}'(t)|^2 = a^2 + \lambda^2 (b + a \cos t)^2.$$

13. 设  $\mathbf{f}$  是  $R^1$  到  $R^3$  中, 对每个  $t$  合于  $|\mathbf{f}(t)| = 1$  的可微映射. 证明  $\mathbf{f}'(t) \cdot \mathbf{f}(t) = 0$ .

用几何解释这个结果.

14. 定义  $f(0, 0) = 0$ , 而当  $(x, y) \neq (0, 0)$  时,

$$f(x, y) = \frac{x^3}{x^2 + y^2}.$$

(a)证明  $D_1 f$  及  $D_2 f$  是  $R^2$  中的有界函数. (因之,  $f$  连续).

(b)令  $\mathbf{u}$  是  $R^2$  中的任一单位向量. 证明方向导数  $(D_{\mathbf{u}} f)(0, 0)$  存在, 并且它的绝对值最大是 1.

(c)设  $\gamma$  是  $R^1$  到  $R^2$  中的可微映射(换句话说,  $\gamma$  是  $R^2$  中的可微曲线),  $\gamma(0) = (0, 0)$  且  $|\gamma'(0)| > 0$ . 令  $g(t) = f(\gamma(t))$ , 证明  $g$  对每个  $t \in R^1$  可微.

如果  $\gamma \in \mathcal{C}'$ , 证明  $g \in \mathcal{C}'$ .

(d)虽然如此, 证明  $f$  在  $(0, 0)$  不可微.

提示: 公式(40)失效.

15. 定义  $f(0, 0) = 0$ , 而当  $(x, y) \neq (0, 0)$  时, 令

$$f(x, y) = x^2 + y^2 - 2x^2y - \frac{4x^6y^2}{(x^4 + y^2)^2$$

(a) 证明对一切  $(x, y) \in \mathbb{R}^2$ ,

$$4x^4y^2 \le (x^4 + y^2)^2.$$

推断  $f$  连续.

(b) 对于  $0 \le \theta \le 2\pi$ ,  $-\infty < t < \infty$ , 定义

$$g_\theta(t) = f(t\cos\theta, t\sin\theta).$$

证明  $g_\theta(0) = 0$ ,  $g'_\theta(0) = 0$ ,  $g''_\theta(0) = 2$ . 所以每个  $g_\theta$  在  $t = 0$  有严格局部极小值.

换句话说, 限制  $f$  在每条过  $(0, 0)$  的直线时, 在  $(0, 0)$  有严格局部极小值.

(c) 证明  $(0, 0)$  仍然不是  $f$  的局部极小值, 因为  $f(x, x^2) = -x^4$ .

16. 证明在反函数定理中,  $f'$  在点  $a$  的连续性是必需的, 即使在  $n=1$  的情况也是如此: 如果当  $t \neq 0$  时,

$$f(t) = t + 2t^2 \sin\left(\frac{1}{t}\right)$$

而  $f(0) = 0$ , 那么,  $f'(0) = 1$ ,  $f'$  在  $(-1, 1)$  有界, 但在  $0$  的任何邻域内,  $f$  不是 1-1 的.

17. 令  $\mathbf{f} = (f_1, f_2)$  为由

$$f_1(x, y) = e^x \cos y, \quad f_2(x, y) = e^x \sin y.$$

给出的,  $\mathbb{R}^2$  到  $\mathbb{R}^2$  内的映射.

(a)  $\mathbf{f}$  的值域是什么?

(b) 证明  $\mathbf{f}$  的函数行列式在  $\mathbb{R}^2$  的任何点上不为零. 于是  $\mathbb{R}^2$  的每个点有邻域, 使  $\mathbf{f}$  在其中是 1-1 的. 然而  $\mathbf{f}$  在  $\mathbb{R}^2$  上不是 1-1 的.

(c) 令  $\mathbf{a} = (0, \pi/3)$ ,  $\mathbf{b} = \mathbf{f}(\mathbf{a})$ , 设  $\mathbf{g}$  是在  $\mathbf{b}$  的某邻域内确定的,  $\mathbf{f}$  的连续逆, 且  $\mathbf{g}(\mathbf{b}) = \mathbf{a}$ . 求出  $\mathbf{g}$  的显式, 计算  $\mathbf{f}'(\mathbf{a})$  及  $\mathbf{g}'(\mathbf{b})$ , 并验证公式 (52).

(d) 坐标轴的平行线在  $\mathbf{f}$  下的像是什么?

18. 对于由

$$u = x^2 - y^2, \quad v = 2xy.$$

确定的映射, 回答同样的诸问题.

19. 证明方程组

$$3x + y - z + u^2 = 0$$

$$x - y + 2z + u = 0$$

$$2x + 2z - 3z + 2u = 0$$

能把  $x, y, u$  用  $z$  解出;  $x, z, u$  能用  $y$  解出;  $y, z, u$  能用  $x$  解出; 但不能把  $x, y, z$  用  $u$  解出.

20. 在隐函数定理中取  $n=m=1$ , 用图像来解释这个定理(还有它的证明).

21. 在  $R^2$  中, 由

$$f(x, y) = 2x^3 - 3x^2 + 2y^3 + 3y^2.$$

确定  $f$ .

(a) 在  $R^2$  中求四个点, 使  $f$  的梯度在这些点上为零. 证明  $f$  在  $R^2$  中正好有一个局部极大和一个局部极小.

(b) 令  $S$  为使  $f(x, y)=0$  的一切  $(x, y) \in R^2$  的集. 在  $S$  中找出那些点来, 在它的任何邻域内, 都不能从方程  $f(x, y)=0$ , 把  $y$  用  $x$  解出(或把  $x$  用  $y$  解出). 作出  $S$  的图, 能画多精确就多精确.

22. 对

$$f(x, y) = 2x^3 + 6xy^2 - 3x^2 + 3y^2.$$

作类似的讨论

23. 在  $R^3$  中, 由

$$f(x, y_1, y_2) = x^2 y_1 + e^x + y_2.$$

定义  $f$ . 证明  $f(0, 1, -1)=0$ ,  $(D_1 f)(0, 1, -1) \neq 0$ , 因此在  $R^2$  中存在着在  $(1, -1)$  的某邻域中的可微函数  $g$ , 合于  $g(1, -1)=0$  及

$$f(g(y_1, y_2), y_1, y_2) = 0.$$

求  $(D_1 g)(1, -1)$  及  $(D_2 g)(1, -1)$ .

24. 对于  $(x, y) \neq (0, 0)$ , 用

$$f_1(x, y) = \frac{x^2 - y^2}{x^2 + y^2}, \quad f_2(x, y) = \frac{xy}{x^2 + y^2}.$$

来定义  $\mathbf{f} = (f_1, f_2)$ .

计算  $\mathbf{f}'(x, y)$  的秩, 并求  $\mathbf{f}$  的值域.

25. 设  $A \in L(R^n, R^m)$ , 令  $A$  的秩是  $r$ .

(a) 像在定理 9.32 的证明中那样定义  $S$ . 证明  $SA$  是  $R^n$  中的射影, 它的零空间是  $\mathcal{N}(A)$ , 而它的值域是  $\mathcal{R}(S)$ . 提示: 据(68),  $SASA=SA$ .

(b) 用(a)证明

$$\dim \mathcal{N}(A) + \dim \mathcal{R}(A) = n.$$

26. 证明  $D_{12}f$  的存在性(甚至连续性)并不包含着  $D_1 f$  的存在性. 例如, 令  $f(x, y) = g(x)$ , 这里  $g$  无处处可微.

27. 设  $f(0, 0)=0$ , 而当  $(x, y) \neq (0, 0)$  时,

$$f(x, y) = \frac{xy(x^2 - y^2)}{x^2 + y^2}$$

证明：

- (a)  $f$ ,  $D_1 f$ ,  $D_2 f$  都在  $R^2$  中连续；
- (b)  $D_{12} f$  及  $D_{21} f$  在  $R^2$  的每点存在，并且除了在  $(0, 0)$  点以外都连续；
- (c)  $(D_{12} f)(0, 0) = 1$  而  $(D_{21} f)(0, 0) = -1$ .

28. 当  $t \ge 0$  时，令

$$\varphi(x, t) = \begin{cases} x & (0 \le x \le \sqrt{t}) \\ -x + 2\sqrt{t} & (\sqrt{t} \le x \le 2\sqrt{t}) \\ 0 & (\text{此外}), \end{cases}$$

而当  $t < 0$  时，令  $\varphi(x, t) = -\varphi(x, |t|)$ .

证明  $\varphi$  在  $R^2$  连续，且对一切  $x$

$$(D_2 \varphi)(x, 0) = 0$$

定义

$$f(t) = \int_{-1}^{1} \varphi(x, t) dx.$$

证明当  $|t| < \frac{1}{4}$  时  $f(t) = t$ . 因此，

$$f'(0) \neq \int_{-1}^{1} (D_2 \varphi)(x, 0) dx.$$

29. 设  $E$  是  $R^n$  中的开集. 类  $\mathcal{C}'(E)$  及  $\mathcal{C}''(E)$  已在正文中定义了. 对所有正整数  $k$ , 能用归纳法定义  $\mathcal{C}^{(k)}(E)$  如下:  $f \in \mathcal{C}^{(k)}(E)$  表示诸偏导数  $D_1 f, \dots, D_n f$  属于  $\mathcal{C}^{(k-1)}(E)$ .

假定  $f \in \mathcal{C}^{(k)}(E)$ , (重复应用定理 9.41) 证明  $k$  阶导数

$$D_{i_1 i_2 \dots i_k} f = D_{i_1} D_{i_2} \dots D_{i_k} f$$

在下标  $i_1, \dots, i_k$  重排时不变.

例如, 如果  $n \ge 3$ , 那么对于每个  $f \in \mathcal{C}^{(3)}$ ,

$$D_{1213} f = D_{3112} f$$

30. 令  $f \in \mathcal{C}^{(m)}(E)$ , 这里  $E$  是  $R^n$  的开子集. 固定  $a \in E$ , 并设  $x \in R^n$  与 0 如此地近, 以致只要  $0 \le t \le 1$ , 点

$$\mathbf{p}(t) = a + tx$$

就位于  $E$  内. 对于一切使  $\mathbf{p}(t) \in E$  的  $t \in R^1$ , 定义

$$h(t) = f(\mathbf{p}(t))$$

(a) 对  $1 \le k \le m$ , (重复应用链导法) 证明

$$h^{(k)}(t) = \sum (D_{i_1 \dots i_k} f)(\mathbf{p}(t)) x_{i_1} \dots x_{i_k}.$$

求和符号遍历一切有序  $k$ -元组  $(i_1, \dots, i_k)$ , 其中每个  $i_j$  是正整数  $1, \dots, n$  之一.

(b) 据 Taylor 定理(5.15), 有某个  $t \in (0, 1)$ , 使

$$h(1) = \sum_{k=0}^{m-1} \frac{h^{(k)}(0)}{k!} + \frac{h^{(m)}(t)}{m!}$$

据此说明式子

$$f(\mathbf{a} + \mathbf{x}) = \sum_{k=0}^{m-1} \frac{1}{k!} \sum (D_{i_1 \dots i_k} f)(\mathbf{a}) x_{i_1} \dots x_{i_k} + r(\mathbf{x})$$

把  $f(\mathbf{a} + \mathbf{x})$  表成它的“ $m-1$  次 Taylor 多项式”及满足

$$\lim_{\mathbf{x} \to 0} \frac{r(\mathbf{x})}{|\mathbf{x}|^{m-1}} = 0.$$

的余项之和. 然后由此推证  $n$  个变量的 Taylor 定理.

每个内层和, 像(a)那样, 遍历一切有序  $k$ -元组  $(i_1, \dots, i_k)$ . 照例,  $f$  的零阶导数就是  $f$ , 所以  $f$  在  $\mathbf{a}$  的 Taylor 多项式的常数项就是  $f(\mathbf{a})$ .

(c) 习题 29 说明, (b) 所写的 Taylor 多项式中, 会有重复. 例如  $D_{113}$ , 作为  $D_{113}, D_{131}, D_{311}$  而出现三次. 相应三项的和能写成

$$3(D_1^2 D_3 f)(\mathbf{a}) x_1^2 x_3$$

的形式. 证明(用计算各阶导数出现的次数)在(b)中的 Taylor 多项式能写成

$$\sum \frac{(D_1^{s_1} \dots D_n^{s_n} f)(\mathbf{a})}{s_1! \dots s_n!} x_1^{s_1} \dots x_n^{s_n}.$$

的形式. 这里求和时遍历一切有序  $n$ -元数组  $(s_1, \dots, s_n)$ , 每个  $s_i$  是非负整数, 且  $s_1 + \dots + s_n \le m-1$ .

31. 设在点  $\mathbf{a} \in R^2$  的某邻域内  $f \in C^{(3)}$ ,  $f$  的梯度在  $\mathbf{a}$  点是  $\mathbf{0}$ , 但  $f$  的诸二阶导数在  $\mathbf{a}$  点不全为零. 说明这时从  $f$  在  $\mathbf{a}$  的(二次)Taylor 多项式怎样判断,  $f$  在  $\mathbf{a}$  点有局部极大或局部极小, 或既没有局部极大又没有局部极小.

把对于  $R^2$  的这个结果推广到  $R^n$ .
