import Link from 'next/link';
import Image from 'next/image';
import styles from './background.module.css'


export default function Page() {
    return (
        <>
            <header>
                <nav
                    className="absolute flex w-full flex-wrap items-center justify-between bg-sky-950 p-5 shadow-dark-mild"
                    data-twe-navbar-ref="">
                    <div className="flex w-full flex-wrap items-center justify-between px-3">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" stroke="white"
                                      d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288"/>
                            </svg>
                        </div>

                        <button
                            className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                            type="button"
                            data-twe-collapse-init=""
                            data-twe-target="#navbarSupportedContent4"
                            aria-controls="navbarSupportedContent4"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                          <span
                              className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor">
                              <path
                                  fillRule="evenodd"
                                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                  clipRule="evenodd"/>
                            </svg>
                          </span>
                        </button>

                        <div
                            className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
                            id="navbarSupportedContent4"
                            data-twe-collapse-item="">
                            <ul
                                className="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row"
                                data-twe-navbar-nav-ref="">
                            </ul>

                        </div>
                    </div>
                </nav>
            </header>

            <main className="flex min-h-full flex-col pt-14">
                <div className={styles.bgWrap}>
                    <Image
                        alt="Mountains"
                        src={'/ferry_boat.png'}
                        quality={100}
                        fill
                        sizes="100vw"
                        style={{
                            objectFit: "cover", filter: "brightness(.8) contrast(.8)"
                        }}
                    />
                </div>
                <div className="m-4 flex grow flex-col gap-4 justify-center">
                    <div
                        className="flex flex-col justify-center gap-6 rounded-lg bg-gray-100 px-6 py-8 md:w-2/5 md:px-20">
                        <p
                            className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}
                        >
                            <strong>Приветствуем на паромной переправе.</strong> <br/> Купите билет, чтобы воспользоваться
                            переправой
                            или войдите в систему
                        </p>
                        <div className="flex justify-around gap-5">

                            <Link
                                href={"/buy-ticket"}
                                className="flex items-center gap-5 self-start rounded-lg bg-blue-500 p-6 text-2xl font-medium text-white transition-colors hover:bg-blue-400"
                            >
                                <span>Купить билет</span>
                            </Link>
                            <Link
                                href={'/login'}
                                type="button"
                                data-twe-ripple-init=""
                                data-twe-ripple-color="light"
                                className="flex items-center gap-5 self-start rounded-lg bg-cyan-800 p-6 text-2xl font-medium text-white transition-colors hover:bg-cyan-700"
                            >
                                <span>Войти в систему</span>
                            </Link>
                        </div>
                    </div>
                    {/*<div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">*/}
                    {/*    /!* Add Hero Images Here *!/*/}

                    {/*</div>*/}
                </div>
            </main>
        </>
    );
}
