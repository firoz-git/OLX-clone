import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext,AuthContext } from '../../store/Context';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Create = () => {
  const [Name, setName] = useState('')
  const [category, setCategory] = useState('')

  const [price, setPrice] = useState('')
  const [Image, setImage] = useState('')
  const {firebase} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  const history  = useHistory()

  const uploadImagedata=()=>{
    firebase.storage().ref(`/images/${Image.name}`).put(Image).then(({ref})=>{
      ref.getDownloadURL().then(url=>{
        console.log(url,'iam image url')
        firebase.firestore().collection('products').add({
          Name,
          category,
          price,
          url,
          userId:user.uid,
          createdAt:new Date().toDateString()
        })
        history.push('/')
      })
    })
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">

          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            id="fname"
            name="Name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            id="fname"
            name="category"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input className="input" value={price} onChange={(e) => setPrice(e.target.value)} type="number" id="fname" name="Price" />
          <br />

          <br />
          <img alt="Posts" width="200px" height="200px" src={Image ? URL.createObjectURL(new Blob([Image])) : ''} ></img>

          <br />
          <input onChange={(e) => {
            setImage(e.target.files[0])
          }} type="file" />
          <br />
          <button onClick={uploadImagedata} className="uploadBtn">upload and Submit</button>

        </div>
      </card>
    </Fragment>
  );
};

export default Create;
