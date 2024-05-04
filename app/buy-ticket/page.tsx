import Link from "next/link";

export default function Page() {
    return (
        <div className="grid h-full">
            <form className="w-full max-w-md space-y-6 place-self-center">
                <div>
                    <label htmlFor="carName" className="block text-sm font-medium text-gray-700">Название
                        транспортного средства</label>
                    <div className="mt-1">
                        <input id="carName" name="carName" type="text" autoComplete="carName" required
                               className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                    </div>
                </div>

                <div>
                    <label htmlFor="carNumber" className="block text-sm font-medium text-gray-700">Номер
                        транспортного средства</label>
                    <div className="mt-1">
                        <input id="carNumber" name="carNumber" type="text" autoComplete="carNumber" required
                               className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                    </div>
                </div>

                <div>
                    <label htmlFor="width" className="block text-sm font-medium text-gray-700">Тип транспортного
                        средства</label>
                    <div className="mt-1">
                        <select id="width" name="width" autoComplete="width" required
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option>Легковой автомобиль</option>
                            <option>Мотоцикл</option>
                            <option>Грузовик</option>
                            <option>Фура</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label htmlFor="length" className="block text-sm font-medium text-gray-700">Длина транспортного
                        средства</label>
                    <div className="mt-1">
                        <input id="length" name="length" type="number" autoComplete="length" required
                               className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                    </div>
                </div>

                <div>
                    <label htmlFor="width" className="block text-sm font-medium text-gray-700">Ширина транспортного
                        средства</label>
                    <div className="mt-1">
                        <input id="width" name="width" type="number" autoComplete="width" required
                               className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                    </div>
                </div>

                <div>
                    <button type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">К
                        оплате
                    </button>
                </div>
            </form>

            <Link
                href={'/'}
                type="button"
                data-twe-ripple-init=""
                data-twe-ripple-color="light"
                className="absolute flex items-center gap-5 self-end rounded-lg bg-cyan-800 m-3 p-6 text-2xl font-medium text-white transition-colors hover:bg-cyan-700"
            >
                <span>Назад</span>
            </Link>
        </div>

    )
}