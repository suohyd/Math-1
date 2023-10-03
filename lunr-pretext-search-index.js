var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My website   copyright  "
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
  "body": " Basic matrix operations   In this section we denote by either the set of real numbers, or the set of complex numbers, .    (Zero matrix)   We denote by the matrix with all its entries zero. We call the zero matrix.     (Identity matrix)   We denote by the matrix with all its diagonal entries , and all other (non-diagonal) entries zero. We call the identity matrix.     The -th entry of a matrix  is the entry at the intersection of -th row and -th column of .    We denote the set of all matrices over by . So . A matrix in is called a square matrix and is called the size of a matrix .    For any matrix and we denote by the matrix obtained by multiplying every entry of the matrix by .    Matrices are equal or same if every -th entry of is equal to (same as) the -th entry of for every and for every . That is, if then, Matrices are said to be not equal , and written as , if there is at least one and at least one such that -th entry of , and -th entry of , are different, i.e., (for some  and some  ).    Suppose that and . We denote the -th entry ( ) (respectively, ) by (respectively, ). The -th entry of the matrix multiplication is given by the following formula. where and .    (Transpose of a matrix)  For a matrix , the transpose of , denoted by , is an matrix obtained by writing columns of as rows of . Thus if then the transpose of is     If then we have the following. Furthermore, for and we have the following.     (Inverse of a matrix)   Let . A square matrix is said to be the inverse of if If inverse of exists then it is denoted by , and is said to be invertible .     Note that if is invertible then the inverse of is , i.e.,     (Coefficient matrix of a system of linear equations and homogeneous system of linear equations) Consider a system of linear equations with for every and .  We may write the system of linear equations given above in a matrix form.   If we put and , and then, the above system of linear equations can be written as The matrix is called the coefficient matrix of the above system.  If all then the above system of linear equations is said to be homogeneous .   "
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
  "id": "convention-3",
  "level": "2",
  "url": "sec-basic-operations.html#convention-3",
  "type": "Convention",
  "number": "1.1.5",
  "title": "",
  "body": " For any matrix and we denote by the matrix obtained by multiplying every entry of the matrix by .  "
},
{
  "id": "equal-matrices",
  "level": "2",
  "url": "sec-basic-operations.html#equal-matrices",
  "type": "Definition",
  "number": "1.1.6",
  "title": "",
  "body": " Matrices are equal or same if every -th entry of is equal to (same as) the -th entry of for every and for every . That is, if then, Matrices are said to be not equal , and written as , if there is at least one and at least one such that -th entry of , and -th entry of , are different, i.e., (for some  and some  ).  "
},
{
  "id": "ij-entry-of-product",
  "level": "2",
  "url": "sec-basic-operations.html#ij-entry-of-product",
  "type": "Observation",
  "number": "1.1.7",
  "title": "",
  "body": " Suppose that and . We denote the -th entry ( ) (respectively, ) by (respectively, ). The -th entry of the matrix multiplication is given by the following formula. where and .  "
},
{
  "id": "transpose",
  "level": "2",
  "url": "sec-basic-operations.html#transpose",
  "type": "Definition",
  "number": "1.1.8",
  "title": "(Transpose of a matrix).",
  "body": " (Transpose of a matrix)  For a matrix , the transpose of , denoted by , is an matrix obtained by writing columns of as rows of . Thus if then the transpose of is   "
},
{
  "id": "basic-properties-of-transpose",
  "level": "2",
  "url": "sec-basic-operations.html#basic-properties-of-transpose",
  "type": "Observation",
  "number": "1.1.9",
  "title": "",
  "body": " If then we have the following. Furthermore, for and we have the following.   "
},
{
  "id": "def-inverse-of-matrix",
  "level": "2",
  "url": "sec-basic-operations.html#def-inverse-of-matrix",
  "type": "Definition",
  "number": "1.1.10",
  "title": "(Inverse of a matrix).",
  "body": " (Inverse of a matrix)   Let . A square matrix is said to be the inverse of if If inverse of exists then it is denoted by , and is said to be invertible .   "
},
{
  "id": "inverse-of-inverse",
  "level": "2",
  "url": "sec-basic-operations.html#inverse-of-inverse",
  "type": "Note",
  "number": "1.1.11",
  "title": "",
  "body": " Note that if is invertible then the inverse of is , i.e.,   "
},
{
  "id": "homogeneous-system",
  "level": "2",
  "url": "sec-basic-operations.html#homogeneous-system",
  "type": "Definition",
  "number": "1.1.12",
  "title": "(Coefficient matrix of a system of linear equations and homogeneous system of linear equations).",
  "body": " (Coefficient matrix of a system of linear equations and homogeneous system of linear equations) Consider a system of linear equations with for every and .  We may write the system of linear equations given above in a matrix form.   If we put and , and then, the above system of linear equations can be written as The matrix is called the coefficient matrix of the above system.  If all then the above system of linear equations is said to be homogeneous .  "
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
  "body": " Row reduced echelon form of a matrix   In this section we denote by either the set of real numbers, or the set of complex numbers, .    (Elementary row operations)   Let . Denote by (for ) the -th row of . Following are elementary row operations.   Interchanging -th row with -th row. This operation is usually denoted by .    Multiplying -th row by a nonzero . This operation is usually denoted by .    Adding a constant multiple of -th row to -th row. This operation is usually denoted by .        Procedure to obtain a row reduced echelon form of a matrix Recall that given a matrix , by applying a sequence of elementary row operations, can be reduced to a row reduced echelon form of . The matrix has the following properties.  All zero rows occurs at the bottom of .  If a row of is nonzero then the first nonzero entry is , it is called pivot .  In any two successive nonzero rows of , the pivot in the lower row occurs to the right of the pivot in the higher row.  Each column of that contains the pivot has zero everywhere else.    The natural question arises: Does the sequence in which row operations are performed change the resulting row reduced echelon form of The answer is no!    The row reduced echelon form of a matrix is unique.    "
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
  "id": "row-reduced-echelon-form-procedure",
  "level": "2",
  "url": "sec-row-echelon-form.html#row-reduced-echelon-form-procedure",
  "type": "Note",
  "number": "1.3.2",
  "title": "Procedure to obtain a row reduced echelon form of a matrix.",
  "body": " Procedure to obtain a row reduced echelon form of a matrix Recall that given a matrix , by applying a sequence of elementary row operations, can be reduced to a row reduced echelon form of . The matrix has the following properties.  All zero rows occurs at the bottom of .  If a row of is nonzero then the first nonzero entry is , it is called pivot .  In any two successive nonzero rows of , the pivot in the lower row occurs to the right of the pivot in the higher row.  Each column of that contains the pivot has zero everywhere else.   "
},
{
  "id": "fact-uniqueness-of-echelon-form",
  "level": "2",
  "url": "sec-row-echelon-form.html#fact-uniqueness-of-echelon-form",
  "type": "Fact",
  "number": "1.3.3",
  "title": "",
  "body": "  The row reduced echelon form of a matrix is unique.   "
},
{
  "id": "practice-row-echelon-form",
  "level": "1",
  "url": "practice-row-echelon-form.html",
  "type": "Exercises",
  "number": "1.4",
  "title": "Exercises",
  "body": "  A few exercises related to the row reduced echelon form of a matrix are listed below.   Find the row reduced echelon form of the following matrices. .  How many pivots are there in one row? How many pivots are there in one column?  In a matrix what is the largest possible number of pivots?  Write the row reduced echelon matrix whose every row has a pivot.  Consider the following augmented matrices. In each case consider the corresponding system of linear equations and determine whether the system has no solution, a unique solution, or infinitely many solutions.                    Consider any square matrix of size of your choice. Using row reduced echelon form determine whether your matrix is invertible or not (see ).   "
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
  "body": "Consider the following augmented matrices. In each case consider the corresponding system of linear equations and determine whether the system has no solution, a unique solution, or infinitely many solutions.                  "
},
{
  "id": "exercise-26",
  "level": "2",
  "url": "practice-row-echelon-form.html#exercise-26",
  "type": "Exercise",
  "number": "1.4.6",
  "title": "",
  "body": " Consider any square matrix of size of your choice. Using row reduced echelon form determine whether your matrix is invertible or not (see ).  "
},
{
  "id": "sec-rank-trace-det",
  "level": "1",
  "url": "sec-rank-trace-det.html",
  "type": "Section",
  "number": "1.5",
  "title": "Some invariants attached to a matrix",
  "body": " Some invariants attached to a matrix   In this section we denote by either the set of real numbers, or the set of complex numbers, .    (Rank of a matrix)   The rank of a matrix is the number of nonzero rows in the row reduced echelon form of .  We denote the rank of by .     It follows from that for a matrix , the rank of is equal to number of pivots in the row reduced echelon form of which in turn can be at most .     The trace of a square matrix is the sum of all its diagonal entries. The trace of a square matrix is denoted by . If is given by then the trace of ,     We now define the determinant of a square matrix recursively. We will not give a general definition.   Given an matrix over , its determinant is denoted by      The determinant of a matrix is denote by and it is equal to , i.e.,       Consider as follows. The determinant of is      In the formula of the determinant of observe the following.   Change of signs in consequtive terms    First entry is obtained by multiplying by the determinant of matrix obtained by deleting the first row and the first column of . The second entry is obtained by multiplying by the determinant of matrix obtained by deleting the first row and the second column of . The third entry is obtained by multiplying by the determinant of matrix obtained by deleting the first row and the third column of .      "
},
{
  "id": "def-rank",
  "level": "2",
  "url": "sec-rank-trace-det.html#def-rank",
  "type": "Definition",
  "number": "1.5.1",
  "title": "(Rank of a matrix).",
  "body": " (Rank of a matrix)   The rank of a matrix is the number of nonzero rows in the row reduced echelon form of .  We denote the rank of by .   "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "sec-rank-trace-det.html#remark-1",
  "type": "Remark",
  "number": "1.5.2",
  "title": "",
  "body": " It follows from that for a matrix , the rank of is equal to number of pivots in the row reduced echelon form of which in turn can be at most .  "
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
  "id": "def-det-2",
  "level": "2",
  "url": "sec-rank-trace-det.html#def-det-2",
  "type": "Definition",
  "number": "1.5.5",
  "title": "",
  "body": "  The determinant of a matrix is denote by and it is equal to , i.e.,    "
},
{
  "id": "def-det-3",
  "level": "2",
  "url": "sec-rank-trace-det.html#def-det-3",
  "type": "Definition",
  "number": "1.5.6",
  "title": "",
  "body": "  Consider as follows. The determinant of is    "
},
{
  "id": "note-3",
  "level": "2",
  "url": "sec-rank-trace-det.html#note-3",
  "type": "Note",
  "number": "1.5.7",
  "title": "",
  "body": " In the formula of the determinant of observe the following.   Change of signs in consequtive terms    First entry is obtained by multiplying by the determinant of matrix obtained by deleting the first row and the first column of . The second entry is obtained by multiplying by the determinant of matrix obtained by deleting the first row and the second column of . The third entry is obtained by multiplying by the determinant of matrix obtained by deleting the first row and the third column of .     "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
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
