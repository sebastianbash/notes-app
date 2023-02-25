# Notes-App - Get organized. Remember everything
**Notes-App is a digital Notes manager. Manage your notes and workflow in a modern way and boost your efficiency without any efforts.**


---


## Features

**Login** 
- User able to login by entering email and password
- User can use guest credentials to login
- Form validation is done for login fields

**Sign Up**
- User able to create account and signup for the site
- Form validation is done for signup fields

**Landing page**
- Landing page with Buttons to go to login or signup

**Notes Home page**
- It list all the Notes stored by the user other than archive and trash notes
- Has a button to create Note, edit Note and Add labels

**Create Note**
- User can click create Note button and on Form will appear in the modal
- Where they can give the Title and description for a note
- User can also choose the priority, pin, label and color for the Note

**Rich Text Editor**
- Rich text Editor is used for Notes container. 
- So You apply the basic styling for the Note from the editor

**Edit Note**
- User can click edit icon button on each note to edit the particular note.
- It will be opened in the same editor and form
- All the functionalities such as Title, notes, priority, pin, label and color for the Note can be Edited

**Pin Feature**
- Pin Feature is used to pin the important notes and it will appear at the top
- pin/unpin can be done both on while creating the note and after the creation also

**Color change**
- User can change the color of each notes based on the provided colors
- color change can be done both on while creating the note and after the creation also

**Priority**
- Priority can be given to notes as High, Medium and Low
- color change can be done both on while creating the note and after the creation also

**Label**
- You can add the label using Add label button on the sidebar
- All the Added label will be shown on the Notes Form and Each Note.
- You can Edit the label and it will be updated on the all the notes for which the particular label has been used
- You can Delete the label and the particular label will be removed from all the notes

**Filter**
- You can sort the notes based on the time it has been added.
- You can also filter the notes based on the priority
- For each label the label will be added to the side bar and you can click that and see the notes tagged with that particular label

**Archive Notes**
- Archive button will be shown on each notes
- You can unarchive the note from the archive notes
- You can also delete the note from archive notes page

**Trash Note**
- Trash button will be shown on each notes
- You can Retrive the trashed notes from the Trash Page
- You can also permenantly delete the Note from the trash page

**Profile page**
- User profile page with email id of the user
- Button to logout from the app.

**Private Routes**
- All the user specific routes are made as private routes and can be accessed only after login

**Loaders and Toasts**
- Loaders and toast is provided as the acknowledgment to the users

**Backend**
- Backend is done with the help of firebase


---

## Run Locally

```git
$ git clone https://github.com/sebastianbash/notes-app.git
$ cd notes-app
$ npm install
$ npm start  
```

---

## Todo

- Search Functionality
- Add more feature to the Editor