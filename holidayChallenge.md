ROUGH WORK

21:21 sun jan29 2023
In this iteration of the blog api, I realised that the delete logic should first cross-check if the specified resource even exist in the database in the first place.
If it does, then it goes ahead to delete it. If it doesn't it sends a response to the client that the specified resource does not exist.
The above consideration was not implemented in my exam project.

10:09 mon jan30 2023
In the above implementation of cross-checking the existence of the resource that the client is making a delete request for. I omitted the return key and ran into errors.
I observed the errors early this morning before I went to bed. But I was too tired to act. However, I was initially confused with understanding the source of the error. I attempt to delete an already deleted resource, it works correctly, but if I repeat the same thing again, it throws this error, "Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client".
I kind of had a very vague idea of what it may be. But was even more clueless on how to go about it. But I observed that, the portion of the code outside of the conditional statement was also been executed. Furthermore, I also observed that the error crashed my server, which is utterly unacceptable, and implies that the error is not been handled. So the first idea that came to my mind, was to apply a try-catch statement within the conditional statement.
As I was writing the try-catch statement and refactoring my code, it dawn on me that the reason why the code outside the conditional block was been executed after the code within the conditional block has been executed (when the condition was met), was because of the absence of a return statement.
I also had the intuition that a try-catch statement was not necessary, at least with the presence of a return keyword. In addition, the condiition statement itself, is kind of, effectively playing a similar role to that the catch part of the try-catch statement is doing.
I added the return keyword and tested the delete request multiple times with resources that had already been deleted, and the bug was non-existent. Hip, hip, hip, HURRAY!!!

12:44 mon jan30 2023
A reason why I'm apparently slow is because I don't just want this to be another academic exercise. Instead I'm committing myself to satisfy my curiousity and deepen my understanding with doing loads of experiments in between commits.