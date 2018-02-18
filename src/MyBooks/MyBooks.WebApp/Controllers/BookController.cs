using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MyBooks.WebApp.Controllers
{
    public class BookController : ApiController
    {
        public IEnumerable<Book> Get()
        {
            using(MyBooksDBEntities entities = new MyBooksDBEntities())
            {
                return entities.Books.ToList();
            }
        }

        public void Post([FromBody]Book book)
        {
            using (MyBooksDBEntities entities = new MyBooksDBEntities())
            {
                entities.Books.Add(book);
                entities.SaveChanges();
            }
        }

        [HttpDelete]
        public void Delete(int id)
        {
            using (MyBooksDBEntities entities = new MyBooksDBEntities())
            {
                entities.Books.Remove(entities.Books.FirstOrDefault(e => e.ID == id));
                entities.SaveChanges();
            }
        }

        public void Put(int id, [FromBody]Book book)
        {
            using (MyBooksDBEntities entities = new MyBooksDBEntities())
            {
                var entity = entities.Books.FirstOrDefault(e => e.ID == id);

                entity.Name = book.Name;
                entity.Author = book.Author;
                entity.PublicationYear = book.PublicationYear;
                entity.Edition = book.Edition;
                entity.access = book.access;

                entities.SaveChanges();
            }
        }
    }
}
