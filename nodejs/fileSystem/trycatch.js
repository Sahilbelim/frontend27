try
{
     let error = "demo error";
     throw error;
     console.log("try block ");
}
catch(error)
{
     console.log(error);
     console.log("catch block ");
}
finally
{
     console.log("finally ");
}