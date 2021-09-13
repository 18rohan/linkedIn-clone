import styled from 'styled-components';

// Import Packages
import Sidebar from './Sidebar.component';


const LeftSide = () => {
	 return (
	 	<Container>
	 		<Sidebar/>

	 	</Container>
	 	);
}
const Container = styled.div`
	grid-area:leftside;
	

`
export default LeftSide;