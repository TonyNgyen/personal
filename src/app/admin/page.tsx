"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "@/app/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { format } from "date-fns";
import Blog from "@/components/sections/blog/blog";

function AdminPage() {
  const form = useRef<HTMLFormElement | null>(null);
  const [user, setUser] = useState<object | null>(null);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [tag, setTag] = useState("");

  const [blogValues, setBlogValues] = useState({
    title: "",
    projectTag: "",
    tags: new Set<string>(),
    imgSrc: "",
    shortDesc: "",
    longDesc: "",
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("User:", currentUser);
    });
    return () => unsubscribe();
  }, []);

  const signIn = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });

  const testAdding = async () => {
    try {
      const docRef = await addDoc(collection(db, "blogs"), {
        title: "Title",
        date: "1/1/2024",
        imgSrc: "imageSRC",
        shortDesc: "Short Description",
        longDesc: "Long Description",
      });
      console.log("Successfully added doc");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const testReading = async () => {
    const querySnapshot = await getDocs(collection(db, "blogs"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      console.log(doc.data());
    });
  };

  const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tag.trim() !== "") {
      e.preventDefault(); // Prevent form submission
      const newTags = new Set(blogValues.tags);
      newTags.add(tag.trim());
      setBlogValues({ ...blogValues, tags: newTags });
      setTag(""); // Clear the input field
    }
  };

  const addBlog = async () => {
    try {
      const date = format(new Date(), "P");
      const tagsArray = Array.from(blogValues.tags);
      const docRef = await addDoc(collection(db, "blogs"), {
        title: blogValues.title,
        projectTag: blogValues.projectTag,
        tags: tagsArray,
        date: date,
        imgSrc: blogValues.imgSrc,
        shortDesc: blogValues.shortDesc,
        longDesc: JSON.stringify(blogValues.longDesc).slice(1, -1),
      });
      console.log("Successfully added blog");
      setBlogValues({
        title: "",
        projectTag: "",
        tags: new Set<string>(),
        imgSrc: "",
        shortDesc: "",
        longDesc: "",
      });
    } catch (e) {
      console.error("Error adding blog: ", e);
    }
  };

  if (user == null) {
    return (
      <div>
        <form ref={form}>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={formValues.email}
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={formValues.password}
            onChange={(e) =>
              setFormValues({ ...formValues, password: e.target.value })
            }
          />
          <button
            type="button"
            onClick={() => signIn(formValues.email, formValues.password)}
          >
            Sign In
          </button>
        </form>
      </div>
    );
  }

  const tagsArray = Array.from(blogValues.tags);

  return (
    <div>
      {/* <button onClick={() => testAdding()} className="bg-violet-400 p-2">
        Test Adding
      </button> */}
      <button onClick={() => testReading()} className="bg-sky-400 p-2">
        Test Reading
      </button>
      <form ref={form} className="flex flex-col gap-4 w-1/4 bg-zinc-600 p-4">
        <h1 className="text-2xl font-semibold">Add a New Blog</h1>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={blogValues.title}
          onChange={(e) =>
            setBlogValues({ ...blogValues, title: e.target.value })
          }
          className="p-3"
        />
        <div className="flex">
          <input
            type="text"
            name="tag"
            placeholder="Add tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            onKeyDown={addTag}
            className="p-3 w-full"
          />
        </div>
        <div className="flex gap-3 flex-wrap">
          {tagsArray.map((tag) => (
            <h1 className="bg-emerald-700 py-1 px-3 rounded-full" key={tag}>
              {tag}
            </h1>
          ))}
        </div>

        <input
          type="text"
          name="imgSrc"
          placeholder="imgSrc"
          value={blogValues.imgSrc}
          onChange={(e) =>
            setBlogValues({ ...blogValues, imgSrc: e.target.value })
          }
          className="p-3"
        />
        <textarea
          name="shortDesc"
          placeholder="shortDesc"
          value={blogValues.shortDesc}
          onChange={(e) =>
            setBlogValues({ ...blogValues, shortDesc: e.target.value })
          }
          rows={8}
          className="p-3"
        />
        <textarea
          name="longDesc"
          placeholder="longDesc"
          value={blogValues.longDesc}
          onChange={(e) =>
            setBlogValues({ ...blogValues, longDesc: e.target.value })
          }
          rows={8}
          className="p-3"
        />
        <button
          type="button"
          onClick={() => addBlog()}
          className="bg-green-500 px-2 py-1"
        >
          Add
        </button>
      </form>
      <h1 className="text-3xl text-center mb-4 mt-10">Preview</h1>
      <Blog />
    </div>
  );
}

export default AdminPage;
