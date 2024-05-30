import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { FormEventHandler, useEffect, useState } from "react";
import { get } from "http";
import { log } from "console";

export default function Create({ auth , categories}: PageProps) {

    console.log("Categories:", JSON.stringify(categories, null, 2));
    
    const [aleart, setAleart] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        description: "",
    });

    const edit: FormEventHandler = (e) => {
        e.preventDefault();
        setAleart(true);
        setTimeout(() => {
            //   post(route("category.update" , categories.id));
        }, 2000);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Categories Edit
                    </h2>

                    <Link
                        className="bg-yellow-500 text-black px-6 py-2 rounded-lg duration-300 ease-in-out transition-all hover:bg-yellow-400"
                        href={route("category.index")}
                    >
                        Back
                    </Link>
                </div>
            }
        >
            <Head title="Catagery Create" />

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
                                Catagory Update Success!
                            </span>
                        </div>
                    </div>
                )}
            </div>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={edit} className="p-6 space-y-4">
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
                                    <button className="bg-green-600 duration-300 ease-in-out transition-all text-white px-6 py-2 rounded-lg hover:bg-green-700">
                                        Edit
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
