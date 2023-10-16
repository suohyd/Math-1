var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  Abhay Soman   copyright  This book was authored in PreTeXt .  "
},
{
  "id": "preface-1",
  "level": "1",
  "url": "preface-1.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " We refer to the following books.    Algebra by M. Artin     Calculus and analytic geometry by Thomas and Finney     Calculus for Biology and Medicine by Neuhauser and Roper     All questions\/exercises mentioned in these notes are standard, and can be found in all standard books on the subject. No originality is claimed.  This is a work in progress, and may contain certain discrepancies or typographic errors. Please check periodically for the latest version. Comments and suggestions are welcome.  "
},
{
  "id": "sec-basic-operations",
  "level": "1",
  "url": "sec-basic-operations.html",
  "type": "Section",
  "number": "1.1",
  "title": "Basic matrix operations",
  "body": " Basic matrix operations   In this section we denote by either the set of real numbers, or the set of complex numbers, .    (Zero matrix)   We denote by the matrix with all its entries zero. We call the zero matrix.     (Identity matrix)   We denote by the matrix with all its diagonal entries , and all other (non-diagonal) entries zero. We call the identity matrix.     The -th entry of a matrix  is the entry at the intersection of -th row and -th column of .    We denote the set of all matrices over by . So . A matrix in is called a square matrix and is called the size of a matrix .    For any matrix and we denote by the matrix obtained by multiplying every entry of the matrix by .     A matrix in is called a column vector in -dimensional space .  A matrix in is called a row vector in -dimensional space .  We identify with .      is a column vector in -dimensional space while is a row vector in -dimensional space .    Matrices are equal or same if every -th entry of is equal to (same as) the -th entry of for every and for every . That is, if then, Matrices are said to be not equal , and written as , if there is at least one and at least one such that -th entry of , and -th entry of , are different, i.e., (for some  and some  ).    Suppose that and . We denote the -th entry ( ) (respectively, ) by (respectively, ). The -th entry of the matrix multiplication is given by the following formula. where and .    (Transpose of a matrix)  For a matrix , the transpose of , denoted by , is an matrix obtained by writing columns of as rows of . Thus if then the transpose of is     If then we have the following. Furthermore, for and we have the following.     (Inverse of a matrix)   Let . A square matrix is said to be the inverse of if If inverse of exists then it is denoted by , and is said to be invertible .     Note that if is invertible then the inverse of is , i.e.,     (Coefficient matrix of a system of linear equations and homogeneous system of linear equations) Consider a system of linear equations with for every and .  We may write the above system of linear equations in the matrix form.   If we put and , and then, the above system of linear equations can be written as The matrix is called the coefficient matrix of the above system.  If all then the above system of linear equations is said to be homogeneous .   "
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
  "id": "convention-2",
  "level": "2",
  "url": "sec-basic-operations.html#convention-2",
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
  "id": "example-1",
  "level": "2",
  "url": "sec-basic-operations.html#example-1",
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
  "body": " Note that if is invertible then the inverse of is , i.e.,   "
},
{
  "id": "homogeneous-system",
  "level": "2",
  "url": "sec-basic-operations.html#homogeneous-system",
  "type": "Definition",
  "number": "1.1.14",
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
  "body": "  A few exercises related to basic matrix operations are listed below.   Consider the following matrices in . Find .   Let . Find such that .    Show that for any matrix the following is true.     Show that for any matrices the following is true.     Let . Show that and that .    Compute the matrix multiplication .    and       and             and  In this case, consider the matrix as the point of the space and matrix as the point . Plot the line segment joining the origin of and as well as the line segment joining the origin of and . Check whether is perpendicular to .       and   In this case, consider the matrix as the point of the space and matrix as the point . Plot the line segment joining the origin of and as well as the line segment joining the origin of and . Check whether is perpendicular to .        For a matrix and a natural number we write In particular, and .  Find the following powers of the given matrices.     Write the augmented matrix corresponding to the given system of equations.                In the following, given compute its transpose and also compute and .     , where      , where                    Find a condition on such that the matrix will be equal to its transpose.    Consider a matrix . Find a condition on such that and .      Check whether is a function or not. Also check whether is injective (one-one) or surjective (onto).     Find the inverse of the given matrix.                   , where and are nonzero real numbers.       In each of the following system , the matrices are given. Find the matrix .      . Find .     . Find .       Show that if the inverse of a matrix exists then it is unique, i.e., if and are such that and , then .   Multiply each side of the equation on the left by .    Multiplication is defined when and .    For any two matrices , .   For any , .   The following system of linear equations has infinitely many solutions.     For the following matrix we have .     Every matrix in has an inverse.    Let . The inverse of is , i.e.,    "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "practice-basic-operations.html#exercise-1",
  "type": "Exercise",
  "number": "1.2.1",
  "title": "",
  "body": "Consider the following matrices in . Find . "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "practice-basic-operations.html#exercise-2",
  "type": "Exercise",
  "number": "1.2.2",
  "title": "",
  "body": " Let . Find such that .  "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "practice-basic-operations.html#exercise-3",
  "type": "Exercise",
  "number": "1.2.3",
  "title": "",
  "body": " Show that for any matrix the following is true.   "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "practice-basic-operations.html#exercise-4",
  "type": "Exercise",
  "number": "1.2.4",
  "title": "",
  "body": " Show that for any matrices the following is true.   "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "practice-basic-operations.html#exercise-5",
  "type": "Exercise",
  "number": "1.2.5",
  "title": "",
  "body": " Let . Show that and that .  "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "practice-basic-operations.html#exercise-6",
  "type": "Exercise",
  "number": "1.2.6",
  "title": "",
  "body": " Compute the matrix multiplication .    and       and             and  In this case, consider the matrix as the point of the space and matrix as the point . Plot the line segment joining the origin of and as well as the line segment joining the origin of and . Check whether is perpendicular to .       and   In this case, consider the matrix as the point of the space and matrix as the point . Plot the line segment joining the origin of and as well as the line segment joining the origin of and . Check whether is perpendicular to .      "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "practice-basic-operations.html#exercise-7",
  "type": "Exercise",
  "number": "1.2.7",
  "title": "",
  "body": " For a matrix and a natural number we write In particular, and .  Find the following powers of the given matrices.   "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "practice-basic-operations.html#exercise-8",
  "type": "Exercise",
  "number": "1.2.8",
  "title": "",
  "body": " Write the augmented matrix corresponding to the given system of equations.              "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "practice-basic-operations.html#exercise-9",
  "type": "Exercise",
  "number": "1.2.9",
  "title": "",
  "body": " In the following, given compute its transpose and also compute and .     , where      , where                    Find a condition on such that the matrix will be equal to its transpose.    Consider a matrix . Find a condition on such that and .    "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "practice-basic-operations.html#exercise-10",
  "type": "Exercise",
  "number": "1.2.10",
  "title": "",
  "body": " Check whether is a function or not. Also check whether is injective (one-one) or surjective (onto).   "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "practice-basic-operations.html#exercise-11",
  "type": "Exercise",
  "number": "1.2.11",
  "title": "",
  "body": " Find the inverse of the given matrix.                   , where and are nonzero real numbers.     "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "practice-basic-operations.html#exercise-12",
  "type": "Exercise",
  "number": "1.2.12",
  "title": "",
  "body": " In each of the following system , the matrices are given. Find the matrix .      . Find .     . Find .     "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "practice-basic-operations.html#exercise-13",
  "type": "Exercise",
  "number": "1.2.13",
  "title": "",
  "body": " Show that if the inverse of a matrix exists then it is unique, i.e., if and are such that and , then .   Multiply each side of the equation on the left by .  "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "practice-basic-operations.html#exercise-14",
  "type": "Exercise",
  "number": "1.2.14",
  "title": "",
  "body": " Multiplication is defined when and .  "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "practice-basic-operations.html#exercise-15",
  "type": "Exercise",
  "number": "1.2.15",
  "title": "",
  "body": " For any two matrices , .  "
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "practice-basic-operations.html#exercise-16",
  "type": "Exercise",
  "number": "1.2.16",
  "title": "",
  "body": "For any , . "
},
{
  "id": "exercise-17",
  "level": "2",
  "url": "practice-basic-operations.html#exercise-17",
  "type": "Exercise",
  "number": "1.2.17",
  "title": "",
  "body": " The following system of linear equations has infinitely many solutions.   "
},
{
  "id": "exercise-18",
  "level": "2",
  "url": "practice-basic-operations.html#exercise-18",
  "type": "Exercise",
  "number": "1.2.18",
  "title": "",
  "body": " For the following matrix we have .   "
},
{
  "id": "exercise-19",
  "level": "2",
  "url": "practice-basic-operations.html#exercise-19",
  "type": "Exercise",
  "number": "1.2.19",
  "title": "",
  "body": " Every matrix in has an inverse.  "
},
{
  "id": "exercise-20",
  "level": "2",
  "url": "practice-basic-operations.html#exercise-20",
  "type": "Exercise",
  "number": "1.2.20",
  "title": "",
  "body": " Let . The inverse of is , i.e.,   "
},
{
  "id": "sec-row-echelon-form",
  "level": "1",
  "url": "sec-row-echelon-form.html",
  "type": "Section",
  "number": "1.3",
  "title": "Row reduced echelon form of a matrix",
  "body": " Row reduced echelon form of a matrix   In this section we denote by either the set of real numbers, or the set of complex numbers, .    (Elementary row operations)   Let . Denote by (for ) the -th row of . Following are elementary row operations.   Interchanging -th row with -th row. This operation is usually denoted by .    Multiplying -th row by a nonzero . This operation is usually denoted by .    Adding a constant multiple of -th row to -th row. This operation is usually denoted by .         A square matrix is said to be an elementary matrix if it is obtained from the identity matrix by performing only one of the row operations described in on .     Procedure to obtain a row reduced echelon form of a matrix Recall that given a matrix , by applying a sequence of elementary row operations, can be reduced to a row reduced echelon form of . The matrix has the following properties.  All zero rows occurs at the bottom of .  If a row of is nonzero then the first nonzero entry is , it is called pivot .  In any two successive nonzero rows of , the pivot in the lower row occurs to the right of the pivot in the higher row.  Each column of that contains the pivot has zero everywhere else.    The natural question arises: Does the sequence in which row operations are performed change the resulting row reduced echelon form of The answer is no!    The row reduced echelon form of a matrix is unique.         Let be a block row reduced echelon form of , where and are column vectors. The system has a solution if and only if the system has a solution.    Let be a block row reduced echelon form of , where and are column vectors. The system has a solution if and only if there is no pivot in the last column . In that case, one may assign arbitrary values to if the -th column does not contain a pivot.    Every system (here is matrix with all entries zero) of equations and unknowns with has a nonzero solution.         A square matrix is invertible (see ) if and only if the row reduced echelon form of is the identity matrix .    "
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
  "body": " Procedure to obtain a row reduced echelon form of a matrix Recall that given a matrix , by applying a sequence of elementary row operations, can be reduced to a row reduced echelon form of . The matrix has the following properties.  All zero rows occurs at the bottom of .  If a row of is nonzero then the first nonzero entry is , it is called pivot .  In any two successive nonzero rows of , the pivot in the lower row occurs to the right of the pivot in the higher row.  Each column of that contains the pivot has zero everywhere else.   "
},
{
  "id": "fact-uniqueness-of-echelon-form",
  "level": "2",
  "url": "sec-row-echelon-form.html#fact-uniqueness-of-echelon-form",
  "type": "Fact",
  "number": "1.3.4",
  "title": "",
  "body": "  The row reduced echelon form of a matrix is unique.   "
},
{
  "id": "thm-solutions-of-linear-equations",
  "level": "2",
  "url": "sec-row-echelon-form.html#thm-solutions-of-linear-equations",
  "type": "Theorem",
  "number": "1.3.5",
  "title": "",
  "body": "     Let be a block row reduced echelon form of , where and are column vectors. The system has a solution if and only if the system has a solution.    Let be a block row reduced echelon form of , where and are column vectors. The system has a solution if and only if there is no pivot in the last column . In that case, one may assign arbitrary values to if the -th column does not contain a pivot.    Every system (here is matrix with all entries zero) of equations and unknowns with has a nonzero solution.      "
},
{
  "id": "thm-invertible-matrix-row-echelon-form",
  "level": "2",
  "url": "sec-row-echelon-form.html#thm-invertible-matrix-row-echelon-form",
  "type": "Theorem",
  "number": "1.3.6",
  "title": "",
  "body": "  A square matrix is invertible (see ) if and only if the row reduced echelon form of is the identity matrix .   "
},
{
  "id": "practice-row-echelon-form",
  "level": "1",
  "url": "practice-row-echelon-form.html",
  "type": "Exercises",
  "number": "1.4",
  "title": "Exercises",
  "body": "  A few exercises related to the row reduced echelon form of a matrix are listed below.   Find the row reduced echelon form of the following matrices. .  How many pivots are there in one row? How many pivots are there in one column?  In a matrix what is the largest possible number of pivots?  Write the row reduced echelon matrix whose every row has a pivot.  Consider the following augmented matrices. In each case consider the corresponding system of linear equations and determine whether the system has no solution, a unique solution, or infinitely many solutions.                   where .      Consider any square matrix of size of your choice. Using the row reduced echelon form determine whether your matrix is invertible or not (see ).    List all possible types of elementary matrices of size and . Further show that these matrices are invertible.    Let . Perform the row operation described in , and denote the resulting matrix by . Now perform the exact same operation on the identity matrix , and denote the resulting matrix by (note that is an elemetary matrix). Show that . What happens if we consider in terms of columns of ?  Do the same exercise for other two row operations mentioned in .    Consider the system of equations with and .     Show that if the above system has two distinct solutions then it has infinitely many solutions.    Show that the above system has a solution in the complex numbers if and only if it has a solution in the real numbers.       Let . Show that if the system has a unique solution for some particular then the system has a unique solution for any .   "
},
{
  "id": "exercise-21",
  "level": "2",
  "url": "practice-row-echelon-form.html#exercise-21",
  "type": "Exercise",
  "number": "1.4.1",
  "title": "",
  "body": "Find the row reduced echelon form of the following matrices. . "
},
{
  "id": "exercise-22",
  "level": "2",
  "url": "practice-row-echelon-form.html#exercise-22",
  "type": "Exercise",
  "number": "1.4.2",
  "title": "",
  "body": "How many pivots are there in one row? How many pivots are there in one column? "
},
{
  "id": "exercise-23",
  "level": "2",
  "url": "practice-row-echelon-form.html#exercise-23",
  "type": "Exercise",
  "number": "1.4.3",
  "title": "",
  "body": "In a matrix what is the largest possible number of pivots? "
},
{
  "id": "exercise-24",
  "level": "2",
  "url": "practice-row-echelon-form.html#exercise-24",
  "type": "Exercise",
  "number": "1.4.4",
  "title": "",
  "body": "Write the row reduced echelon matrix whose every row has a pivot. "
},
{
  "id": "exercise-25",
  "level": "2",
  "url": "practice-row-echelon-form.html#exercise-25",
  "type": "Exercise",
  "number": "1.4.5",
  "title": "",
  "body": "Consider the following augmented matrices. In each case consider the corresponding system of linear equations and determine whether the system has no solution, a unique solution, or infinitely many solutions.                   where .    "
},
{
  "id": "exercise-26",
  "level": "2",
  "url": "practice-row-echelon-form.html#exercise-26",
  "type": "Exercise",
  "number": "1.4.6",
  "title": "",
  "body": " Consider any square matrix of size of your choice. Using the row reduced echelon form determine whether your matrix is invertible or not (see ).  "
},
{
  "id": "exercise-27",
  "level": "2",
  "url": "practice-row-echelon-form.html#exercise-27",
  "type": "Exercise",
  "number": "1.4.7",
  "title": "",
  "body": " List all possible types of elementary matrices of size and . Further show that these matrices are invertible.  "
},
{
  "id": "exercise-28",
  "level": "2",
  "url": "practice-row-echelon-form.html#exercise-28",
  "type": "Exercise",
  "number": "1.4.8",
  "title": "",
  "body": " Let . Perform the row operation described in , and denote the resulting matrix by . Now perform the exact same operation on the identity matrix , and denote the resulting matrix by (note that is an elemetary matrix). Show that . What happens if we consider in terms of columns of ?  Do the same exercise for other two row operations mentioned in .  "
},
{
  "id": "exercise-29",
  "level": "2",
  "url": "practice-row-echelon-form.html#exercise-29",
  "type": "Exercise",
  "number": "1.4.9",
  "title": "",
  "body": " Consider the system of equations with and .     Show that if the above system has two distinct solutions then it has infinitely many solutions.    Show that the above system has a solution in the complex numbers if and only if it has a solution in the real numbers.     "
},
{
  "id": "exercise-30",
  "level": "2",
  "url": "practice-row-echelon-form.html#exercise-30",
  "type": "Exercise",
  "number": "1.4.10",
  "title": "",
  "body": " Let . Show that if the system has a unique solution for some particular then the system has a unique solution for any .  "
},
{
  "id": "sec-rank-trace-det",
  "level": "1",
  "url": "sec-rank-trace-det.html",
  "type": "Section",
  "number": "1.5",
  "title": "Some invariants attached to a matrix",
  "body": " Some invariants attached to a matrix   In this section we denote by either the set of real numbers, or the set of complex numbers, .     The rank of a matrix is the number of nonzero rows in the row reduced echelon form of .  We denote the rank of by .     It follows from that for a matrix , the rank of is equal to the number of pivots in the row reduced echelon form of , which in turn can be at most .     The trace of a square matrix is the sum of all its diagonal entries. The trace of a square matrix is denoted by . If is given by then the trace of ,     We now define the determinant of a square matrix recursively. We will not give a general definition.   Given an matrix over , its determinant is denoted by     Apart from various explantions given in lectures one may see this YouTube video with excellent animations to get started with the concept of determinants.     The determinant of a matrix is denote by and it is equal to , i.e.,       Consider as follows. The determinant of is      In the formula of the determinant of observe the following.   Change of signs in consecutive terms.    First entry is obtained by multiplying by the determinant of matrix obtained by deleting the first row and the first column of . The second entry is obtained by multiplying by the determinant of matrix obtained by deleting the first row and the second column of . The third entry is obtained by multiplying by the determinant of matrix obtained by deleting the first row and the third column of .      For the rest of this section we use a short notation to write a square matrix, viz., we write to denote the following matrix.    We stress that the determinant of a square matrix is an element of .     Properties of the determinant . Assume that .    Row linearity . Let be the -th row of . For we let . For any and any and any we get the following.   For and any , .   Row rearrangement . Let be the matrix obtained by interchanging the -th row of with the -th row of . Then    Alternating . If any two rows of are the same then .   Transpose . For any ,    Triangular matrices . If is an upper triangular (resp., lower triangular) matrix, i.e., for (resp., for ) then    Block form . Let . Let , , , and be the zero matrix. The determinant of is given by Similar result is true for lower triangular block matrices.   Multiplicative property . Let . We have     Invertibility. A matrix is invertible if and only if if and only if .      "
},
{
  "id": "def-rank",
  "level": "2",
  "url": "sec-rank-trace-det.html#def-rank",
  "type": "Definition",
  "number": "1.5.1",
  "title": "",
  "body": "  The rank of a matrix is the number of nonzero rows in the row reduced echelon form of .  We denote the rank of by .   "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "sec-rank-trace-det.html#remark-1",
  "type": "Remark",
  "number": "1.5.2",
  "title": "",
  "body": " It follows from that for a matrix , the rank of is equal to the number of pivots in the row reduced echelon form of , which in turn can be at most .  "
},
{
  "id": "def-trace",
  "level": "2",
  "url": "sec-rank-trace-det.html#def-trace",
  "type": "Definition",
  "number": "1.5.3",
  "title": "",
  "body": "  The trace of a square matrix is the sum of all its diagonal entries. The trace of a square matrix is denoted by . If is given by then the trace of ,    "
},
{
  "id": "convention-4",
  "level": "2",
  "url": "sec-rank-trace-det.html#convention-4",
  "type": "Convention",
  "number": "1.5.4",
  "title": "",
  "body": " Given an matrix over , its determinant is denoted by   "
},
{
  "id": "note-3",
  "level": "2",
  "url": "sec-rank-trace-det.html#note-3",
  "type": "Note",
  "number": "1.5.5",
  "title": "",
  "body": " Apart from various explantions given in lectures one may see this YouTube video with excellent animations to get started with the concept of determinants.  "
},
{
  "id": "def-det-2",
  "level": "2",
  "url": "sec-rank-trace-det.html#def-det-2",
  "type": "Definition",
  "number": "1.5.6",
  "title": "",
  "body": "  The determinant of a matrix is denote by and it is equal to , i.e.,    "
},
{
  "id": "def-det-3",
  "level": "2",
  "url": "sec-rank-trace-det.html#def-det-3",
  "type": "Definition",
  "number": "1.5.7",
  "title": "",
  "body": "  Consider as follows. The determinant of is    "
},
{
  "id": "note-4",
  "level": "2",
  "url": "sec-rank-trace-det.html#note-4",
  "type": "Note",
  "number": "1.5.8",
  "title": "",
  "body": " In the formula of the determinant of observe the following.   Change of signs in consecutive terms.    First entry is obtained by multiplying by the determinant of matrix obtained by deleting the first row and the first column of . The second entry is obtained by multiplying by the determinant of matrix obtained by deleting the first row and the second column of . The third entry is obtained by multiplying by the determinant of matrix obtained by deleting the first row and the third column of .     "
},
{
  "id": "note-5",
  "level": "2",
  "url": "sec-rank-trace-det.html#note-5",
  "type": "Note",
  "number": "1.5.9",
  "title": "",
  "body": " We stress that the determinant of a square matrix is an element of .  "
},
{
  "id": "properties-of-det",
  "level": "2",
  "url": "sec-rank-trace-det.html#properties-of-det",
  "type": "Fact",
  "number": "1.5.10",
  "title": "",
  "body": "  Properties of the determinant . Assume that .    Row linearity . Let be the -th row of . For we let . For any and any and any we get the following.   For and any , .   Row rearrangement . Let be the matrix obtained by interchanging the -th row of with the -th row of . Then    Alternating . If any two rows of are the same then .   Transpose . For any ,    Triangular matrices . If is an upper triangular (resp., lower triangular) matrix, i.e., for (resp., for ) then    Block form . Let . Let , , , and be the zero matrix. The determinant of is given by Similar result is true for lower triangular block matrices.   Multiplicative property . Let . We have     Invertibility. A matrix is invertible if and only if if and only if .     "
},
{
  "id": "practice-rank-trace-det",
  "level": "1",
  "url": "practice-rank-trace-det.html",
  "type": "Exercises",
  "number": "1.6",
  "title": "Exercises",
  "body": "  Find ranks of matrices in .    Given show that and that   Furthermore show that if is invertible then    Use the formula for -th entry of a product given in .    Consider any square matrix of size of your choice and find its determinant.    Show that the following matrix is invertible, and that .     Show that the determinant of the following matrix is . Find a condition on so that the determinant of the above matrix is nonzero.   "
},
{
  "id": "exercise-31",
  "level": "2",
  "url": "practice-rank-trace-det.html#exercise-31",
  "type": "Exercise",
  "number": "1.6.1",
  "title": "",
  "body": " Find ranks of matrices in .  "
},
{
  "id": "exercise-32",
  "level": "2",
  "url": "practice-rank-trace-det.html#exercise-32",
  "type": "Exercise",
  "number": "1.6.2",
  "title": "",
  "body": " Given show that and that   Furthermore show that if is invertible then    Use the formula for -th entry of a product given in .  "
},
{
  "id": "exercise-33",
  "level": "2",
  "url": "practice-rank-trace-det.html#exercise-33",
  "type": "Exercise",
  "number": "1.6.3",
  "title": "",
  "body": " Consider any square matrix of size of your choice and find its determinant.  "
},
{
  "id": "exercise-34",
  "level": "2",
  "url": "practice-rank-trace-det.html#exercise-34",
  "type": "Exercise",
  "number": "1.6.4",
  "title": "",
  "body": " Show that the following matrix is invertible, and that .   "
},
{
  "id": "exercise-35",
  "level": "2",
  "url": "practice-rank-trace-det.html#exercise-35",
  "type": "Exercise",
  "number": "1.6.5",
  "title": "",
  "body": " Show that the determinant of the following matrix is . Find a condition on so that the determinant of the above matrix is nonzero.  "
},
{
  "id": "sec-matrices-linear-maps",
  "level": "1",
  "url": "sec-matrices-linear-maps.html",
  "type": "Section",
  "number": "1.7",
  "title": "Matrices and linear maps",
  "body": " Matrices and linear maps    Let . A function is said to be a linear map if it satisfies the following conditions.   For any and any ,     For any ,          Let . For each we consider the following column vector. where occurs in the -th row and all other entries are zero. We call the -th standard basis vector of .  We call the set of column vectors the standard basis .     Suppose that . Then we have the following.    Using , if is a linear map then, for any we get the following. Thus, a linear map is completely determined by column vectors .    We keep notations of . For a linear map we associate a matrix, denoted by , whose -th column vector is , for . Thus, if then, associated matrix will be      We remark that in , the matrix associated with a linear map is always taken to be with respect to the standard basis.    Let . Consider the following map. This map is a linear map. Note that if then, for any , we get the following. Furthermore, the matrix of of the linear map, is the following.    Using and we get a one-one correspondence between the set of all matrices over , and the set of all linear maps from to . We note that in , the matrix associated with a linear map is always taken to be with respect to the standard basis ( ).    The map given by where, is the matrix associated to as in .    "
},
{
  "id": "def-linear-map",
  "level": "2",
  "url": "sec-matrices-linear-maps.html#def-linear-map",
  "type": "Definition",
  "number": "1.7.1",
  "title": "",
  "body": "  Let . A function is said to be a linear map if it satisfies the following conditions.   For any and any ,     For any ,       "
},
{
  "id": "def-standard-basis",
  "level": "2",
  "url": "sec-matrices-linear-maps.html#def-standard-basis",
  "type": "Definition",
  "number": "1.7.2",
  "title": "",
  "body": "  Let . For each we consider the following column vector. where occurs in the -th row and all other entries are zero. We call the -th standard basis vector of .  We call the set of column vectors the standard basis .   "
},
{
  "id": "linear-combination",
  "level": "2",
  "url": "sec-matrices-linear-maps.html#linear-combination",
  "type": "Observation",
  "number": "1.7.3",
  "title": "",
  "body": " Suppose that . Then we have the following.   "
},
{
  "id": "action-on-basis",
  "level": "2",
  "url": "sec-matrices-linear-maps.html#action-on-basis",
  "type": "Observation",
  "number": "1.7.4",
  "title": "",
  "body": "Using , if is a linear map then, for any we get the following. Thus, a linear map is completely determined by column vectors . "
},
{
  "id": "def-matrix-of-linear-map",
  "level": "2",
  "url": "sec-matrices-linear-maps.html#def-matrix-of-linear-map",
  "type": "Definition",
  "number": "1.7.5",
  "title": "",
  "body": "  We keep notations of . For a linear map we associate a matrix, denoted by , whose -th column vector is , for . Thus, if then, associated matrix will be    "
},
{
  "id": "remark-2",
  "level": "2",
  "url": "sec-matrices-linear-maps.html#remark-2",
  "type": "Remark",
  "number": "1.7.6",
  "title": "",
  "body": " We remark that in , the matrix associated with a linear map is always taken to be with respect to the standard basis.  "
},
{
  "id": "linear-map-using-matrix",
  "level": "2",
  "url": "sec-matrices-linear-maps.html#linear-map-using-matrix",
  "type": "Remark",
  "number": "1.7.7",
  "title": "",
  "body": " Let . Consider the following map. This map is a linear map. Note that if then, for any , we get the following. Furthermore, the matrix of of the linear map, is the following.   "
},
{
  "id": "thm-correspondence-between-matrices-linear-maps",
  "level": "2",
  "url": "sec-matrices-linear-maps.html#thm-correspondence-between-matrices-linear-maps",
  "type": "Theorem",
  "number": "1.7.8",
  "title": "",
  "body": "  The map given by where, is the matrix associated to as in .   "
},
{
  "id": "practice-matrices-linear-maps",
  "level": "1",
  "url": "practice-matrices-linear-maps.html",
  "type": "Exercises",
  "number": "1.8",
  "title": "Exercises",
  "body": "  A few exercises related to the concept of linear maps are listed below.     Consider the following maps. In each of the following cases do the following.   Check if the map defined is linear or not.    If the map is linear then find its associated matrix as outlined in .    Draw the images of standard basis vectors (see ).    If the map is linear and if its associated matrix, , is invertible then find . Compute and .       given by    given by    given by    given by where, and are real numbers.   given by    given by    given by    given by    given by     Assume that is a linear map and Find .   "
},
{
  "id": "exercise-36",
  "level": "2",
  "url": "practice-matrices-linear-maps.html#exercise-36",
  "type": "Exercise",
  "number": "1.8.1",
  "title": "",
  "body": " given by  "
},
{
  "id": "exercise-37",
  "level": "2",
  "url": "practice-matrices-linear-maps.html#exercise-37",
  "type": "Exercise",
  "number": "1.8.2",
  "title": "",
  "body": " given by  "
},
{
  "id": "exercise-38",
  "level": "2",
  "url": "practice-matrices-linear-maps.html#exercise-38",
  "type": "Exercise",
  "number": "1.8.3",
  "title": "",
  "body": " given by  "
},
{
  "id": "exercise-39",
  "level": "2",
  "url": "practice-matrices-linear-maps.html#exercise-39",
  "type": "Exercise",
  "number": "1.8.4",
  "title": "",
  "body": " given by where, and are real numbers. "
},
{
  "id": "exercise-40",
  "level": "2",
  "url": "practice-matrices-linear-maps.html#exercise-40",
  "type": "Exercise",
  "number": "1.8.5",
  "title": "",
  "body": " given by  "
},
{
  "id": "exercise-41",
  "level": "2",
  "url": "practice-matrices-linear-maps.html#exercise-41",
  "type": "Exercise",
  "number": "1.8.6",
  "title": "",
  "body": " given by  "
},
{
  "id": "exercise-42",
  "level": "2",
  "url": "practice-matrices-linear-maps.html#exercise-42",
  "type": "Exercise",
  "number": "1.8.7",
  "title": "",
  "body": " given by  "
},
{
  "id": "exercise-43",
  "level": "2",
  "url": "practice-matrices-linear-maps.html#exercise-43",
  "type": "Exercise",
  "number": "1.8.8",
  "title": "",
  "body": " given by  "
},
{
  "id": "exercise-44",
  "level": "2",
  "url": "practice-matrices-linear-maps.html#exercise-44",
  "type": "Exercise",
  "number": "1.8.9",
  "title": "",
  "body": " given by  "
},
{
  "id": "exercise-45",
  "level": "2",
  "url": "practice-matrices-linear-maps.html#exercise-45",
  "type": "Exercise",
  "number": "1.8.10",
  "title": "",
  "body": " Assume that is a linear map and Find .  "
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
