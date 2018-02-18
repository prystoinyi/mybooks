using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Owin;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.Google;
using Microsoft.Owin.Security.OAuth;
using Owin;
using MyBooks.WebApp.Providers;
using MyBooks.WebApp.Models;

namespace MyBooks.WebApp
{
    public partial class Startup
    {
        public void InitDB()
        {
            using (var context = new MyBooksDBEntities())
            {
                if (context.Users.Count() == 0)
                {
                    var user = new User();
                    user.Username = "Test1@gmail.com";
                    user.Password = "Qaz123!";
                    context.Users.Add(user);
                    context.SaveChanges();
                }
                if (context.Books.Count() == 0)
                {
                    var book = new Book();
                    book.Name = "C++ - basic course";
                    book.Author = "Herbert Schildt";
                    book.PublicationYear = 2015;
                    book.Edition = "3";
                    //book.UserID = 1;
                    //book.access = true;
                    context.Books.Add(book);
                    context.SaveChanges();

                    book = new Book();
                    book.Name = "The Perfect Programmer";
                    book.Author = "Robert Martin";
                    book.PublicationYear = 2012;
                    book.Edition = "1";
                    context.Books.Add(book);
                    context.SaveChanges();

                    book = new Book();
                    book.Name = "Finance";
                    book.Author = "Bodie Zvi and Robert Merton";
                    book.PublicationYear = 2013;
                    book.Edition = "1";
                    context.Books.Add(book);
                    context.SaveChanges();

                }
            }
        }
    }
}
