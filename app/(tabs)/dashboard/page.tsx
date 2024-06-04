import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Dashboard () {
    interface Task {
        name: string;
        dueDate: string;
        backgroundColor: string;
        group: string;
    }

    const tasks: Task[] = [
        {
            name: "Task 1",
            dueDate: "2022-12-31",
            backgroundColor: "blue",
            group: "Introduction to Programming Study Group"
        },
        {
            name: "Task 2",
            dueDate: "2022-11-30",
            backgroundColor: "green",
            group: "Data Structures and Algorithms Study Group"
        },
        {
            name: "Task 3",
            dueDate: "2022-10-31",
            backgroundColor: "red",
            group: "Web Development Study Group"
        }
    ];
    return (
        <div className='p-6'>
            <div className='flex-col'>
                <h2 className='font-bold mb-2'>My Tasks</h2>
                {tasks.map((task, index) => (
                    <div className='flex justify-between p-4 rounded-3xl shadow-[0px_0px_4px_rgba(0,0,0,0.5)] mb-5' key={index} >
                        <div className={` basis-5 bg-${task.backgroundColor}-600 w-5 h-5 rounded-full`}></div>
                        <div className='basis-3/5'>
                            <h3>{task.name}</h3>
                            <p className='text-xs'>{task.group}</p>
                        </div>
                        <div className='basis-1/4'>{task.dueDate}</div>
                    </div>
                ))}
                <Button className='w-full rounded-full'>
                    Add a new task
                </Button>
            </div>
            <div className='mt-6'>
            <h2 className='font-bold mb-4'>My Groups</h2>
            <div className=' grid grid-cols-2 gap-4'>
                <div>
                    <Image src="" alt="Group 1" />
                    <div>
                        <div>Notifications: 5</div>
                        <div>Members: 10</div>
                    </div>
                </div>
                {/* Group 2 */}
                <div>
                    <Image src="" alt="Group 2" />
                    <div>
                        <div>Notifications: 3</div>
                        <div>Members: 8</div>
                    </div>
                </div>
                {/* Group 3 */}
                <div>
                    <Image src="" alt="Group 3" />
                    <div>
                        <div>Notifications: 2</div>
                        <div>Members: 6</div>
                    </div>
                </div>
                {/* Add more groups here */}
            </div>
            </div>

        </div>
    );
}