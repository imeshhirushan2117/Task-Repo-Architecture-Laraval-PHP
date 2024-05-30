import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { FormEventHandler, useState } from "react";
import { log } from "console";

export default function Create({ auth, categories}: any) {
    const [aleart, setAleart] = useState(false);

    console.log(categories); //lode select box


    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        description: "",
        price: "",
        // category_id: categories.name,
        status: "null",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        setAleart(true);
        setTimeout(() => {
             post(route("products.store"));
        }, 1000);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Products Create
                    </h2>

                    <Link
                        className="bg-yellow-500 text-black px-6 py-2 rounded-lg duration-300 ease-in-out transition-all hover:bg-yellow-400"
                        href={route("product.index")}
                    >
                        Home
                    </Link>
                </div>
            }
        >
            <Head title="Product Create" />

            <div className="p-5">
                {aleart && (
                    <div
                        className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                        role="alert"
                    >
                        <svg
                            className="flex-shrink-0 inline w-4 h-4 me-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="sr-only">Info</span>
                        <div>
                            <span className="font-medium">
                                Product Save Success!
                            </span>
                        </div>
                    </div>
                )}
            </div>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={submit} className="p-6 space-y-4">
                                <div>
                                    <InputLabel
                                        htmlFor="name"
                                        value="Product Name"
                                    />

                                    <TextInput
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        autoComplete="name"
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="name"
                                        value="Description"
                                    />

                                    <TextInput
                                        id="description"
                                        name="description"
                                        value={data.description}
                                        className="mt-1 block w-full"
                                        autoComplete="description"
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel htmlFor="name" value="Price" />

                                    <TextInput
                                        id="price"
                                        name="price"
                                        value={data.price}
                                        className="mt-1 block w-full"
                                        autoComplete="price"
                                        placeholder="Rs."
                                        onChange={(e) =>
                                            setData("price", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>
                              
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="category_id"
                                        value="Category"
                                    />
                                    <select
                                        id="category_id"
                                        name="category_id"
                                        // value={data.category_id}
                                        className="mt-1 block w-full"
                                        // onChange={(e) =>
                                        //     setData(
                                        //         "category_id",
                                        //         e.target.value
                                        //     )
                                        // }
                                        required
                                    >
                                     <option selected >Select Category</option>
                                        {categories &&
                                            categories.map((category: any) => (
                                                <option
                                                    key={category.id}
                                                    value={category.id}
                                                >
                                                    {category.name}
                                                </option>
                                            ))}
                                    </select>
                                    <InputError
                                        // message={errors.category_id}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="status"
                                        value="Status"
                                    />
                                    <select
                                        id="status"
                                        name="status"
                                        value={data.status}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("status", e.target.value)
                                        }
                                        required
                                    >
                                        <option selected value='draft'>Select Status</option>
                                        <option  value='Draft'>Draft</option>
                                        <option  value='Active'>Active</option>
                                        <option  value='Inactive'>Inactive</option>
                                    </select>
                                    <InputError
                                        message={errors.status}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <button className="bg-green-600 duration-300 ease-in-out transition-all text-white px-6 py-2 rounded-lg hover:bg-green-700">
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
