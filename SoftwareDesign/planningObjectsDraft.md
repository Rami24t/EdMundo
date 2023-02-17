Object: School {
​
-   String: Id: exampleidihgfde3456ztfgh
​
-   String: Name: Julia's Elementary School
​
-   Array\[Admin Objects\]
​
-   Array\[Teacher Objects\]
​
-   Array\[Student Objects\]
​
-   Array\[Class Object\]
​
-   Contact Info Object { Email , Phone, Address, ... }
​
> }
​
Object Admin {
​
-   String: Id: exampleidihgfde3456ztfgh
​
-   String: Name: Admin1
​
-   Contact Info Object { Email , Phone, Address,.. }
​
-   Credentials Object { Email, Username, Password }
​
-   
​
}
​
Object Teacher {
​
-   String: Id: exampleidihgfde3456ztfgh
​
-   String: Name: Teacher1
​
-   Contact Info Object { Email , Phone, Address,.. }
​
-   Credentials Object { Email, Username, Password }​
}
​
Object Student {
​
-   String: Id: exampleidihgfde3456ztfgh
​
-   String: Name: Admin1
​
-   Contact Info Object { Phone, Address,.. }
​
-   Credentials Object { Email, Username, Password }
​
-   My Current Class: Ref to Class Object ?
​
-   Attended: Lessons
​
}
​
Object Class {
​
-   Id
​
-   Name
​
-   Schedule Object
​
-   Array\[Student Object\]
​
-   Teaching Year (example 2021-2022)
​
-   String: LiveMeetingLink
​
-   Lessons Array ?
​
-   Tests Array ?
​
}
​
Schedule Object {
​
> \- Array\[Day Object { Number, Name, Array\[{Session Object}\]
> (sessions per day)
>
> }\] (Array of days per week)
​
}
​
Session Object {
​
-   Id
​
-   Name (example: Subject Name such as Biology)
​
-   Period Object
​
-   A reference to the Teacher ( Teacher Object)
​
}
​
Lesson Object {
​
-   Id
​
-   Specific time in the calendar
​
-   Specific session
​
-   String: Topic
​
-   String: Objectives
​
-   String: Description (book pages)
​
-   Resources: Array\[string: src\]
​
-   Classwork: Array\[string\]
​
-   Array\[string: Homework\]
​
-   Attendance: Array\[Students\]
​
}
​
Period {
​
-   Number

-   Begins at:
​
-   Ends at:
​
-   Duration:
​

​