require('dotenv').config();
const hello=0
const http=require('http')
const bodyparser=require('body-parser')
const express= require('express')
const mongoose =require('mongoose');
mongoose.connect("mongodb+srv://rushabhkumat563:rushabh@booky.wenr52n.mongodb.net/?retryWrites=true&w=majority&appName=booky",).then(()=>console.log('conection succesful'))


const database=require('./database')

const booky=express()
booky.use(express.json());

booky.use(bodyparser.urlencoded({extended:true}))
booky.post('/book/new',(req,res)=>{
  const newbook=req.body;

 
  const updatebook=database.books.filter((book)=>{
    // const get=JSON.parse(newbook)
if(book.ISBN!==   newbook.ISBN)
  {
    database.books.push(newbook)
    return res.json({new:database.books})
  }
  

else{
  book=newbook;
  
  return book;
}

  
}

  )
  return res.json({new:updatebook})
  
})
booky.get('/',(req,res)=>res.json({book:database.books}))






// /*
// Route            /is
// Description      Get specific book on ISBN
// Access           PUBLIC
// Parameter        isbn
// Methods          GET
// */
// booky.get("/is/:isbn",async (req,res) => {

//   const getSpecificBook = await BookModel.findOne({ISBN: req.params.isbn});
  
//   //null !0 = 1 , !1=0
//     if(!getSpecificBook) {
//       return res.json({error: `No book found for the ISBN of ${req.params.isbn}`});
//     }
  
//     return res.json({book: getSpecificBook});
//   });
  
  
//   /*
//   Route            /c
//   Description      Get specific book on category
//   Access           PUBLIC
//   Parameter        category
//   Methods          GET
//   */
  
//   booky.get("/c/:category", async (req,res) => {
//     const getSpecificBook = await BookModel.findOne({category: req.params.category});
  
//     //null !0 = 1 , !1=0
//       if(!getSpecificBook) {
//         return res.json({error: `No book found for the category of ${req.params.category}`});
//       }
  
//       return res.json({book: getSpecificBook});
//   });
  
  
//   /*
//   Route            /author
//   Description      Get all authors
//   Access           PUBLIC
//   Parameter        NONE
//   Methods          GET
//   */
  
//   booky.get("/author", async (req,res) => {
//     const getAllAuthors = await AuthorModel.find();
//     return res.json(getAllAuthors);
//   });
  
//   /*
//   Route            /author/book
//   Description      Get all authors based on books
//   Access           PUBLIC
//   Parameter        isbn
//   Methods          GET
//   */
  
//   booky.get("/author/book/:isbn", (req,res) => {
//     const getSpecificAuthor = database.author.filter(
//       (author) => author.books.includes(req.params.isbn)
//     );
  
//     if(getSpecificAuthor.length === 0){
//       return res.json({
//         error: `No author found for the book of ${req.params.isbn}`
//       });
//     }
//     return res.json({authors: getSpecificAuthor});
//   });
  
//   /*
//   Route            /publications
//   Description      Get all publications
//   Access           PUBLIC
//   Parameter        NONE
//   Methods          GET
//   */
  
//   booky.get("/publications",async (req,res) => {
//     const getAllPublications = await PublicationModel.find();
//     return res.json(getAllPublications);
//   })



booky.listen(1200,()=> console.log('server is running on port no 1200',database.books))

