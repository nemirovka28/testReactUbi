import ErrorMassage from "./ErrorMessage";
import {Link} from 'react-router-dom';

const Page404 = () => {
    return (
        <div>
            <ErrorMassage/>
            <p style={{'textAlign':'center','fontWeight':'bold','fontSize':'24px'}}>Page doeesn't exist</p>
            <Link style={{'display':'block','textAlign':'center','fontWeight':'bold','fontSize':'24px',
            'marginTop':'30px'}} to="/post">Back to main page</Link>
        </div>
    )
}

export default Page404;