import styled from 'styled-components';
 
const Login = (props) =>{
	return (
		<Container>
			<Nav>
			<a href="/">
				<img src="/images/login-logo.svg" alt="linked-in logo" />
			</a>
			<div>
				<Join>Join Now</Join>
				<Signin>Sign In</Signin>
			</div>
			</Nav>
			<Section>
			<Hero>
			<h1>Welcome to your professional community</h1>
			<VerticalContainer>
			<Action>
			<a href="/">Search a Job</a>
			</Action>
			<Action><a>Find a Person you know</a></Action>
			<Action><a>Learn a new skill</a></Action>
			<Form>
				
					<Button>
					
					<p>Google</p>
					</Button>
					
				
			</Form>
			</VerticalContainer>
			<img src="images/login-hero.svg" alt="illustration"/>
			</Hero>
			
			</Section>
			
		</Container>
		);
}


const Container = styled.div`
	padding:20px 0px 20px 20px;
`

const Nav = styled.nav`
	max-width:1128px;
	margin:auto;
	padding:12px 0 16px;
	display:flex;
	align-items:center;
	position:relative;
	justify-content:space-between;
	flex-wrap:nowrap;

	& > a {
		width:135px;
		height:40px;
		@media (max-width: 768px) {
			padding:0 5px;
		}
	}
`
const Join = styled.a`
	font-size:16px;
	padding:10px 12px;
	color:rgba(0,0,0,0.6);
	margin-right:12px;

	&:hover {
		background-color:rgba(0,0,0,0.08);
		color:rgba(0,0,0,0.9);
		border-radius:4px;

	}
`
const Signin = styled.a`
	font-size:16px;
	font-weight:600;
	line-height: 40px;
	padding:10px 24px;
	background-color:rgba(0,0,0,0);
	box-shadow:inset 0 0 0 1px #0a66c2;
	border-radius:24px;
	transition-duration:167ms;
	&:hover {
		background-color:rgba(112,181,249,0.15);
		color:#0a66c2
	}

`

const Section = styled.section`
	display:flex;
	align-content:start;
	min-height:700px;
	padding-bottom:138px;
	padding-top:40px;
	padding:60px 0;
	position:relative;
	flex-wrap:wrap;
	width:100%;
	max-width:1128px;
	align-items:center;
	margin:auto

	@media(max-width:768px) {
		margin:auto;
		min-height:0px;
	}

`

const Hero = styled.div`
	width:100%;
	h1 {
		padding-bottom:0px;
		width:55%;
		font-size:56px;
		color:#2977c9;
		font-weight:100;
		line-height:70px;
		
		@media(max-width:768px) {
			text-align:center;
			font-size:20px;
			width:100%;
			line-height:2;
		}

	}

	img {
		z-index:-1;
		width:700px;
		height:670px;
		position:absolute;
		right:-150px;
		bottom:-2px;
		@media(max-width:768px) {
			top:230px;
			width:initial;
			position:initial;
			height:initial;
		}
	}
`
const VerticalContainer = styled.div`
	display:flex;
	flex-direction:column;

`
const Action = styled.a`
	margin:12px 0px 0px 10px;
	background:transparent;
	width:30%;
	padding:18px 18px 18px 18px;
	border:1px solid rgba(0,0,0,0.3);
	border-radius:4px;
	& a {
		font-size:18px;
		text-decoration:none;
		color:black;
		font-weight:400;
	}
`

const Form = styled.div`
	margin-top:70px;
	width:100%;
	display:flex;
	justify-content:flex-start;
	align-items:center;
`
const Button = styled.button`
	width:300px;
	
	margin:10px;
	background-color:white;
	border-radius:18px;
	border:1px solid black;
	padding:10px 10px 10px 10px;
	display:flex;
	flex-direction:row;
	justify-content:center;
	align-items:center;
	p {
		font-size:17px;
		font-weight:bold;
	}
	
	&:hover {
		background:rbga(0,0,0,0.2);
	}

`
export default Login;



