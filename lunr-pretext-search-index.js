var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": ""
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " We refer to the following books.    Algebra by M. Artin     Calculus and analytic geometry by Thomas and Finney     Calculus for Biology and Medicine by Neuhauser and Roper     All questions\/exercises mentioned in these notes are standard, and can be found in standard books on the subject. No originality is claimed.  This is a work in progress, and may contain certain discrepancies or typographic errors. Please check periodically for the latest version. Comments and suggestions are welcome.  "
},
{
  "id": "sec-basic-operations",
  "level": "1",
  "url": "sec-basic-operations.html",
  "type": "Section",
  "number": "1.1",
  "title": "Basic matrix operations",
  "body": " Basic matrix operations   In this section we denote by either the set of real numbers, or the set of complex numbers, .    (Zero matrix)   We denote by the matrix with all its entries zero. We call the zero matrix.     (Identity matrix)   We denote by the matrix with all its diagonal entries , and all other (non-diagonal) entries zero. We call the identity matrix.     The -th entry of a matrix  is the entry at the intersection of -th row and -th column of .    We denote the set of all matrices over by . So . A matrix in is called a square matrix and is called the size of a matrix .    For any matrix and we denote by the matrix obtained by multiplying every entry of the matrix by .     A matrix in is called a column vector in -dimensional space .  A matrix in is called a row vector in -dimensional space .  We identify with .      is a column vector in -dimensional space while is a row vector in -dimensional space .    Matrices are equal or same if every -th entry of is equal to (same as) the -th entry of for every and for every . That is, if then, Matrices are said to be not equal , and written as , if there is at least one and at least one such that -th entry of , and -th entry of , are different, i.e., (for some  and some  ).    Suppose that and . We denote the -th entry ( ) (respectively, ) by (respectively, ). The -th entry of the matrix multiplication is given by the following formula. where and .    (Transpose of a matrix)  For a matrix , the transpose of , denoted by , is an matrix obtained by writing columns of as rows of . Thus if then the transpose of is     If then we have the following. Furthermore, for and we have the following.     (Inverse of a matrix)   Let . A square matrix is said to be the inverse of if If inverse of exists then it is denoted by , and is said to be invertible .     If inverse of the matrix exists then it is unique. Indeed, if are two inverses of then we have   Note that if is invertible then the inverse of is , i.e.,   If are invertible then is also invertible and      Suppose that is an invertible matrix. Then, for any , if or then .  In other words, if (resp., ) and then, can not be invertible.     Suppose that . Then, multiplying both sides of the equation by we get Similarly, one can show that if then .    (Coefficient matrix of a system of linear equations and homogeneous system of linear equations) Consider a system of linear equations with for every and .  We may write the above system of linear equations in the matrix form.   If we put and , and then, the above system of linear equations can be written as The matrix is called the coefficient matrix of the above system.  If all then the above system of linear equations is said to be homogeneous .   "
},
{
  "id": "def-zero-matrix",
  "level": "2",
  "url": "sec-basic-operations.html#def-zero-matrix",
  "type": "Definition",
  "number": "1.1.1",
  "title": "(Zero matrix).",
  "body": " (Zero matrix)   We denote by the matrix with all its entries zero. We call the zero matrix.   "
},
{
  "id": "def-identity-matrix",
  "level": "2",
  "url": "sec-basic-operations.html#def-identity-matrix",
  "type": "Definition",
  "number": "1.1.2",
  "title": "(Identity matrix).",
  "body": " (Identity matrix)   We denote by the matrix with all its diagonal entries , and all other (non-diagonal) entries zero. We call the identity matrix.   "
},
{
  "id": "ij-entry-of-matrix",
  "level": "2",
  "url": "sec-basic-operations.html#ij-entry-of-matrix",
  "type": "Convention",
  "number": "1.1.3",
  "title": "",
  "body": " The -th entry of a matrix  is the entry at the intersection of -th row and -th column of .  "
},
{
  "id": "sec-basic-operations-6",
  "level": "2",
  "url": "sec-basic-operations.html#sec-basic-operations-6",
  "type": "Convention",
  "number": "1.1.4",
  "title": "",
  "body": " We denote the set of all matrices over by . So . A matrix in is called a square matrix and is called the size of a matrix .  "
},
{
  "id": "scalar-times-matrix",
  "level": "2",
  "url": "sec-basic-operations.html#scalar-times-matrix",
  "type": "Convention",
  "number": "1.1.5",
  "title": "",
  "body": " For any matrix and we denote by the matrix obtained by multiplying every entry of the matrix by .  "
},
{
  "id": "def-column-row-vectors",
  "level": "2",
  "url": "sec-basic-operations.html#def-column-row-vectors",
  "type": "Definition",
  "number": "1.1.6",
  "title": "",
  "body": "  A matrix in is called a column vector in -dimensional space .  A matrix in is called a row vector in -dimensional space .  We identify with .   "
},
{
  "id": "sec-basic-operations-9",
  "level": "2",
  "url": "sec-basic-operations.html#sec-basic-operations-9",
  "type": "Example",
  "number": "1.1.7",
  "title": "",
  "body": "  is a column vector in -dimensional space while is a row vector in -dimensional space .  "
},
{
  "id": "equal-matrices",
  "level": "2",
  "url": "sec-basic-operations.html#equal-matrices",
  "type": "Definition",
  "number": "1.1.8",
  "title": "",
  "body": " Matrices are equal or same if every -th entry of is equal to (same as) the -th entry of for every and for every . That is, if then, Matrices are said to be not equal , and written as , if there is at least one and at least one such that -th entry of , and -th entry of , are different, i.e., (for some  and some  ).  "
},
{
  "id": "ij-entry-of-product",
  "level": "2",
  "url": "sec-basic-operations.html#ij-entry-of-product",
  "type": "Observation",
  "number": "1.1.9",
  "title": "",
  "body": " Suppose that and . We denote the -th entry ( ) (respectively, ) by (respectively, ). The -th entry of the matrix multiplication is given by the following formula. where and .  "
},
{
  "id": "transpose",
  "level": "2",
  "url": "sec-basic-operations.html#transpose",
  "type": "Definition",
  "number": "1.1.10",
  "title": "(Transpose of a matrix).",
  "body": " (Transpose of a matrix)  For a matrix , the transpose of , denoted by , is an matrix obtained by writing columns of as rows of . Thus if then the transpose of is   "
},
{
  "id": "basic-properties-of-transpose",
  "level": "2",
  "url": "sec-basic-operations.html#basic-properties-of-transpose",
  "type": "Observation",
  "number": "1.1.11",
  "title": "",
  "body": " If then we have the following. Furthermore, for and we have the following.   "
},
{
  "id": "def-inverse-of-matrix",
  "level": "2",
  "url": "sec-basic-operations.html#def-inverse-of-matrix",
  "type": "Definition",
  "number": "1.1.12",
  "title": "(Inverse of a matrix).",
  "body": " (Inverse of a matrix)   Let . A square matrix is said to be the inverse of if If inverse of exists then it is denoted by , and is said to be invertible .   "
},
{
  "id": "inverse-of-inverse",
  "level": "2",
  "url": "sec-basic-operations.html#inverse-of-inverse",
  "type": "Note",
  "number": "1.1.13",
  "title": "",
  "body": " If inverse of the matrix exists then it is unique. Indeed, if are two inverses of then we have   Note that if is invertible then the inverse of is , i.e.,   If are invertible then is also invertible and   "
},
{
  "id": "lem-invertible-implies-no-zero-divisors",
  "level": "2",
  "url": "sec-basic-operations.html#lem-invertible-implies-no-zero-divisors",
  "type": "Lemma",
  "number": "1.1.14",
  "title": "",
  "body": "  Suppose that is an invertible matrix. Then, for any , if or then .  In other words, if (resp., ) and then, can not be invertible.   "
},
{
  "id": "sec-basic-operations-17",
  "level": "2",
  "url": "sec-basic-operations.html#sec-basic-operations-17",
  "type": "Proof",
  "number": "1.1.1",
  "title": "",
  "body": " Suppose that . Then, multiplying both sides of the equation by we get Similarly, one can show that if then .  "
},
{
  "id": "homogeneous-system",
  "level": "2",
  "url": "sec-basic-operations.html#homogeneous-system",
  "type": "Definition",
  "number": "1.1.15",
  "title": "(Coefficient matrix of a system of linear equations and homogeneous system of linear equations).",
  "body": " (Coefficient matrix of a system of linear equations and homogeneous system of linear equations) Consider a system of linear equations with for every and .  We may write the above system of linear equations in the matrix form.   If we put and , and then, the above system of linear equations can be written as The matrix is called the coefficient matrix of the above system.  If all then the above system of linear equations is said to be homogeneous .  "
},
{
  "id": "practice-basic-operations",
  "level": "1",
  "url": "practice-basic-operations.html",
  "type": "Exercises",
  "number": "1.2",
  "title": "Exercises",
  "body": "  A few exercises related to basic matrix operations are listed below.    Consider the following matrices in . Find .     Let . Find such that .      Show that for any matrix the following is true.       Show that for any matrices the following is true.       Let . Show that and that .      Compute the matrix multiplication .    and       and             and  In this case, consider the matrix as the point of the space and matrix as the point . Plot the line segment joining the origin of and as well as the line segment joining the origin of and . Check whether is perpendicular to .       and   In this case, consider the matrix as the point of the space and matrix as the point . Plot the line segment joining the origin of and as well as the line segment joining the origin of and . Check whether is perpendicular to .          For a matrix and a natural number we write In particular, and .  Find the following powers of the given matrices.       Write the augmented matrix corresponding to the given system of equations.                  In the following, given compute its transpose and also compute and .     , where      , where                    Find a condition on such that the matrix will be equal to its transpose.    Consider a matrix . Find a condition on such that and .        Check whether is a function or not. Also check whether is injective (one-one) or surjective (onto).       Find the inverse of the given matrix.                   , where and are nonzero real numbers.         In each of the following system , the matrices are given. Find the matrix .      . Find .     . Find .         Show that if the inverse of a matrix exists then it is unique, i.e., if and are such that and , then .    Multiply each side of the equation on the left by .      Multiplication is defined when and .       For any two matrices , .     For any , .     The following system of linear equations has infinitely many solutions.       For the following matrix we have .       Every matrix in has an inverse.      Let . The inverse of is , i.e.,     "
},
{
  "id": "practice-basic-operations-2",
  "level": "2",
  "url": "practice-basic-operations.html#practice-basic-operations-2",
  "type": "Exercise",
  "number": "1.2.1",
  "title": "",
  "body": " Consider the following matrices in . Find .  "
},
{
  "id": "practice-basic-operations-3",
  "level": "2",
  "url": "practice-basic-operations.html#practice-basic-operations-3",
  "type": "Exercise",
  "number": "1.2.2",
  "title": "",
  "body": "  Let . Find such that .   "
},
{
  "id": "practice-basic-operations-4",
  "level": "2",
  "url": "practice-basic-operations.html#practice-basic-operations-4",
  "type": "Exercise",
  "number": "1.2.3",
  "title": "",
  "body": "  Show that for any matrix the following is true.    "
},
{
  "id": "practice-basic-operations-5",
  "level": "2",
  "url": "practice-basic-operations.html#practice-basic-operations-5",
  "type": "Exercise",
  "number": "1.2.4",
  "title": "",
  "body": "  Show that for any matrices the following is true.    "
},
{
  "id": "practice-basic-operations-6",
  "level": "2",
  "url": "practice-basic-operations.html#practice-basic-operations-6",
  "type": "Exercise",
  "number": "1.2.5",
  "title": "",
  "body": "  Let . Show that and that .   "
},
{
  "id": "practice-basic-operations-7",
  "level": "2",
  "url": "practice-basic-operations.html#practice-basic-operations-7",
  "type": "Exercise",
  "number": "1.2.6",
  "title": "",
  "body": "  Compute the matrix multiplication .    and       and             and  In this case, consider the matrix as the point of the space and matrix as the point . Plot the line segment joining the origin of and as well as the line segment joining the origin of and . Check whether is perpendicular to .       and   In this case, consider the matrix as the point of the space and matrix as the point . Plot the line segment joining the origin of and as well as the line segment joining the origin of and . Check whether is perpendicular to .       "
},
{
  "id": "practice-basic-operations-8",
  "level": "2",
  "url": "practice-basic-operations.html#practice-basic-operations-8",
  "type": "Exercise",
  "number": "1.2.7",
  "title": "",
  "body": "  For a matrix and a natural number we write In particular, and .  Find the following powers of the given matrices.    "
},
{
  "id": "practice-basic-operations-9",
  "level": "2",
  "url": "practice-basic-operations.html#practice-basic-operations-9",
  "type": "Exercise",
  "number": "1.2.8",
  "title": "",
  "body": "  Write the augmented matrix corresponding to the given system of equations.               "
},
{
  "id": "practice-basic-operations-10",
  "level": "2",
  "url": "practice-basic-operations.html#practice-basic-operations-10",
  "type": "Exercise",
  "number": "1.2.9",
  "title": "",
  "body": "  In the following, given compute its transpose and also compute and .     , where      , where                    Find a condition on such that the matrix will be equal to its transpose.    Consider a matrix . Find a condition on such that and .     "
},
{
  "id": "practice-basic-operations-11",
  "level": "2",
  "url": "practice-basic-operations.html#practice-basic-operations-11",
  "type": "Exercise",
  "number": "1.2.10",
  "title": "",
  "body": "  Check whether is a function or not. Also check whether is injective (one-one) or surjective (onto).    "
},
{
  "id": "practice-basic-operations-12",
  "level": "2",
  "url": "practice-basic-operations.html#practice-basic-operations-12",
  "type": "Exercise",
  "number": "1.2.11",
  "title": "",
  "body": "  Find the inverse of the given matrix.                   , where and are nonzero real numbers.      "
},
{
  "id": "practice-basic-operations-13",
  "level": "2",
  "url": "practice-basic-operations.html#practice-basic-operations-13",
  "type": "Exercise",
  "number": "1.2.12",
  "title": "",
  "body": "  In each of the following system , the matrices are given. Find the matrix .      . Find .     . Find .      "
},
{
  "id": "practice-basic-operations-14",
  "level": "2",
  "url": "practice-basic-operations.html#practice-basic-operations-14",
  "type": "Exercise",
  "number": "1.2.13",
  "title": "",
  "body": "  Show that if the inverse of a matrix exists then it is unique, i.e., if and are such that and , then .    Multiply each side of the equation on the left by .   "
},
{
  "id": "practice-basic-operations-15",
  "level": "2",
  "url": "practice-basic-operations.html#practice-basic-operations-15",
  "type": "Exercise",
  "number": "1.2.14",
  "title": "",
  "body": "  Multiplication is defined when and .    "
},
{
  "id": "practice-basic-operations-16",
  "level": "2",
  "url": "practice-basic-operations.html#practice-basic-operations-16",
  "type": "Exercise",
  "number": "1.2.15",
  "title": "",
  "body": "  For any two matrices , .   "
},
{
  "id": "practice-basic-operations-17",
  "level": "2",
  "url": "practice-basic-operations.html#practice-basic-operations-17",
  "type": "Exercise",
  "number": "1.2.16",
  "title": "",
  "body": " For any , .  "
},
{
  "id": "practice-basic-operations-18",
  "level": "2",
  "url": "practice-basic-operations.html#practice-basic-operations-18",
  "type": "Exercise",
  "number": "1.2.17",
  "title": "",
  "body": "  The following system of linear equations has infinitely many solutions.    "
},
{
  "id": "practice-basic-operations-19",
  "level": "2",
  "url": "practice-basic-operations.html#practice-basic-operations-19",
  "type": "Exercise",
  "number": "1.2.18",
  "title": "",
  "body": "  For the following matrix we have .    "
},
{
  "id": "practice-basic-operations-20",
  "level": "2",
  "url": "practice-basic-operations.html#practice-basic-operations-20",
  "type": "Exercise",
  "number": "1.2.19",
  "title": "",
  "body": "  Every matrix in has an inverse.   "
},
{
  "id": "practice-basic-operations-21",
  "level": "2",
  "url": "practice-basic-operations.html#practice-basic-operations-21",
  "type": "Exercise",
  "number": "1.2.20",
  "title": "",
  "body": "  Let . The inverse of is , i.e.,    "
},
{
  "id": "sec-row-echelon-form",
  "level": "1",
  "url": "sec-row-echelon-form.html",
  "type": "Section",
  "number": "1.3",
  "title": "Row reduced echelon form of a matrix",
  "body": " Row reduced echelon form of a matrix   In this section we denote by either the set of real numbers, or the set of complex numbers, .    (Elementary row operations)   Let . Denote by (for ) the -th row of . Following are elementary row operations.   Interchanging -th row with -th row. This operation is usually denoted by .    Multiplying -th row by a nonzero . This operation is usually denoted by .    Adding a constant multiple of -th row to -th row. This operation is usually denoted by .         A square matrix is said to be an elementary matrix if it is obtained from the identity matrix by performing only one of the row operations described in on .     Procedure to obtain a row reduced echelon form of a matrix  Recall that given a matrix , by applying a sequence of elementary row operations, can be reduced to a row reduced echelon form of . The matrix has the following properties.   All zero rows occurs at the bottom of .  If a row of is nonzero then the first nonzero entry is , it is called pivot or the leading entry .  In any two successive nonzero rows of , the pivot in the lower row occurs to the right of the pivot in the higher row.  Each column of that contains the pivot has zero everywhere else.    The natural question arises: Does the sequence in which row operations are performed change the resulting row reduced echelon form of The answer is no!    A matrix is said to be in row reduced echelon matrix if it satisfies all the properties listed in .      A row reduced echelon matrix of size invertible if and only if it is the identity matrix .     The identity matrix is invertible, and it is a row reduced echelon matrix. Conversely, we show that if is row reduced echelon matrix which is invertible then, . Equivalently, we can show that if , then can not be invertible. Indeed, if , then, the last row, i.e., the -th row of must be zero row. This follows from the definition of row reduced echelon matrix. Consider the matrix , where if , and for any . Then, . Indeed, . As for , we must have . However, as the -th row of is zero, we have . Thus, , and hence is not invertible, see .     The row reduced echelon form of a matrix is unique.         Let be a block row reduced echelon form of , where and are column vectors. The system has a solution if and only if the system has a solution.    Let be a block row reduced echelon form of , where and are column vectors. The system has a solution if and only if there is no pivot in the last column . In that case, one may assign arbitrary values to if the -th column does not contain a pivot.    Every system (here is matrix with all entries zero) of equations and unknowns with has a nonzero solution.       "
},
{
  "id": "def-elementary-row-operations",
  "level": "2",
  "url": "sec-row-echelon-form.html#def-elementary-row-operations",
  "type": "Definition",
  "number": "1.3.1",
  "title": "(Elementary row operations).",
  "body": " (Elementary row operations)   Let . Denote by (for ) the -th row of . Following are elementary row operations.   Interchanging -th row with -th row. This operation is usually denoted by .    Multiplying -th row by a nonzero . This operation is usually denoted by .    Adding a constant multiple of -th row to -th row. This operation is usually denoted by .      "
},
{
  "id": "def-elementary-matrices",
  "level": "2",
  "url": "sec-row-echelon-form.html#def-elementary-matrices",
  "type": "Definition",
  "number": "1.3.2",
  "title": "",
  "body": "  A square matrix is said to be an elementary matrix if it is obtained from the identity matrix by performing only one of the row operations described in on .   "
},
{
  "id": "row-reduced-echelon-form-procedure",
  "level": "2",
  "url": "sec-row-echelon-form.html#row-reduced-echelon-form-procedure",
  "type": "Note",
  "number": "1.3.3",
  "title": "Procedure to obtain a row reduced echelon form of a matrix.",
  "body": " Procedure to obtain a row reduced echelon form of a matrix  Recall that given a matrix , by applying a sequence of elementary row operations, can be reduced to a row reduced echelon form of . The matrix has the following properties.   All zero rows occurs at the bottom of .  If a row of is nonzero then the first nonzero entry is , it is called pivot or the leading entry .  In any two successive nonzero rows of , the pivot in the lower row occurs to the right of the pivot in the higher row.  Each column of that contains the pivot has zero everywhere else.   "
},
{
  "id": "def-row-reduced-echelon-matrix",
  "level": "2",
  "url": "sec-row-echelon-form.html#def-row-reduced-echelon-matrix",
  "type": "Definition",
  "number": "1.3.4",
  "title": "",
  "body": "  A matrix is said to be in row reduced echelon matrix if it satisfies all the properties listed in .   "
},
{
  "id": "lem-RREF-invertible-iff-identity",
  "level": "2",
  "url": "sec-row-echelon-form.html#lem-RREF-invertible-iff-identity",
  "type": "Lemma",
  "number": "1.3.5",
  "title": "",
  "body": "  A row reduced echelon matrix of size invertible if and only if it is the identity matrix .   "
},
{
  "id": "sec-row-echelon-form-9",
  "level": "2",
  "url": "sec-row-echelon-form.html#sec-row-echelon-form-9",
  "type": "Proof",
  "number": "1.3.1",
  "title": "",
  "body": " The identity matrix is invertible, and it is a row reduced echelon matrix. Conversely, we show that if is row reduced echelon matrix which is invertible then, . Equivalently, we can show that if , then can not be invertible. Indeed, if , then, the last row, i.e., the -th row of must be zero row. This follows from the definition of row reduced echelon matrix. Consider the matrix , where if , and for any . Then, . Indeed, . As for , we must have . However, as the -th row of is zero, we have . Thus, , and hence is not invertible, see .  "
},
{
  "id": "fact-uniqueness-of-echelon-form",
  "level": "2",
  "url": "sec-row-echelon-form.html#fact-uniqueness-of-echelon-form",
  "type": "Fact",
  "number": "1.3.6",
  "title": "",
  "body": "  The row reduced echelon form of a matrix is unique.   "
},
{
  "id": "thm-solutions-of-linear-equations",
  "level": "2",
  "url": "sec-row-echelon-form.html#thm-solutions-of-linear-equations",
  "type": "Theorem",
  "number": "1.3.7",
  "title": "",
  "body": "     Let be a block row reduced echelon form of , where and are column vectors. The system has a solution if and only if the system has a solution.    Let be a block row reduced echelon form of , where and are column vectors. The system has a solution if and only if there is no pivot in the last column . In that case, one may assign arbitrary values to if the -th column does not contain a pivot.    Every system (here is matrix with all entries zero) of equations and unknowns with has a nonzero solution.      "
},
{
  "id": "practice-row-echelon-form",
  "level": "1",
  "url": "practice-row-echelon-form.html",
  "type": "Exercises",
  "number": "1.4",
  "title": "Exercises",
  "body": "  A few exercises related to the row reduced echelon form of a matrix are listed below.    Find the row reduced echelon form of the following matrices. .    How many pivots are there in one row? How many pivots are there in one column?    In a matrix what is the largest possible number of pivots?    Write the row reduced echelon matrix whose every row has a pivot.    Consider the following augmented matrices. In each case consider the corresponding system of linear equations and determine whether the system has no solution, a unique solution, or infinitely many solutions.                   where .        Consider any square matrix of size of your choice. Using the row reduced echelon form determine whether your matrix is invertible or not (see ).      List all possible types of elementary matrices of size and . Further show that these matrices are invertible.      Let . Perform the row operation described in , and denote the resulting matrix by . Now perform the exact same operation on the identity matrix , and denote the resulting matrix by (note that is an elemetary matrix). Show that . What happens if we consider in terms of columns of ?  Do the same exercise for other two row operations mentioned in .      Consider the system of equations with and .     Show that if the above system has two distinct solutions then it has infinitely many solutions.    Show that the above system has a solution in the complex numbers if and only if it has a solution in the real numbers.         Let . Show that if the system has a unique solution for some particular then the system has a unique solution for any .    "
},
{
  "id": "practice-row-echelon-form-2",
  "level": "2",
  "url": "practice-row-echelon-form.html#practice-row-echelon-form-2",
  "type": "Exercise",
  "number": "1.4.1",
  "title": "",
  "body": " Find the row reduced echelon form of the following matrices. .  "
},
{
  "id": "practice-row-echelon-form-3",
  "level": "2",
  "url": "practice-row-echelon-form.html#practice-row-echelon-form-3",
  "type": "Exercise",
  "number": "1.4.2",
  "title": "",
  "body": " How many pivots are there in one row? How many pivots are there in one column?  "
},
{
  "id": "practice-row-echelon-form-4",
  "level": "2",
  "url": "practice-row-echelon-form.html#practice-row-echelon-form-4",
  "type": "Exercise",
  "number": "1.4.3",
  "title": "",
  "body": " In a matrix what is the largest possible number of pivots?  "
},
{
  "id": "practice-row-echelon-form-5",
  "level": "2",
  "url": "practice-row-echelon-form.html#practice-row-echelon-form-5",
  "type": "Exercise",
  "number": "1.4.4",
  "title": "",
  "body": " Write the row reduced echelon matrix whose every row has a pivot.  "
},
{
  "id": "practice-row-echelon-form-6",
  "level": "2",
  "url": "practice-row-echelon-form.html#practice-row-echelon-form-6",
  "type": "Exercise",
  "number": "1.4.5",
  "title": "",
  "body": " Consider the following augmented matrices. In each case consider the corresponding system of linear equations and determine whether the system has no solution, a unique solution, or infinitely many solutions.                   where .     "
},
{
  "id": "practice-row-echelon-form-7",
  "level": "2",
  "url": "practice-row-echelon-form.html#practice-row-echelon-form-7",
  "type": "Exercise",
  "number": "1.4.6",
  "title": "",
  "body": "  Consider any square matrix of size of your choice. Using the row reduced echelon form determine whether your matrix is invertible or not (see ).   "
},
{
  "id": "practice-row-echelon-form-8",
  "level": "2",
  "url": "practice-row-echelon-form.html#practice-row-echelon-form-8",
  "type": "Exercise",
  "number": "1.4.7",
  "title": "",
  "body": "  List all possible types of elementary matrices of size and . Further show that these matrices are invertible.   "
},
{
  "id": "practice-row-echelon-form-9",
  "level": "2",
  "url": "practice-row-echelon-form.html#practice-row-echelon-form-9",
  "type": "Exercise",
  "number": "1.4.8",
  "title": "",
  "body": "  Let . Perform the row operation described in , and denote the resulting matrix by . Now perform the exact same operation on the identity matrix , and denote the resulting matrix by (note that is an elemetary matrix). Show that . What happens if we consider in terms of columns of ?  Do the same exercise for other two row operations mentioned in .   "
},
{
  "id": "practice-row-echelon-form-10",
  "level": "2",
  "url": "practice-row-echelon-form.html#practice-row-echelon-form-10",
  "type": "Exercise",
  "number": "1.4.9",
  "title": "",
  "body": "  Consider the system of equations with and .     Show that if the above system has two distinct solutions then it has infinitely many solutions.    Show that the above system has a solution in the complex numbers if and only if it has a solution in the real numbers.      "
},
{
  "id": "practice-row-echelon-form-11",
  "level": "2",
  "url": "practice-row-echelon-form.html#practice-row-echelon-form-11",
  "type": "Exercise",
  "number": "1.4.10",
  "title": "",
  "body": "  Let . Show that if the system has a unique solution for some particular then the system has a unique solution for any .   "
},
{
  "id": "sec-elementary-matrices",
  "level": "1",
  "url": "sec-elementary-matrices.html",
  "type": "Section",
  "number": "1.5",
  "title": "Elementry matrices",
  "body": " Elementry matrices   In this section we denote by either the set of real numbers, or the set of complex numbers, .     An matrix is called an elementary matrix if it can be obtained from the identity matrix by performing a single elementary row operation, as given in , on .      The following are examples of elementary matrices.    is an elementary matrix obtained from by interchanging the first and second rows of .     is an elementary matrix obtained from by adding three times the first row of to the second row of .     is an elementary matrix obtained from by multiplying the second row of by .         An elementary matrix obtained by interchanging the -th and -th rows of has the following form.   An elementary matrix obtained by multiplying the -th row of by a nonzero scalar has the following form.   An elementary matrix obtained by adding times the -th row of to the -th row of has the following form.       Suppose and is an elementary matrix. Then the product is obtained from by performing the same elementary row operation on as was performed on to obtain .     We only show the statement for the case when is obtained from by adding times the -th row of to the -th row of . The other two cases can be proved similarly. Let . Then, the product , where for and . This shows that is obtained from by adding times the -th row of to the -th row of .     Every elementary matrix is invertible, and the inverse of an elementary matrix is also an elementary matrix of the same kind.     We only show the statement for the case when is obtained from by adding times the -th row of to the -th row of . The other two cases can be proved similarly. Let is the elementary matrix obtained from by adding times the -th row of to the -th row of . Then,we have the following. A similar computation shows that . This shows that is the inverse of , and hence, is invertible.     A square matrix is invertible (see ) if and only if the row reduced echelon form of is the identity matrix .     Suppose that is invertible. The row reduced echelon form of is obtained from by performing a sequence of elementary row operations. By , there exist elementary matrices such that As is invertible, and the product is a product of invertible matrices (see ), the matrix is invertible, see . Therefore, is invertible. Since is a row reduced echelon matrix, it must be the identity matrix , see .  Conversely, suppose that the row reduced echelon form of is the identity matrix . Then, by , there exist elementary matrices such that As each is invertible (see ), the product is invertible, see . Therefore, , and , i.e., is invertible.   "
},
{
  "id": "def-elementary-matrix",
  "level": "2",
  "url": "sec-elementary-matrices.html#def-elementary-matrix",
  "type": "Definition",
  "number": "1.5.1",
  "title": "",
  "body": "  An matrix is called an elementary matrix if it can be obtained from the identity matrix by performing a single elementary row operation, as given in , on .   "
},
{
  "id": "sec-elementary-matrices-4",
  "level": "2",
  "url": "sec-elementary-matrices.html#sec-elementary-matrices-4",
  "type": "Example",
  "number": "1.5.2",
  "title": "",
  "body": "  The following are examples of elementary matrices.    is an elementary matrix obtained from by interchanging the first and second rows of .     is an elementary matrix obtained from by adding three times the first row of to the second row of .     is an elementary matrix obtained from by multiplying the second row of by .      "
},
{
  "id": "note-general-form-of-elementary-matrix",
  "level": "2",
  "url": "sec-elementary-matrices.html#note-general-form-of-elementary-matrix",
  "type": "Note",
  "number": "1.5.3",
  "title": "",
  "body": "  An elementary matrix obtained by interchanging the -th and -th rows of has the following form.   An elementary matrix obtained by multiplying the -th row of by a nonzero scalar has the following form.   An elementary matrix obtained by adding times the -th row of to the -th row of has the following form.    "
},
{
  "id": "lem-elemenatary-row-operations-as-left-multiplication-by-elementary-matrix",
  "level": "2",
  "url": "sec-elementary-matrices.html#lem-elemenatary-row-operations-as-left-multiplication-by-elementary-matrix",
  "type": "Lemma",
  "number": "1.5.4",
  "title": "",
  "body": "  Suppose and is an elementary matrix. Then the product is obtained from by performing the same elementary row operation on as was performed on to obtain .   "
},
{
  "id": "sec-elementary-matrices-7",
  "level": "2",
  "url": "sec-elementary-matrices.html#sec-elementary-matrices-7",
  "type": "Proof",
  "number": "1.5.1",
  "title": "",
  "body": " We only show the statement for the case when is obtained from by adding times the -th row of to the -th row of . The other two cases can be proved similarly. Let . Then, the product , where for and . This shows that is obtained from by adding times the -th row of to the -th row of .  "
},
{
  "id": "prop-elementary-matrices-are-invertible",
  "level": "2",
  "url": "sec-elementary-matrices.html#prop-elementary-matrices-are-invertible",
  "type": "Proposition",
  "number": "1.5.5",
  "title": "",
  "body": "  Every elementary matrix is invertible, and the inverse of an elementary matrix is also an elementary matrix of the same kind.   "
},
{
  "id": "sec-elementary-matrices-9",
  "level": "2",
  "url": "sec-elementary-matrices.html#sec-elementary-matrices-9",
  "type": "Proof",
  "number": "1.5.2",
  "title": "",
  "body": " We only show the statement for the case when is obtained from by adding times the -th row of to the -th row of . The other two cases can be proved similarly. Let is the elementary matrix obtained from by adding times the -th row of to the -th row of . Then,we have the following. A similar computation shows that . This shows that is the inverse of , and hence, is invertible.  "
},
{
  "id": "thm-invertible-matrix-row-echelon-form",
  "level": "2",
  "url": "sec-elementary-matrices.html#thm-invertible-matrix-row-echelon-form",
  "type": "Theorem",
  "number": "1.5.6",
  "title": "",
  "body": "  A square matrix is invertible (see ) if and only if the row reduced echelon form of is the identity matrix .   "
},
{
  "id": "sec-elementary-matrices-11",
  "level": "2",
  "url": "sec-elementary-matrices.html#sec-elementary-matrices-11",
  "type": "Proof",
  "number": "1.5.3",
  "title": "",
  "body": " Suppose that is invertible. The row reduced echelon form of is obtained from by performing a sequence of elementary row operations. By , there exist elementary matrices such that As is invertible, and the product is a product of invertible matrices (see ), the matrix is invertible, see . Therefore, is invertible. Since is a row reduced echelon matrix, it must be the identity matrix , see .  Conversely, suppose that the row reduced echelon form of is the identity matrix . Then, by , there exist elementary matrices such that As each is invertible (see ), the product is invertible, see . Therefore, , and , i.e., is invertible.  "
},
{
  "id": "sec-rank-trace-det",
  "level": "1",
  "url": "sec-rank-trace-det.html",
  "type": "Section",
  "number": "1.6",
  "title": "Some invariants attached to a matrix",
  "body": " Some invariants attached to a matrix   In this section we denote by either the set of real numbers, or the set of complex numbers, .     The rank of a matrix is the number of nonzero rows in the row reduced echelon form of .  We denote the rank of by .     It follows from that for a matrix , the rank of is equal to the number of pivots in the row reduced echelon form of , which in turn can be at most .     The trace of a square matrix is the sum of all its diagonal entries. The trace of a square matrix is denoted by . If is given by then the trace of ,     We now define the determinant of a square matrix recursively. We will not give a general definition.   Given an matrix over , its determinant is denoted by     Apart from various explantions given in lectures one may see this YouTube video with excellent animations to get started with the concept of determinants.     The determinant of a matrix is denote by and it is equal to , i.e.,       Consider as follows. The determinant of is      In the formula of the determinant of observe the following.   Change of signs in consecutive terms.    First entry is obtained by multiplying by the determinant of matrix obtained by deleting the first row and the first column of . The second entry is obtained by multiplying by the determinant of matrix obtained by deleting the first row and the second column of . The third entry is obtained by multiplying by the determinant of matrix obtained by deleting the first row and the third column of .      For the rest of this section we use a short notation to write a square matrix, viz., we write to denote the following matrix.    We stress that the determinant of a square matrix is an element of .     Properties of the determinant . Assume that .    Row linearity . Let be the -th row of . For we let . For any and any and any we get the following.   For and any , .   Row rearrangement . Let be the matrix obtained by interchanging the -th row of with the -th row of . Then    Alternating . If any two rows of are the same then .   Transpose . For any ,    Triangular matrices . If is an upper triangular (resp., lower triangular) matrix, i.e., for (resp., for ) then    Block form . Let . Let , , , and be the zero matrix. The determinant of is given by Similar result is true for lower triangular block matrices.   Multiplicative property . Let . We have     Invertibility. A matrix is invertible if and only if if and only if .      "
},
{
  "id": "def-rank",
  "level": "2",
  "url": "sec-rank-trace-det.html#def-rank",
  "type": "Definition",
  "number": "1.6.1",
  "title": "",
  "body": "  The rank of a matrix is the number of nonzero rows in the row reduced echelon form of .  We denote the rank of by .   "
},
{
  "id": "sec-rank-trace-det-4",
  "level": "2",
  "url": "sec-rank-trace-det.html#sec-rank-trace-det-4",
  "type": "Remark",
  "number": "1.6.2",
  "title": "",
  "body": " It follows from that for a matrix , the rank of is equal to the number of pivots in the row reduced echelon form of , which in turn can be at most .  "
},
{
  "id": "def-trace",
  "level": "2",
  "url": "sec-rank-trace-det.html#def-trace",
  "type": "Definition",
  "number": "1.6.3",
  "title": "",
  "body": "  The trace of a square matrix is the sum of all its diagonal entries. The trace of a square matrix is denoted by . If is given by then the trace of ,    "
},
{
  "id": "sec-rank-trace-det-7",
  "level": "2",
  "url": "sec-rank-trace-det.html#sec-rank-trace-det-7",
  "type": "Convention",
  "number": "1.6.4",
  "title": "",
  "body": " Given an matrix over , its determinant is denoted by   "
},
{
  "id": "sec-rank-trace-det-8",
  "level": "2",
  "url": "sec-rank-trace-det.html#sec-rank-trace-det-8",
  "type": "Note",
  "number": "1.6.5",
  "title": "",
  "body": " Apart from various explantions given in lectures one may see this YouTube video with excellent animations to get started with the concept of determinants.  "
},
{
  "id": "def-det-2",
  "level": "2",
  "url": "sec-rank-trace-det.html#def-det-2",
  "type": "Definition",
  "number": "1.6.6",
  "title": "",
  "body": "  The determinant of a matrix is denote by and it is equal to , i.e.,    "
},
{
  "id": "def-det-3",
  "level": "2",
  "url": "sec-rank-trace-det.html#def-det-3",
  "type": "Definition",
  "number": "1.6.7",
  "title": "",
  "body": "  Consider as follows. The determinant of is    "
},
{
  "id": "sec-rank-trace-det-11",
  "level": "2",
  "url": "sec-rank-trace-det.html#sec-rank-trace-det-11",
  "type": "Note",
  "number": "1.6.8",
  "title": "",
  "body": " In the formula of the determinant of observe the following.   Change of signs in consecutive terms.    First entry is obtained by multiplying by the determinant of matrix obtained by deleting the first row and the first column of . The second entry is obtained by multiplying by the determinant of matrix obtained by deleting the first row and the second column of . The third entry is obtained by multiplying by the determinant of matrix obtained by deleting the first row and the third column of .     "
},
{
  "id": "sec-rank-trace-det-13",
  "level": "2",
  "url": "sec-rank-trace-det.html#sec-rank-trace-det-13",
  "type": "Note",
  "number": "1.6.9",
  "title": "",
  "body": " We stress that the determinant of a square matrix is an element of .  "
},
{
  "id": "properties-of-det",
  "level": "2",
  "url": "sec-rank-trace-det.html#properties-of-det",
  "type": "Fact",
  "number": "1.6.10",
  "title": "",
  "body": "  Properties of the determinant . Assume that .    Row linearity . Let be the -th row of . For we let . For any and any and any we get the following.   For and any , .   Row rearrangement . Let be the matrix obtained by interchanging the -th row of with the -th row of . Then    Alternating . If any two rows of are the same then .   Transpose . For any ,    Triangular matrices . If is an upper triangular (resp., lower triangular) matrix, i.e., for (resp., for ) then    Block form . Let . Let , , , and be the zero matrix. The determinant of is given by Similar result is true for lower triangular block matrices.   Multiplicative property . Let . We have     Invertibility. A matrix is invertible if and only if if and only if .     "
},
{
  "id": "practice-rank-trace-det",
  "level": "1",
  "url": "practice-rank-trace-det.html",
  "type": "Exercises",
  "number": "1.7",
  "title": "Exercises",
  "body": "   Find ranks of matrices in .      Given show that and that   Furthermore show that if is invertible then     Use the formula for -th entry of a product given in .      Consider any square matrix of size of your choice and find its determinant.      Show that the following matrix is invertible, and that .       Show that the determinant of the following matrix is . Find a condition on so that the determinant of the above matrix is nonzero.    "
},
{
  "id": "practice-rank-trace-det-1",
  "level": "2",
  "url": "practice-rank-trace-det.html#practice-rank-trace-det-1",
  "type": "Exercise",
  "number": "1.7.1",
  "title": "",
  "body": "  Find ranks of matrices in .   "
},
{
  "id": "practice-rank-trace-det-2",
  "level": "2",
  "url": "practice-rank-trace-det.html#practice-rank-trace-det-2",
  "type": "Exercise",
  "number": "1.7.2",
  "title": "",
  "body": "  Given show that and that   Furthermore show that if is invertible then     Use the formula for -th entry of a product given in .   "
},
{
  "id": "practice-rank-trace-det-3",
  "level": "2",
  "url": "practice-rank-trace-det.html#practice-rank-trace-det-3",
  "type": "Exercise",
  "number": "1.7.3",
  "title": "",
  "body": "  Consider any square matrix of size of your choice and find its determinant.   "
},
{
  "id": "practice-rank-trace-det-4",
  "level": "2",
  "url": "practice-rank-trace-det.html#practice-rank-trace-det-4",
  "type": "Exercise",
  "number": "1.7.4",
  "title": "",
  "body": "  Show that the following matrix is invertible, and that .    "
},
{
  "id": "practice-rank-trace-det-5",
  "level": "2",
  "url": "practice-rank-trace-det.html#practice-rank-trace-det-5",
  "type": "Exercise",
  "number": "1.7.5",
  "title": "",
  "body": "  Show that the determinant of the following matrix is . Find a condition on so that the determinant of the above matrix is nonzero.   "
},
{
  "id": "sec-matrices-linear-maps",
  "level": "1",
  "url": "sec-matrices-linear-maps.html",
  "type": "Section",
  "number": "1.8",
  "title": "Matrices and linear maps",
  "body": " Matrices and linear maps    Let . A function is said to be a linear map if it satisfies the following conditions.   For any and any ,     For any ,          Let . For each we consider the following column vector. where occurs in the -th row and all other entries are zero. We call the -th standard basis vector of .  We call the set of column vectors the standard basis .     Suppose that . Then we have the following.     Using , if is a linear map then, for any we get the following. Thus, a linear map is completely determined by column vectors .     We keep notations of . For a linear map we associate a matrix, denoted by , whose -th column vector is , for . Thus, if then, associated matrix will be      We remark that in , the matrix associated with a linear map is always taken to be with respect to the standard basis.    Let . Consider the following map. This map is a linear map. Note that if then, for any , we get the following. Furthermore, the matrix of the linear map, is the following.    Using and we get a one-one correspondence between the set of all matrices over , and the set of all linear maps from to . We note that in , the matrix associated with a linear map is always taken to be with respect to the standard basis ( ).    The map given by where, is the matrix associated to as in .    "
},
{
  "id": "def-linear-map",
  "level": "2",
  "url": "sec-matrices-linear-maps.html#def-linear-map",
  "type": "Definition",
  "number": "1.8.1",
  "title": "",
  "body": "  Let . A function is said to be a linear map if it satisfies the following conditions.   For any and any ,     For any ,       "
},
{
  "id": "def-standard-basis",
  "level": "2",
  "url": "sec-matrices-linear-maps.html#def-standard-basis",
  "type": "Definition",
  "number": "1.8.2",
  "title": "",
  "body": "  Let . For each we consider the following column vector. where occurs in the -th row and all other entries are zero. We call the -th standard basis vector of .  We call the set of column vectors the standard basis .   "
},
{
  "id": "linear-combination",
  "level": "2",
  "url": "sec-matrices-linear-maps.html#linear-combination",
  "type": "Observation",
  "number": "1.8.3",
  "title": "",
  "body": " Suppose that . Then we have the following.   "
},
{
  "id": "action-on-basis",
  "level": "2",
  "url": "sec-matrices-linear-maps.html#action-on-basis",
  "type": "Observation",
  "number": "1.8.4",
  "title": "",
  "body": " Using , if is a linear map then, for any we get the following. Thus, a linear map is completely determined by column vectors .  "
},
{
  "id": "def-matrix-of-linear-map",
  "level": "2",
  "url": "sec-matrices-linear-maps.html#def-matrix-of-linear-map",
  "type": "Definition",
  "number": "1.8.5",
  "title": "",
  "body": "  We keep notations of . For a linear map we associate a matrix, denoted by , whose -th column vector is , for . Thus, if then, associated matrix will be    "
},
{
  "id": "sec-matrices-linear-maps-7",
  "level": "2",
  "url": "sec-matrices-linear-maps.html#sec-matrices-linear-maps-7",
  "type": "Remark",
  "number": "1.8.6",
  "title": "",
  "body": " We remark that in , the matrix associated with a linear map is always taken to be with respect to the standard basis.  "
},
{
  "id": "linear-map-using-matrix",
  "level": "2",
  "url": "sec-matrices-linear-maps.html#linear-map-using-matrix",
  "type": "Remark",
  "number": "1.8.7",
  "title": "",
  "body": " Let . Consider the following map. This map is a linear map. Note that if then, for any , we get the following. Furthermore, the matrix of the linear map, is the following.   "
},
{
  "id": "thm-correspondence-between-matrices-linear-maps",
  "level": "2",
  "url": "sec-matrices-linear-maps.html#thm-correspondence-between-matrices-linear-maps",
  "type": "Theorem",
  "number": "1.8.8",
  "title": "",
  "body": "  The map given by where, is the matrix associated to as in .   "
},
{
  "id": "practice-matrices-linear-maps",
  "level": "1",
  "url": "practice-matrices-linear-maps.html",
  "type": "Exercises",
  "number": "1.9",
  "title": "Exercises",
  "body": "  A few exercises related to the concept of linear maps are listed below.     Consider the following maps. In each of the following cases do the following.   Check if the map defined is linear or not.    If the map is linear then find the matrix associated to it as outlined in .    Draw the images of standard basis vectors (see ).    If the map is linear and if its associated matrix, , is invertible then find the linear map associated to , (see ). Compute and .        given by      given by      given by      given by where, and are real numbers.     given by      given by      given by      given by      given by       Assume that is a linear map and Find .    "
},
{
  "id": "practice-matrices-linear-maps-2-2",
  "level": "2",
  "url": "practice-matrices-linear-maps.html#practice-matrices-linear-maps-2-2",
  "type": "Exercise",
  "number": "1.9.1",
  "title": "",
  "body": "  given by   "
},
{
  "id": "practice-matrices-linear-maps-2-3",
  "level": "2",
  "url": "practice-matrices-linear-maps.html#practice-matrices-linear-maps-2-3",
  "type": "Exercise",
  "number": "1.9.2",
  "title": "",
  "body": "  given by   "
},
{
  "id": "practice-matrices-linear-maps-2-4",
  "level": "2",
  "url": "practice-matrices-linear-maps.html#practice-matrices-linear-maps-2-4",
  "type": "Exercise",
  "number": "1.9.3",
  "title": "",
  "body": "  given by   "
},
{
  "id": "practice-matrices-linear-maps-2-5",
  "level": "2",
  "url": "practice-matrices-linear-maps.html#practice-matrices-linear-maps-2-5",
  "type": "Exercise",
  "number": "1.9.4",
  "title": "",
  "body": "  given by where, and are real numbers.  "
},
{
  "id": "practice-matrices-linear-maps-2-6",
  "level": "2",
  "url": "practice-matrices-linear-maps.html#practice-matrices-linear-maps-2-6",
  "type": "Exercise",
  "number": "1.9.5",
  "title": "",
  "body": "  given by   "
},
{
  "id": "practice-matrices-linear-maps-2-7",
  "level": "2",
  "url": "practice-matrices-linear-maps.html#practice-matrices-linear-maps-2-7",
  "type": "Exercise",
  "number": "1.9.6",
  "title": "",
  "body": "  given by   "
},
{
  "id": "practice-matrices-linear-maps-2-8",
  "level": "2",
  "url": "practice-matrices-linear-maps.html#practice-matrices-linear-maps-2-8",
  "type": "Exercise",
  "number": "1.9.7",
  "title": "",
  "body": "  given by   "
},
{
  "id": "practice-matrices-linear-maps-2-9",
  "level": "2",
  "url": "practice-matrices-linear-maps.html#practice-matrices-linear-maps-2-9",
  "type": "Exercise",
  "number": "1.9.8",
  "title": "",
  "body": "  given by   "
},
{
  "id": "practice-matrices-linear-maps-2-10",
  "level": "2",
  "url": "practice-matrices-linear-maps.html#practice-matrices-linear-maps-2-10",
  "type": "Exercise",
  "number": "1.9.9",
  "title": "",
  "body": "  given by   "
},
{
  "id": "practice-matrices-linear-maps-3",
  "level": "2",
  "url": "practice-matrices-linear-maps.html#practice-matrices-linear-maps-3",
  "type": "Exercise",
  "number": "1.9.10",
  "title": "",
  "body": "  Assume that is a linear map and Find .   "
},
{
  "id": "sec-kernel-ch-poly-eigen",
  "level": "1",
  "url": "sec-kernel-ch-poly-eigen.html",
  "type": "Section",
  "number": "1.10",
  "title": "Kernel, Characteristic polynomials, eigenvalues and eigenvectors",
  "body": " Kernel, Characteristic polynomials, eigenvalues and eigenvectors    Let be a linear map. The kernel of is the following set (more precisely a linear subspace).     The kernel of a linear map always contains .    Let be a square matrix. The characteristic polynomial of is where is a variable and is the identity matrix.      Let . A root of the characteristic polynomial of is called an eigenvalue of .      Let matrix and be an eigenvalue of . A nonzero is said to be an eigenvector corresponding to if .    If is an eigenvector corresponding to an eigenvalue then, for any we have the following. Thus, if is an eigenvector corresponding to an eigenvalue then so is any nonzero scalar multiple of . Geometrically, if we draw a straight line through the origin in the direction of an eigenvector, then any vector on this straight line will remain on the line after the linear map corresponding to (see ) is applied.    Let and be an eigenvalue of . We descibe a method to find an eigenvector corresponding to .  Consider the following matrix and the linear map corresponding to . Suppose that . Thus we must have the following. Hence, we get that .  The above calculations show that any nonzero column vector in the kernel of will be an eigenvector corresponding to .   "
},
{
  "id": "def-kernel",
  "level": "2",
  "url": "sec-kernel-ch-poly-eigen.html#def-kernel",
  "type": "Definition",
  "number": "1.10.1",
  "title": "",
  "body": "  Let be a linear map. The kernel of is the following set (more precisely a linear subspace).    "
},
{
  "id": "sec-kernel-ch-poly-eigen-3",
  "level": "2",
  "url": "sec-kernel-ch-poly-eigen.html#sec-kernel-ch-poly-eigen-3",
  "type": "Note",
  "number": "1.10.2",
  "title": "",
  "body": "The kernel of a linear map always contains . "
},
{
  "id": "def-characteristic-polynomial",
  "level": "2",
  "url": "sec-kernel-ch-poly-eigen.html#def-characteristic-polynomial",
  "type": "Definition",
  "number": "1.10.3",
  "title": "",
  "body": "  Let be a square matrix. The characteristic polynomial of is where is a variable and is the identity matrix.   "
},
{
  "id": "def-eigenvalue",
  "level": "2",
  "url": "sec-kernel-ch-poly-eigen.html#def-eigenvalue",
  "type": "Definition",
  "number": "1.10.4",
  "title": "",
  "body": "  Let . A root of the characteristic polynomial of is called an eigenvalue of .   "
},
{
  "id": "def-eigenvector",
  "level": "2",
  "url": "sec-kernel-ch-poly-eigen.html#def-eigenvector",
  "type": "Definition",
  "number": "1.10.5",
  "title": "",
  "body": "  Let matrix and be an eigenvalue of . A nonzero is said to be an eigenvector corresponding to if .   "
},
{
  "id": "sec-kernel-ch-poly-eigen-7",
  "level": "2",
  "url": "sec-kernel-ch-poly-eigen.html#sec-kernel-ch-poly-eigen-7",
  "type": "Remark",
  "number": "1.10.6",
  "title": "",
  "body": "If is an eigenvector corresponding to an eigenvalue then, for any we have the following. Thus, if is an eigenvector corresponding to an eigenvalue then so is any nonzero scalar multiple of . Geometrically, if we draw a straight line through the origin in the direction of an eigenvector, then any vector on this straight line will remain on the line after the linear map corresponding to (see ) is applied.  "
},
{
  "id": "computing-eigenvector",
  "level": "2",
  "url": "sec-kernel-ch-poly-eigen.html#computing-eigenvector",
  "type": "Note",
  "number": "1.10.7",
  "title": "",
  "body": " Let and be an eigenvalue of . We descibe a method to find an eigenvector corresponding to .  Consider the following matrix and the linear map corresponding to . Suppose that . Thus we must have the following. Hence, we get that .  The above calculations show that any nonzero column vector in the kernel of will be an eigenvector corresponding to .  "
},
{
  "id": "practice-kernel-ch-poly-eigen",
  "level": "1",
  "url": "practice-kernel-ch-poly-eigen.html",
  "type": "Exercises",
  "number": "1.11",
  "title": "Exercises",
  "body": "   Compute the kernel of the linear map corresponding to the given matrix (see ). Furthermore, find all eigenvalues in and and corresponding eigenvectors.                                  where, .       where, .                     Consider the following matrix. Find .      Find a matrix such that , , and . List all its eigenvalues in and find corresponding eigenvectors. Describe action of the linear map corresponding to geometrically.    "
},
{
  "id": "practice-kernel-ch-poly-eigen-1-2",
  "level": "2",
  "url": "practice-kernel-ch-poly-eigen.html#practice-kernel-ch-poly-eigen-1-2",
  "type": "Exercise",
  "number": "1.11.1",
  "title": "",
  "body": "      "
},
{
  "id": "practice-kernel-ch-poly-eigen-1-3",
  "level": "2",
  "url": "practice-kernel-ch-poly-eigen.html#practice-kernel-ch-poly-eigen-1-3",
  "type": "Exercise",
  "number": "1.11.2",
  "title": "",
  "body": "      "
},
{
  "id": "practice-kernel-ch-poly-eigen-1-4",
  "level": "2",
  "url": "practice-kernel-ch-poly-eigen.html#practice-kernel-ch-poly-eigen-1-4",
  "type": "Exercise",
  "number": "1.11.3",
  "title": "",
  "body": "      "
},
{
  "id": "practice-kernel-ch-poly-eigen-1-5",
  "level": "2",
  "url": "practice-kernel-ch-poly-eigen.html#practice-kernel-ch-poly-eigen-1-5",
  "type": "Exercise",
  "number": "1.11.4",
  "title": "",
  "body": "      "
},
{
  "id": "practice-kernel-ch-poly-eigen-1-6",
  "level": "2",
  "url": "practice-kernel-ch-poly-eigen.html#practice-kernel-ch-poly-eigen-1-6",
  "type": "Exercise",
  "number": "1.11.5",
  "title": "",
  "body": "   where, .   "
},
{
  "id": "practice-kernel-ch-poly-eigen-1-7",
  "level": "2",
  "url": "practice-kernel-ch-poly-eigen.html#practice-kernel-ch-poly-eigen-1-7",
  "type": "Exercise",
  "number": "1.11.6",
  "title": "",
  "body": "   where, .   "
},
{
  "id": "practice-kernel-ch-poly-eigen-1-8",
  "level": "2",
  "url": "practice-kernel-ch-poly-eigen.html#practice-kernel-ch-poly-eigen-1-8",
  "type": "Exercise",
  "number": "1.11.7",
  "title": "",
  "body": "      "
},
{
  "id": "practice-kernel-ch-poly-eigen-1-9",
  "level": "2",
  "url": "practice-kernel-ch-poly-eigen.html#practice-kernel-ch-poly-eigen-1-9",
  "type": "Exercise",
  "number": "1.11.8",
  "title": "",
  "body": "      "
},
{
  "id": "practice-kernel-ch-poly-eigen-2",
  "level": "2",
  "url": "practice-kernel-ch-poly-eigen.html#practice-kernel-ch-poly-eigen-2",
  "type": "Exercise",
  "number": "1.11.9",
  "title": "",
  "body": "  Consider the following matrix. Find .   "
},
{
  "id": "practice-kernel-ch-poly-eigen-3",
  "level": "2",
  "url": "practice-kernel-ch-poly-eigen.html#practice-kernel-ch-poly-eigen-3",
  "type": "Exercise",
  "number": "1.11.10",
  "title": "",
  "body": "  Find a matrix such that , , and . List all its eigenvalues in and find corresponding eigenvectors. Describe action of the linear map corresponding to geometrically.   "
},
{
  "id": "sec-diagonalization",
  "level": "1",
  "url": "sec-diagonalization.html",
  "type": "Section",
  "number": "1.12",
  "title": "Diagonalization of a square matrix",
  "body": " Diagonalization of a square matrix   We introduce diagonalization of square matrices of small sizes in this section.     Square matrices are said to be similar if there exists an invertible matrix such that .     If similar to then is also similar to .     A square matrix is said to be diagonalizable if similar to a diagonal matrix in .      Consider a nonzero polynomial . Suppose that can be factored in as follows. where, is some nonzero element, are some natural numbers, and are distinct elements of , i.e., for .  We say that the multiplicity of is .      Suppose that is a square matrix. Let be the linear map associated to , i.e., is given by . We define the kernel of to be the same as the kernel of the linear map .  We denote the kernel of by .      Suppose that is a square matrix. We define the dimension of the kernel of to be .  We denote the dimension of the kernel of by . Thus we have the following.      The dimension of the kernel is defined in linear algebra using the concept of linear independence. The is in fact Rank-Nullity Theorem . Due to lack of time we take as a working definition.     Let be a square matrix. Suppose that the characteristic polynomial of has the following factorization with for . The matrix is diagonalizable if and only if for every  we have the following.   If is diagonalizable then it is similar to the following diagonal matrix. where, each is diagonal matrix with all diagonal entries and all other entries . Furthermore, in the above matrix entries left blank are taken to be .    "
},
{
  "id": "def-similar-matrices",
  "level": "2",
  "url": "sec-diagonalization.html#def-similar-matrices",
  "type": "Definition",
  "number": "1.12.1",
  "title": "",
  "body": "  Square matrices are said to be similar if there exists an invertible matrix such that .   "
},
{
  "id": "sec-diagonalization-4",
  "level": "2",
  "url": "sec-diagonalization.html#sec-diagonalization-4",
  "type": "Note",
  "number": "1.12.2",
  "title": "",
  "body": " If similar to then is also similar to .  "
},
{
  "id": "def-diagonalizable-matrix",
  "level": "2",
  "url": "sec-diagonalization.html#def-diagonalizable-matrix",
  "type": "Definition",
  "number": "1.12.3",
  "title": "",
  "body": "  A square matrix is said to be diagonalizable if similar to a diagonal matrix in .   "
},
{
  "id": "def-multiplicity-of-roots",
  "level": "2",
  "url": "sec-diagonalization.html#def-multiplicity-of-roots",
  "type": "Definition",
  "number": "1.12.4",
  "title": "",
  "body": "  Consider a nonzero polynomial . Suppose that can be factored in as follows. where, is some nonzero element, are some natural numbers, and are distinct elements of , i.e., for .  We say that the multiplicity of is .   "
},
{
  "id": "def-kernel-of-matrix",
  "level": "2",
  "url": "sec-diagonalization.html#def-kernel-of-matrix",
  "type": "Definition",
  "number": "1.12.5",
  "title": "",
  "body": "  Suppose that is a square matrix. Let be the linear map associated to , i.e., is given by . We define the kernel of to be the same as the kernel of the linear map .  We denote the kernel of by .   "
},
{
  "id": "def-dim-of-kernel",
  "level": "2",
  "url": "sec-diagonalization.html#def-dim-of-kernel",
  "type": "Definition",
  "number": "1.12.6",
  "title": "",
  "body": "  Suppose that is a square matrix. We define the dimension of the kernel of to be .  We denote the dimension of the kernel of by . Thus we have the following.    "
},
{
  "id": "sec-diagonalization-9",
  "level": "2",
  "url": "sec-diagonalization.html#sec-diagonalization-9",
  "type": "Remark",
  "number": "1.12.7",
  "title": "",
  "body": " The dimension of the kernel is defined in linear algebra using the concept of linear independence. The is in fact Rank-Nullity Theorem . Due to lack of time we take as a working definition.  "
},
{
  "id": "fact-diagonalization-criterion",
  "level": "2",
  "url": "sec-diagonalization.html#fact-diagonalization-criterion",
  "type": "Fact",
  "number": "1.12.8",
  "title": "",
  "body": "  Let be a square matrix. Suppose that the characteristic polynomial of has the following factorization with for . The matrix is diagonalizable if and only if for every  we have the following.   If is diagonalizable then it is similar to the following diagonal matrix. where, each is diagonal matrix with all diagonal entries and all other entries . Furthermore, in the above matrix entries left blank are taken to be .   "
},
{
  "id": "practice-diagonalization",
  "level": "1",
  "url": "practice-diagonalization.html",
  "type": "Exercises",
  "number": "1.13",
  "title": "Exercises",
  "body": "  Check whether the following matrices are diagonalizable.                                  .    "
},
{
  "id": "practice-diagonalization-2",
  "level": "2",
  "url": "practice-diagonalization.html#practice-diagonalization-2",
  "type": "Exercise",
  "number": "1.13.1",
  "title": "",
  "body": "      "
},
{
  "id": "practice-diagonalization-3",
  "level": "2",
  "url": "practice-diagonalization.html#practice-diagonalization-3",
  "type": "Exercise",
  "number": "1.13.2",
  "title": "",
  "body": "      "
},
{
  "id": "practice-diagonalization-4",
  "level": "2",
  "url": "practice-diagonalization.html#practice-diagonalization-4",
  "type": "Exercise",
  "number": "1.13.3",
  "title": "",
  "body": "      "
},
{
  "id": "practice-diagonalization-5",
  "level": "2",
  "url": "practice-diagonalization.html#practice-diagonalization-5",
  "type": "Exercise",
  "number": "1.13.4",
  "title": "",
  "body": "      "
},
{
  "id": "practice-diagonalization-6",
  "level": "2",
  "url": "practice-diagonalization.html#practice-diagonalization-6",
  "type": "Exercise",
  "number": "1.13.5",
  "title": "",
  "body": "   .   "
},
{
  "id": "ch-analytic-geometry",
  "level": "1",
  "url": "ch-analytic-geometry.html",
  "type": "Chapter",
  "number": "2",
  "title": "Related to Analytic Geometry",
  "body": " Related to Analytic Geometry   We list a few exercises related to analytic geometry.      Two points and are given. Find the vector representation . Furthermore, find , , and .      and        and        and        Two points and are given. By considering vectors and , find their dot product and their respective lengths.      and        and       Let . Find so that the length of is .       Two points and are given. Consider vectors and to find the angle between them. Check whether they are perpendicular to each other or not.      and        and        and        A point is given. Find a point so that the vectors and are perpendicular.                             Find an equation of a line passing through \\(P\\) and in the direction of \\(D\\). Draw the line.     \\(P=(3,1)\\) and \\(D=(5,-2)\\)      \\(P=(1,0)\\) and \\(D=(0,1)\\)      \\(P=(1,1,0)\\) and \\(D=(1,1,1)\\)       Find a vector equation of line passing through points \\(A\\) and \\(B\\).     \\(A=(1,-1)\\) and \\(B=(1,0)\\)      \\(A=(2,3)\\) and \\(B=(1,-1)\\)      \\(A=(1,-1,-1)\\) and \\(B=(1,0,1)\\)      "
},
{
  "id": "practice-dot-product-1-2",
  "level": "2",
  "url": "practice-dot-product.html#practice-dot-product-1-2",
  "type": "Exercise",
  "number": "2.1",
  "title": "",
  "body": "   and    "
},
{
  "id": "practice-dot-product-1-3",
  "level": "2",
  "url": "practice-dot-product.html#practice-dot-product-1-3",
  "type": "Exercise",
  "number": "2.2",
  "title": "",
  "body": "   and    "
},
{
  "id": "practice-dot-product-1-4",
  "level": "2",
  "url": "practice-dot-product.html#practice-dot-product-1-4",
  "type": "Exercise",
  "number": "2.3",
  "title": "",
  "body": "   and    "
},
{
  "id": "practice-dot-product-2-2",
  "level": "2",
  "url": "practice-dot-product.html#practice-dot-product-2-2",
  "type": "Exercise",
  "number": "2.4",
  "title": "",
  "body": "   and    "
},
{
  "id": "practice-dot-product-2-3",
  "level": "2",
  "url": "practice-dot-product.html#practice-dot-product-2-3",
  "type": "Exercise",
  "number": "2.5",
  "title": "",
  "body": "   and    "
},
{
  "id": "practice-dot-product-2-4",
  "level": "2",
  "url": "practice-dot-product.html#practice-dot-product-2-4",
  "type": "Exercise",
  "number": "2.6",
  "title": "",
  "body": "  Let . Find so that the length of is .   "
},
{
  "id": "practice-dot-product-3-2",
  "level": "2",
  "url": "practice-dot-product.html#practice-dot-product-3-2",
  "type": "Exercise",
  "number": "2.7",
  "title": "",
  "body": "   and    "
},
{
  "id": "practice-dot-product-3-3",
  "level": "2",
  "url": "practice-dot-product.html#practice-dot-product-3-3",
  "type": "Exercise",
  "number": "2.8",
  "title": "",
  "body": "   and    "
},
{
  "id": "practice-dot-product-3-4",
  "level": "2",
  "url": "practice-dot-product.html#practice-dot-product-3-4",
  "type": "Exercise",
  "number": "2.9",
  "title": "",
  "body": "   and    "
},
{
  "id": "practice-dot-product-4-2",
  "level": "2",
  "url": "practice-dot-product.html#practice-dot-product-4-2",
  "type": "Exercise",
  "number": "2.10",
  "title": "",
  "body": "      "
},
{
  "id": "practice-dot-product-4-3",
  "level": "2",
  "url": "practice-dot-product.html#practice-dot-product-4-3",
  "type": "Exercise",
  "number": "2.11",
  "title": "",
  "body": "      "
},
{
  "id": "practice-dot-product-4-4",
  "level": "2",
  "url": "practice-dot-product.html#practice-dot-product-4-4",
  "type": "Exercise",
  "number": "2.12",
  "title": "",
  "body": "      "
},
{
  "id": "practice-lines-planes-1-2",
  "level": "2",
  "url": "practice-lines-planes.html#practice-lines-planes-1-2",
  "type": "Exercise",
  "number": "2.1",
  "title": "",
  "body": "  \\(P=(3,1)\\) and \\(D=(5,-2)\\)   "
},
{
  "id": "practice-lines-planes-1-3",
  "level": "2",
  "url": "practice-lines-planes.html#practice-lines-planes-1-3",
  "type": "Exercise",
  "number": "2.2",
  "title": "",
  "body": "  \\(P=(1,0)\\) and \\(D=(0,1)\\)   "
},
{
  "id": "practice-lines-planes-1-4",
  "level": "2",
  "url": "practice-lines-planes.html#practice-lines-planes-1-4",
  "type": "Exercise",
  "number": "2.3",
  "title": "",
  "body": "  \\(P=(1,1,0)\\) and \\(D=(1,1,1)\\)   "
},
{
  "id": "practice-lines-planes-2-2",
  "level": "2",
  "url": "practice-lines-planes.html#practice-lines-planes-2-2",
  "type": "Exercise",
  "number": "2.4",
  "title": "",
  "body": "  \\(A=(1,-1)\\) and \\(B=(1,0)\\)   "
},
{
  "id": "practice-lines-planes-2-3",
  "level": "2",
  "url": "practice-lines-planes.html#practice-lines-planes-2-3",
  "type": "Exercise",
  "number": "2.5",
  "title": "",
  "body": "  \\(A=(2,3)\\) and \\(B=(1,-1)\\)   "
},
{
  "id": "practice-lines-planes-2-4",
  "level": "2",
  "url": "practice-lines-planes.html#practice-lines-planes-2-4",
  "type": "Exercise",
  "number": "2.6",
  "title": "",
  "body": "  \\(A=(1,-1,-1)\\) and \\(B=(1,0,1)\\)   "
},
{
  "id": "sec-sage-echelon-form",
  "level": "1",
  "url": "sec-sage-echelon-form.html",
  "type": "Section",
  "number": "A.1",
  "title": "Row reduced echelon form and a system of linear equations",
  "body": " Row reduced echelon form and a system of linear equations  We use online computer algebra system SageMath to compute the row reduced echelon form of a given matrix. In the following example A=matrix(RR,[[1,2,1,-1],[9,7,5,5],[1,-2,2,8]]) represents matrix over . The entries [1,2,1,-1] , [9,7,5,5] , and [1,-2,2,8] represents the first, the second, and the third row of , respectively.  You may input the matrix of your choice to get the row reduced echelon form. Please first do the calculations yourself and then verify using SageMath.     In the following SageMath can compute the solution of the system . You may change and appropriately.   In the following we can reduced the augmented matrix to the row reduced echelon form. You may change and appropriately.   "
},
{
  "id": "sec-sage-rank-trace-det",
  "level": "1",
  "url": "sec-sage-rank-trace-det.html",
  "type": "Section",
  "number": "A.2",
  "title": "Computing rank, trace, and determinant",
  "body": " Computing rank, trace, and determinant  We use online computer algebra system SageMath to compute the rank, the trace and the determinant of a given matrix. In the following example A=matrix(RR,[[1,2,0,-1],[1,6,0,1],[1,-2,2,8]]) represents matrix over . The entries [1,2,0,-1] , [1,6,0,1] , and [1,-2,2,8] represents the first, the second, and the third row of , respectively.  We can compute the rank of a matrix.   We can compute the trace of a matrix.   We can compute the determinant of a matrix.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
