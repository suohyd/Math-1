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
  "title": "Questions related to basic matrix operations",
  "body": " Questions related to basic matrix operations  We denote by the matrix with all its entries zero. We call the zero matrix. We denote by the matrix with all its diagonal entries , and all other (non-diagonal) entries zero. We call the identity matrix. We denote the set of all matrices over by . So . For any matrix and we denote by the matrix obtained by multiplying every entry of the matrix by .  Suppose that and . We denote the -th entry, i.e., entry in the -th row and -th column of the matrix (respectively, ) by (respectively, ). The -th entry of the matrix multiplication is given by the following formula.     Consider the following matrices in . Find .    Let . Find such that     Show that for any matrix the following is true.     Show that for any matrices the following is true.     Let . Show that and that .    Compute the matrix multiplication .    and           and           and  In this case, consider the matrix as the point of the space and matrix as the point . Plot the line segment joining the origin of and as well as the line segment joining the origin of and . Check whether is perpendicular to .      and   In this case, consider the matrix as the point of the space and matrix as the point . Plot the line segment joining the origin of and as well as the line segment joining the origin of and . Check whether is perpendicular to .       For a matrix and a natural number we write   Find the following powers of the given matrices.     Write the augmented matrix corresponding to the given system of equations.                For a matrix , the transpose of , denoted by , is an matrix obtained by writing columns of as rows of . Thus if then the transpose of is In the following, given compute its transpose and also compute and .     , where      , where                    Find a condition on such that the matrix will be equal to its transpose.    Consider a matrix . Find a condition on such that and .      Check whether is a function or not. Also check whether is injective (one-one) or surjective (onto).     "
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
