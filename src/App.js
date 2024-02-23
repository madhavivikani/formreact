import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useState } from 'react';
import Table from 'react-bootstrap/Table';


const validate = Yup.object({
  name: Yup.string().min(2, 'Too Short').max(20).required('Name must be required...!'),
  email: Yup.string().email().required('email must be required...!'),
  password: Yup.string().min(6).required('password must be required...!'),
  cpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('Cpassword must be required...!'),
  city: Yup.string().required('city must be required...!'),
  gender: Yup.string().required('gender must be required...!'),
  hobby: Yup.array().min(1).required('hobby must be required...!'),

})


function App() {

  let [result, setresult] = useState([]);

  const init = {
    name: '',
    email: '',
    password: '',
    cpassword: '',
    city: '',
    gender: '',
    hobby: ''
  }

  let { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
    initialValues: init,
    validationSchema: validate,
    onSubmit: (values) => {
      setresult([...result, values]);
      console.log(values);
    }
  })

  // console.log(errors);

  return (
    <div className="App">
      <Container className='py-5'>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-12">
            <label htmlFor="inputname" className="form-label">Name</label>
            <input type="name" className="form-control" id="inputname" name='name' value={values.name} onChange={handleChange} onBlur={handleBlur} />
            {errors.name && touched.name ? <span>{errors.name}</span> : null}
          </div>
          <div className="col-md-12">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="text" className="form-control" id="inputEmail4" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
            {errors.email && touched.email ? <span>{errors.email}</span> : null}

          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">Password</label>
            <input type="password" className="form-control" id="inputPassword4" name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
            {errors.password && touched.password ? <span>{errors.password}</span> : null}

          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword5" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="inputPassword5" name='cpassword' value={values.cpassword} onChange={handleChange} onBlur={handleBlur} />
            {errors.cpassword && touched.cpassword ? <span>{errors.cpassword}</span> : null}

          </div>
          <div className="col-md-4">
            <label htmlFor="inputCity" className="form-label">City</label>
            <select id="inputCity" name='city' onChange={handleChange} onBlur={handleBlur} className="form-select">
              <option selected value=''>Select City</option>
              <option value='Surat'>Surat</option>
              <option value='Ahmadabad'>Ahemdabad</option>
              <option value='Navsari'>Navsari</option>
              <option value='Baroda'>Baroda</option>
              <option value='Narmda'>Narmda</option>
            </select>
            {errors.city && touched.city ? <span>{errors.city}</span> : null}

          </div>
          <div className="col-4">
            <label className="form-check-label" htmlFor="gridCheck">
              Hobby
            </label>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" name='hobby' value='Reading' onChange={handleChange} onBlur={handleBlur} />
              <label className="form-check-label" htmlFor="gridCheck">
                Reading
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck1" name='hobby' value='Travelling' onChange={handleChange} onBlur={handleBlur} />
              <label className="form-check-label" htmlFor="gridCheck1">
                Travelling
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck2" name='hobby' value='Dancing' onChange={handleChange} onBlur={handleBlur} />
              <label className="form-check-label" htmlFor="gridCheck2">
                Dancing
              </label>
            </div>
            {errors.hobby && touched.hobby ? <span>{errors.hobby}</span> : null}
          </div>
          <div className="col-4">
            <label className="form-check-label" htmlFor="gridCheck">
              Gender
            </label>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault1" value='Male' onChange={handleChange} onBlur={handleBlur} />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Male
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault2" value='Female' onChange={handleChange} onBlur={handleBlur} />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Female
              </label>
            </div>
            {errors.gender && touched.gender ? <span>{errors.gender}</span> : null}

          </div>


          <div className="col-12">
            <button type="submit" className="btn btn-primary">Sign in</button>
          </div>
        </form>
      </Container>

      <Table bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Cpassword</th>
            <th>City</th>
            <th>Hobby</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {result.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>{item.cpassword}</td>
                <td>{item.city}</td>
                <td>{item.hobby.join(', ')}</td>
                <td>{item.gender}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
