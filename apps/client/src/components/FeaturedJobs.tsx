import moment from 'moment';
import { Link } from 'react-router-dom';
moment.locale();

type JobData = {
    id: number;
    title: string;
    description: string;
    location: string;
    createdAt: string;
    updatedAt: string;
    employerId: number;
    posted: boolean;
    employer: {
        name: string;
    };
};

type FeaturedJobsProps = {
    data: JobData[];
};

const FeaturedJobs: React.FC<FeaturedJobsProps> = ({ data }) => {
    return (
        <>
            {data.map(job => {
                return (
                    <div
                        key={job.id}
                        className='flex bg-opacity-90 flex-col jus items-center justify-center p-4'>
                        <div className='dark:bg-orange-50 lg:max-w-6xl  shadow-xl w-full max-w-4xl flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md'>
                            <div>
                                <span className='text-sky-900 font-bold text-sm'>
                                    {job.employer.name}
                                </span>
                                <h3 className='font-bold mt-px'>{job.title}</h3>
                                <div className='flex items-center gap-3 mt-2'>
                                    <span className='bg-sky-100 text-sky-700 rounded-full px-2 py-1 text-sm'>
                                        Full-time
                                    </span>
                                    <span className='text-slate-600 text-sm flex gap-1 items-center'>
                                        {' '}
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='h-4 w-4'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                            strokeWidth='2'>
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                                            />
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                                            />
                                        </svg>{' '}
                                        {job.location}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <Link
                                    to={`/jobs/${job.id}`}
                                    className='bg-black text-white font-medium px-4 py-1 rounded-md flex gap-1 items-center'>
                                    Apply Now
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='h-4 w-4'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                        strokeWidth='2'>
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M13 7l5 5m0 0l-5 5m5-5H6'
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default FeaturedJobs;
