import moment from 'moment';
export default function formatDate(data:string){
    return moment(data).format('YYYY-MM-DD')
}