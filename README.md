# Team

Rami Al-Saadi, Julia Kobzar, and Alina Cuznetov

## Project

EdMundo, an Online Schooling System Web App

**Our mission:**
​

- Build a **digital school platform for educational institutions**
  > that require a sudden transition to online learning in instances
  > such as pandemics, inclement weather, and natural disasters.

**Tasks:**
​

- Project tasks: https://trello.com/b/JE5FpQhf/school

​
**Specifics:**
​

- Incorporate all necessary **features** that enable the instructor to > conduct online classes in a manner that mimics an in-person > classroom setting.
  ​
- Design the platform to be as **user-friendly, straightforward, and > intuitive** as possible for individuals with limited computer > proficiency.
  ​
  **Functionalities:**
  ​
- Registration as:
  ​ - Admin
  ​ - Teacher
  ​
- Login as:
  ​ - Admin
  ​ - Teacher
  ​ - Student
  ​
- Admin dashboard:
  ​ - (Add and) edit info about the school (1)
  ​ - Create and edit student/teachers accounts (2)
  ​ - Create and edit standard periods (2 to 3)
  ​ - Create student classes (4)
  ​ - Assign live meeting link to every class (3)
  ​ - Create class schedules (4)
  ​ - Create lesson timeline (sessions) (3)
  ​ - Assign teachers to sessions (4-5)
  ​

```{=html}
<!-- -->
```

- Teacher dashboard:
  ​ - Create / edit lesson content: (1) (optional: and participants)
  ​ - Indicate subject, objectives, (optional: time and date), > lesson info (book pages) (1)
  ​ - Add class resources: pdf, png → upload and download (1) (add > links to google docs instead)
  ​ - Assign classwork (2) (future)
  ​ - Assign homework to class students (3) (link to google doc)
  ​ - Assigns tests to class students (4) (future)
  ​ - Take attendance (future)
  ​ - My classes (schedule) (partial - future)
  ​ - Teachers should see the link for each class automatically as > assigned by admin
  ​

```{=html}
<!-- -->
```

- Teacher lesson page:
  ​

```{=html}
<!-- -->
```

- Student dashboard:
  ​ - Assigned a class
  ​ - Dashboard includes:
  ​ - They will see their schedule incl. Sessions(Subjects) and > Teachers
  ​ - Calendar of coming classes ( date and time) (future)
  ​ - Homework due (future)
  ​ - Tests / exams due (future)
  ​ - Click on lesson:
  ​ - See the teacher
  ​ - Objectives
  ​ - Class info
  ​ - Quiz ? (future optional)
  ​ - Lesson:
  ​ - Submit classwork and homework
  ​ - Download lesson resources
  ​

```{=html}
<!-- -->
```

- Student lesson page:
  ​ - Name of the subject
  ​ - Objectives
  ​ - Link for online meeting
  ​ - Name of the teacher
  ​ - Resources
  ​ - Homework:
  ​ - Submit homework
  ​ - Optional: Send private message to teacher
  ​ - Optional: Lesson feedback
  ​ - Optional: Multiple questions quiz
  ​
  **Design specifics:**
  ​
- Responsive for all sizes (MDB, MUI)
  ​
- Illustrations
  ​ - [[https://icons8.com/illustrations/style\--3d-stripy]{.underline}](https://icons8.com/illustrations/style--3d-stripy)
  ​
- Select object for adding / removing students:
  ​ - [[https://react-select.com/home]{.underline}](https://react-select.com/home)
  ​
  **Technologies:**
  ​
- React
  ​
- Optional: Unit tests with Jest
  ​
  UI:
  ​
  **Software Design:**
  ​
  Object Oriented Approach
  ​
  Object: School {
  ​
- String: Id: exampleidihgfde3456ztfgh
  ​
- String: Name: Julia's Elementary School
  ​
- Array\[Admin Objects\]
  ​
- Array\[Teacher Objects\]
  ​
- Array\[Student Objects\]
  ​
- Array\[Class Object\]
  ​
- Contact Info Object { Email , Phone, Address, ... }
  ​
  > }
  > ​
  > Object Admin {
  > ​
- String: Id: exampleidihgfde3456ztfgh
  ​
- String: Name: Admin1
  ​
- Contact Info Object { Email , Phone, Address,.. }
  ​
- Credentials Object { Email, Username, Password }
  ​
- ​
  }
  ​
  Object Teacher {
  ​
- String: Id: exampleidihgfde3456ztfgh
  ​
- String: Name: Admin1
  ​
- Contact Info Object { Email , Phone, Address,.. }
  ​
- Credentials Object { Email, Username, Password }
  ​
- Array\[Object Lesson\]
  ​
- Array\[Lesson Object\]
  ​
  }
  ​
  Object Student {
  ​
- String: Id: exampleidihgfde3456ztfgh
  ​
- String: Name: Admin1
  ​
- Contact Info Object { Phone, Address,.. }
  ​
- Credentials Object { Email, Username, Password }
  ​
- My Current Class: Ref to Class Object ?
  ​
- Attended: Lessons
  ​
  }
  ​
  Object Class {
  ​
- Id
  ​
- Name
  ​
- Schedule Object
  ​
- Array\[Student Object\]
  ​
- Teaching Year (example 2021-2022)
  ​
- String: LiveMeetingLink
  ​
- Lessons Array ?
  ​
- Tests Array ?
  ​
  }
  ​
  Schedule Object {
  ​
  > \- Array\[Day Object { Number, Name, Array\[{Session Object}\]
  > (sessions per day)
  >
  > }\] (Array of days per week)
  > ​
  > }
  > ​
  > Session Object {
  > ​
- Id
  ​
- Name (example: Subject Name such as Biology)
  ​
- Period Object
  ​
- A reference to the Teacher ( Teacher Object)
  ​
  }
  ​
  Lesson Object {
  ​
- Id
  ​

```{=html}
<!-- -->
```

- Specific time in the calendar
  ​
- Specific session
  ​
- String: Topic
  ​
- String: Overview (objectives)
  ​
- String: Description (book pages)
  ​
- Resources: Array\[string: src\]
  ​
- Classwork: Array\[string\]
  ​
- Array\[string: Homework\]
  ​
- Attendance: Array\[Students\]
  ​
  }
  ​
  Period {
  ​
- Number
  ​

```{=html}
<!-- -->
```

- Begins at:
  ​
- Ends at:
  ​
- Duration:
  ​

​
