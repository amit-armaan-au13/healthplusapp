import React,{ useState,useEffect } from 'react'
import { Row,Col,Button,Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import Loader from '../components/loader'
import { login } from '../action/userAction'
import FormContainer from '../components/FormContainer'
const LoginScreen = ({location,history}) => {
console.log(location)
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector(state=>state.userLogin)

    const{ loading,error,userInfo } = userLogin
    console.log(userInfo)


    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect( () => {
        if(userInfo){
            history.push(redirect)
        }
    },[history,redirect,userInfo])

    const submitHandler = (e) =>{
        e.preventDefault()
        
        dispatch(login(email,password))
    }

    return (
      <FormContainer>
        <h1>Sign In</h1>
        {loading && <Loader></Loader>}
        {error && <h1>{error}</h1>}

        <Form onSubmit={submitHandler}>
          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <br></br>
          <Button type="submit" variant="primary">
            {" "}
            Sign In
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New Customer?{" "}
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              Register
            </Link>
          </Col>
        </Row>
      </FormContainer>
    );
}

export default LoginScreen
