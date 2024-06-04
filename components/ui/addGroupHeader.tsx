import { PlusSquare } from "lucide-react"

export const AddGroupHeader = () => {
    return (
            <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg mx-6">
            <div className="flex items-center justify-between p-4 space-y-3 sm:space-y-0 sm:space-x-4">
                <div>
                <h5 className="mr-3 font-semibold dark:text-white">Create your Study Group</h5>
                <p className="text-gray-500 dark:text-gray-400">Invite your friends and coursemates</p>
                </div>
                <button type="button"
                        className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                <PlusSquare />
                Create
                </button>
            </div>
            </div>
 )
}
