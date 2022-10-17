import Spinner from '../components/spinner/Spinner';
import ErrorMessage from '../components/errorMessage/ErrorMessage';
import Skeleton from '../components/skeleton/Skeleton';


const setContent = (process,Component,data) => {
    switch (process) {
        case 'loading':
            return <Spinner/>;
        case 'error':
            return <ErrorMessage/>;
        case 'success':
            return <Component data={data}/>;
        case 'waiting':
            return <Skeleton/>;
        default:
            throw new Error(`Unknown process: ${process}`);
        }
}
export default setContent;