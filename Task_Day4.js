// 1.Implement a fetch wrapper with retry logic.

async function fetchWithRetry(
    url,
    options = {},
    retries = 3,
    delay = 1000
){
    try {
        const response =await fetch(url,options)
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`)
        }
    
        return await response.json();
    }
    catch (error) {
        if (retries === 0) {
            throw error;
        }
        console.log('Retring... attems left:${retries}');
     
        await new Promise(resolve => setTimeout(resolve, delay));
    
        return fetchWithRetry(url, options, retries - 1, delay)
    }
}

//usage
fetchWithRetry(`https://jsonplaceholder.typicode.com/todos/1`)
  .then(data => console.log(data))
  .catch(err => console.error("Final Error:", err.message));




  

  // 2. Write multiple async exercises using parallel/serial execution.

 // Exercise 1: Serial Execution

async function fetchserial(){
    const user=await fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(res=>res.json());

    const posts=await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
    .then(res=>res.json());

    const comment=await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${posts[0].id}`)
    .then(res=>res.json());

    console.log(user);
    console.log(posts);
    console.log(comment);

 }

 fetchserial();


 //2.2: Parallel Execution

 async function fetchparallel(){
    const urls=[
          "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/comments"
    ]

    let response=await Promise.all(
        urls.map(url=>fetch(url))
    )

    let results=await Promise.all(
        response.map(res=>res.json())
    )

    console.log("users:",results[0].length);
    console.log("posts:",results[1].length);
    console.log("comments:",results[2].length);
 }

 fetchparallel();



 // 3. Serial vs Parallel Timing Comparison

 async function serialTiming() {
  console.time("Serial");

  await fetch("https://jsonplaceholder.typicode.com/posts/1");
  await fetch("https://jsonplaceholder.typicode.com/posts/2");
  await fetch("https://jsonplaceholder.typicode.com/posts/3");

  console.timeEnd("Serial");
}

async function parallelTiming() {
  console.time("Parallel");

  await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/posts/1"),
    fetch("https://jsonplaceholder.typicode.com/posts/2"),
    fetch("https://jsonplaceholder.typicode.com/posts/3")
  ]);

  console.timeEnd("Parallel");
}

serialTiming();
parallelTiming();






// 3.Inspect event loop order using setTimeout, promises, async.

/*

event loop rules.

Execution Priority
1. call stack means sync code
2.microrasks- promises,await.
3.macrotask-  settimeout,setinterval

 */

console.log("start");

setTimeout(()=>{console.log("settimeout")},0);

async function demo(){
  console.log("async start");

  await Promise.resolve();
  console.log("async end");
  
}
demo();

Promise.resolve().then(()=>console.log("promise resolve"));
 
  console.log("end");
  
