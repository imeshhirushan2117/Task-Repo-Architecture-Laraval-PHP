import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { PageProps } from "@/types";

export default function Index({ auth  }: PageProps) {



    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Product
                    </h2>

                    <Link
                        href={route("product.create")}
                        className="bg-green-800 text-white px-6 py-2 rounded-lg duration-300 ease-in-out transition-all hover:bg-green-700"
                    >
                        Product +
                    </Link>
                </div>
            }
        >
            <Head title="Product" />

            <div className="py-12">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Description
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Food
                                </th>
                                <td className="px-6 py-4">Lanka</td>
                                <td className="px-6 py-4">600</td>
                                <td className="px-6 py-4">Food</td>
                                <td className="px-6 py-4">inactive</td>
                                {/* <td className="flex items-center px-6 py-4">
                                    <a
                                        href={route("category.edit")}
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        Edit
                                    </a>
                                    <a
                                        href="#"
                                        className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                                    >
                                        Remove
                                    </a>
                                </td> */}
                                <td className="flex items-center px-6 py-4">
                                    <button
                                        // onClick={() => edit(category.id)}
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        // onClick={() => remove(category.id)}
                                        className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
