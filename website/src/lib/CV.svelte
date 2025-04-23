<script lang="ts">
	import Tabs from './Tabs.svelte';

	const tabs = [
		{
			title: 'Education',
			value: 'education',
			content: "<div class=\"tab-pane block\" id=\"tab-education\">\n" +
					"                        <div class=\"resume_item resume_work text-md\">\n" +
					"                            <ul\n" +
					"                                    class=\"relative pl-8 space-y-12 before:absolute before:left-4 before:h-full before:w-0.5 before:bg-slate-900 dark:before:bg-slate-50\">\n" +
					"                                <li class=\"relative\">\n" +
					"                                    <!-- Timeline circle -->\n" +
					"                                    <div\n" +
					"                                            class=\"absolute -left-8 flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 dark:bg-slate-50 border-4 border-white dark:border-zinc-800\">\n" +
					"                                        <i class=\"fas fa-graduation-cap text-white dark:text-slate-900 text-sm\"></i>\n" +
					"                                    </div>\n" +
					"                                    <p class=\"font-medium text-primary\">2022 - 2023</p>\n" +
					"                                    <div class=\"mt-2\">\n" +
					"                                        <p class=\"\">ISIMA - Clermont Auvergne University</p>\n" +
					"                                        <p class=\"text-gray-600 dark:text-gray-300\">Master ICS in Data\n" +
					"                                            Sciences</p>\n" +
					"                                    </div>\n" +
					"                                </li>\n" +
					"                                <li class=\"relative\">\n" +
					"                                    <!-- Timeline circle -->\n" +
					"                                    <div\n" +
					"                                            class=\"absolute -left-8 flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 dark:bg-slate-50 border-4 border-white dark:border-zinc-800\">\n" +
					"                                        <i class=\"fas fa-graduation-cap text-white dark:text-slate-900 text-sm\"></i>\n" +
					"                                    </div>\n" +
					"                                    <p class=\" font-medium text-primary\">2021 - 2022</p>\n" +
					"                                    <div class=\"mt-2\">\n" +
					"                                        <p>Université de Yaoundé I\n" +
					"                                        </p>\n" +
					"                                        <p class=\"text-gray-600 dark:text-gray-300\">Master 1 Data Sciences\n" +
					"                                        </p>\n" +
					"                                    </div>\n" +
					"                                </li>\n" +
					"                                <li class=\"relative\">\n" +
					"                                    <!-- Timeline circle -->\n" +
					"                                    <div\n" +
					"                                            class=\"absolute -left-8 flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 dark:bg-slate-50 border-4 border-white dark:border-zinc-800\">\n" +
					"                                        <i class=\"fas fa-graduation-cap text-white dark:text-slate-900 text-sm\"></i>\n" +
					"                                    </div>\n" +
					"                                    <p class=\"font-medium text-primary\">2018 - 2021</p>\n" +
					"                                    <div class=\"mt-2\">\n" +
					"                                        <p>Université de Yaoundé I\n" +
					"                                        </p>\n" +
					"                                        <p class=\"text-gray-600 dark:text-gray-300\">Bachelor's degree in\n" +
					"                                            software\n" +
					"                                            engineering</p>\n" +
					"                                    </div>\n" +
					"                                </li>\n" +
					"                            </ul>\n" +
					"                        </div>\n" +
					"                    </div>"
		},
		{
			title: 'Skills',
			value: 'skill',
			short_description: 'Tools and framework i\'m working with',
			content: '<div id="tab-skills m-auto">\n' +
					'                        <div class="flex flex-col md:flex-row md:justify-between md:gap-8">\n' +
					'                            <div class="md:w-1/2">\n' +
					'                                <div class="mb-4">\n' +
					'                                    <div class="flex justify-between mb-1">\n' +
					'                                    <span class="text-lg font-medium dark:text-white">Python <i\n' +
					'                                            class="fa-brands fa-python"></i></span>\n' +
					'                                        <span class="text-sm font-medium text-primary dark:text-primary">4 years</span>\n' +
					'                                    </div>\n' +
					'                                    <div class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700">\n' +
					'                                        <div class="h-4 bg-slate-900 dark:bg-slate-50 rounded-md w-[92%]"></div>\n' +
					'                                    </div>\n' +
					'                                </div>\n' +
					'\n' +
					'                                <div class="mb-4">\n' +
					'                                    <div class="flex justify-between mb-1">\n' +
					'                                    <span class="text-lg font-medium dark:text-white ">Django<img class="inline"\n' +
					'                                                                                                  src="/images/icons/djangoproject-svgrepo-com (1).svg"\n' +
					'                                                                                                  alt="django"\n' +
					'                                                                                                  width="15.76"\n' +
					'                                                                                                  height="18.64"></span>\n' +
					'                                        <span class="text-sm font-medium text-primary dark:text-primary">3 year</span>\n' +
					'                                    </div>\n' +
					'                                    <div class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700">\n' +
					'                                        <div class="h-4 bg-slate-900 dark:bg-slate-50 rounded-md w-[80%]"></div>\n' +
					'                                    </div>\n' +
					'                                </div>\n' +
					'\n' +
					'                                <div class="mb-4">\n' +
					'                                    <div class="flex justify-between mb-1">\n' +
					'                          <span class="text-lg font-medium dark:text-white ">Git <i class="fa-brands fa-git-alt"></i> | Github <i\n' +
					'                                  class="fa-brands fa-github"></i> |\n' +
					'                            Trello <i class="fa-brands fa-trello"></i></span>\n' +
					'                                        <span class="text-sm font-medium text-primary dark:text-primary">4 years</span>\n' +
					'                                    </div>\n' +
					'                                    <div class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700">\n' +
					'                                        <div class="h-4 bg-slate-900 dark:bg-slate-50 rounded-md w-[92%]"></div>\n' +
					'                                    </div>\n' +
					'                                </div>\n' +
					'\n' +
					'                                <div class="mb-4">\n' +
					'                                    <div class="flex justify-between mb-1">\n' +
					'                          <span class="text-lg font-medium dark:text-white ">HTML <i class="fa-brands fa-html5"></i> | CSS <i\n' +
					'                                  class="fa-brands fa-css"></i> | JavaScript <i class="fa-brands fa-js"></i> |\n' +
					'                            Bootstrap <i class="fa-brands fa-bootstrap"></i></span>\n' +
					'                                        <span class="text-sm font-medium text-primary dark:text-primary">5 years</span>\n' +
					'                                    </div>\n' +
					'                                    <div class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700">\n' +
					'                                        <div class="h-4 bg-slate-900 dark:bg-slate-50 rounded-md w-[80%]"></div>\n' +
					'                                    </div>\n' +
					'                                </div>\n' +
					'\n' +
					'                                <div class="mb-4">\n' +
					'                                    <div class="flex justify-between mb-1">\n' +
					'                                    <span class="text-lg font-medium dark:text-white ">Docker <i\n' +
					'                                            class="fa-brands fa-docker"></i> | Celery <img class="inline"\n' +
					'                                                                                           src="/images/icons/celery-svgrepo-com.svg"\n' +
					'                                                                                           alt="celery" width="15.76"\n' +
					'                                                                                           height="18.64"></span>\n' +
					'                                        <span class="text-sm font-medium text-primary dark:text-primary">4 years</span>\n' +
					'                                    </div>\n' +
					'                                    <div class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700">\n' +
					'                                        <div class="h-4 bg-slate-900 dark:bg-slate-50 rounded-md "></div>\n' +
					'                                    </div>\n' +
					'                                </div>\n' +
					'                            </div>\n' +
					'\n' +
					'                            <div class="md:w-1/2">\n' +
					'                                <div class="mb-4">\n' +
					'                                    <div class="flex justify-between mb-1">\n' +
					'                                    <span class="text-lg font-medium dark:text-white ">PyQT | QT <img class="inline"\n' +
					'                                                                                                      src="/images/icons/qt-svgrepo-com.svg"\n' +
					'                                                                                                      alt="qt"\n' +
					'                                                                                                      width="15.76"\n' +
					'                                                                                                      height="18.64"></span>\n' +
					'                                        <span class="text-sm font-medium text-primary dark:text-primary">1 year</span>\n' +
					'                                    </div>\n' +
					'                                    <div class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700">\n' +
					'                                        <div class="h-4 bg-slate-900 dark:bg-slate-50 rounded-md "></div>\n' +
					'                                    </div>\n' +
					'                                </div>\n' +
					'\n' +
					'                                <div class="mb-4">\n' +
					'                                    <div class="flex justify-between mb-1">\n' +
					'                                    <span class="text-lg font-medium dark:text-white ">Postgres<img class="inline"\n' +
					'                                                                                                    src="/images/icons/Postgresql_elephant.svg"\n' +
					'                                                                                                    alt="postgres"\n' +
					'                                                                                                    width="15.76"\n' +
					'                                                                                                    height="18.64"> | MySQL <img\n' +
					'                                            class="inline" src="/images/icons/mysql-svgrepo-com.svg" alt="mysql"\n' +
					'                                            width="15.76" height="18.64"> | Redis <img class="inline"\n' +
					'                                                                                       src="/images/icons/redis-svgrepo-com.svg"\n' +
					'                                                                                       alt="redis" width="15.76"\n' +
					'                                                                                       height="18.64"></span>\n' +
					'                                        <span class="text-sm font-medium text-primary dark:text-primary">3 years</span>\n' +
					'                                    </div>\n' +
					'                                    <div class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700">\n' +
					'                                        <div class="h-4 bg-slate-900 dark:bg-slate-50 rounded-md"\n' +
					'                                             style="width: 80%"></div>\n' +
					'                                    </div>\n' +
					'                                </div>\n' +
					'\n' +
					'                                <div class="mb-4">\n' +
					'                                    <div class="flex justify-between mb-1">\n' +
					'                          <span class="text-lg font-medium dark:text-white ">PyTorch <img class="inline"\n' +
					'                                                                                          src="/images/icons/pytorch-svgrepo-com.svg"\n' +
					'                                                                                          alt="torch" width="15.76"\n' +
					'                                                                                          height="18.64"> |\n' +
					'                            TensorFlow <img class="inline" src="/images/icons/tensorflow-svgrepo-com.svg" alt="tensor"\n' +
					'                                            width="15.76" height="18.64">| Scikit Learn </span>\n' +
					'                                        <span class="text-sm font-medium text-primary dark:text-primary">2 years</span>\n' +
					'                                    </div>\n' +
					'                                    <div class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700">\n' +
					'                                        <div class="h-4 bg-slate-900 dark:bg-slate-50 rounded-md"\n' +
					'                                             style="width: 60%"></div>\n' +
					'                                    </div>\n' +
					'                                </div>\n' +
					'\n' +
					'                                <div class="mb-4">\n' +
					'                                    <div class="flex justify-between mb-1">\n' +
					'                                        <span class="text-lg font-medium dark:text-white ">Time series analysis</span>\n' +
					'                                        <span class="text-sm font-medium text-primary dark:text-primary">2 years</span>\n' +
					'                                    </div>\n' +
					'                                    <div class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700">\n' +
					'                                        <div class="h-4 bg-slate-900 dark:bg-slate-50 rounded-md"\n' +
					'                                             style="width: 60%"></div>\n' +
					'                                    </div>\n' +
					'                                </div>\n' +
					'\n' +
					'                                <div class="mb-4">\n' +
					'                                    <div class="flex justify-between mb-1">\n' +
					'                          <span class="text-lg font-medium dark:text-white ">REST API\n' +
					'                            Design</span>\n' +
					'                                        <span class="text-sm font-medium text-primary dark:text-primary">2 years</span>\n' +
					'                                    </div>\n' +
					'                                    <div class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700">\n' +
					'                                        <div class="h-4 bg-slate-900 dark:bg-slate-50 rounded-md"\n' +
					'                                             style="width: 40%"></div>\n' +
					'                                    </div>\n' +
					'                                </div>\n' +
					'                            </div>\n' +
					'                        </div>\n' +
					'                    </div>'
		},
		{
			title: 'Experience',
			value: 'experience',
			short_description: 'Explore my work history and topics covered.',
			content: '<div id="tab-experience" class="mb-5">\n' +
					'                        <div class="resume_item resume_work experience">\n' +
					'                            <ul\n' +
					'                                    class="relative pl-8 space-y-12 before:absolute before:left-4 before:h-full before:w-0.5 before:bg-slate-900 dark:before:bg-white">\n' +
					'\n' +
					'                                <li class="relative">\n' +
					'                                    <!-- Timeline circle -->\n' +
					'                                    <div\n' +
					'                                            class="absolute -left-8 flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 dark:bg-slate-50 border-4 border-white dark:border-zinc-800">\n' +
					'                                        <i class="fas fa-briefcase text-white dark:text-slate-900 text-sm"></i>\n' +
					'                                    </div>\n' +
					'                                    <div class="flex items-start gap-4">\n' +
					'                                        <div class="flex flex-col">\n' +
					'                                            <div\n' +
					'                                                    class="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700 bg-white  flex items-center justify-center">\n' +
					'                                                <img src="https://imt-nord-europe.fr/wp-content/uploads/2023/02/Logo_black_IMT_RF_bis.png"\n' +
					'                                                     alt="LIMOS Logo" class="max-w-full max-h-full object-contain">\n' +
					'                                            </div>\n' +
					'                                            <div\n' +
					'                                                    class="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700 bg-white  flex items-center justify-center">\n' +
					'                                                <img\n' +
					'                                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Logo_Universit%C3%A9_Clermont-Auvergne_%28partenariat_Wikim%C3%A9dia%29.png/225px-Logo_Universit%C3%A9_Clermont-Auvergne_%28partenariat_Wikim%C3%A9dia%29.png"\n' +
					'                                                        alt="LIMOS Logo" class="max-w-full max-h-full object-contain">\n' +
					'                                            </div>\n' +
					'                                        </div>\n' +
					'\n' +
					'                                        <div class="flex-grow">\n' +
					'                                            <p class="font-medium text-primary">November 2023 - Now</p>\n' +
					'\n' +
					'                                            <div class="mt-2">\n' +
					'                                                <p class="text-xl font-semibold">\n' +
					'                                                    <a href="https://limos.fr/" target="_blank">Machine Learning Junior\n' +
					'                                                        Researcher</a>\n' +
					'                                                </p>\n' +
					'                                                <p class="text-gray-600 dark:text-gray-300">XAI for time\n' +
					'                                                    series classification</p>\n' +
					'                                                <p class="font-medium text-slate-900 dark:text-slate-50 hover:underline">\n' +
					'                                                    <a href="https://www.infolab-tech.com/" target="_blank">IMT Nord\n' +
					'                                                        Europe\n' +
					'                                                        & Clermont\n' +
					'                                                        Auvergne\n' +
					'                                                        University</a>\n' +
					'                                                </p>\n' +
					'                                            </div>\n' +
					'                                        </div>\n' +
					'                                    </div>\n' +
					'                                </li>\n' +
					'                                <li class="relative">\n' +
					'                                    <!-- Timeline circle -->\n' +
					'                                    <div\n' +
					'                                            class="absolute -left-8 flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 dark:bg-slate-50 border-4 border-white dark:border-zinc-800">\n' +
					'                                        <i class="fas fa-briefcase dark:text-slate-900 text-white text-sm"></i>\n' +
					'                                    </div>\n' +
					'                                    <div class="flex items-start gap-4">\n' +
					'                                        <div\n' +
					'                                                class="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700 bg-white  flex items-center justify-center">\n' +
					'                                            <img src="https://limos.fr/static/limos/limos.png" alt="LIMOS Logo"\n' +
					'                                                 class="max-w-full max-h-full object-contain">\n' +
					'                                        </div>\n' +
					'                                        <div class="flex-grow">\n' +
					'                                            <p class="font-medium text-primary">March 2023 - September 2023\n' +
					'                                            </p>\n' +
					'                                            <div class="mt-2">\n' +
					'                                                <p class="text-xl font-semibold">\n' +
					'                                                    <a href="https://limos.fr/" target="_blank">Machine Learning Junior\n' +
					'                                                        Researcher</a>\n' +
					'                                                </p>\n' +
					'                                                <p class="text-gray-600 dark:text-gray-300">Multivariate\n' +
					'                                                    datastream and\n' +
					'                                                    anomaly detection by trying to detect concept drift</p>\n' +
					'                                                <p class="font-medium text-slate-900 dark:text-slate-50 hover:underline">\n' +
					'                                                    <a href="https://www.infolab-tech.com/" target="_blank">LIMOS</a>\n' +
					'                                                </p>\n' +
					'                                            </div>\n' +
					'                                        </div>\n' +
					'                                    </div>\n' +
					'                                </li>\n' +
					'                                <li class="relative">\n' +
					'                                    <!-- Timeline circle -->\n' +
					'                                    <div\n' +
					'                                            class="absolute -left-8 flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 dark:bg-slate-50  border-4 border-white  ">\n' +
					'                                        <i class="fas fa-briefcase dark:text-slate-900 text-white text-sm"></i>\n' +
					'                                    </div>\n' +
					'                                    <div class="flex items-start gap-4">\n' +
					'                                        <div\n' +
					'                                                class="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700 bg-white flex items-center justify-center">\n' +
					'                                            <img src="https://infolab-tech.com/static/images/logo.png"\n' +
					'                                                 alt="InfoLab Logo"\n' +
					'                                                 class="max-w-full max-h-full object-contain">\n' +
					'                                        </div>\n' +
					'                                        <div class="flex-grow">\n' +
					'                                            <p class="font-medium text-primary">August 2021 - 2023</p>\n' +
					'                                            <div class="mt-2">\n' +
					'                                                <p class="text-xl font-semibold">Backend Developer</p>\n' +
					'                                                <p class="font-medium text-slate-900 dark:text-slate-50 hover:underline">\n' +
					'                                                    <a href="https://www.infolab-tech.com/" target="_blank">InfoLab\n' +
					'                                                        Technology</a>\n' +
					'                                                </p>\n' +
					'                                            </div>\n' +
					'                                        </div>\n' +
					'                                    </div>\n' +
					'                                </li>\n' +
					'                                <li class="relative">\n' +
					'                                    <!-- Timeline circle -->\n' +
					'                                    <div\n' +
					'                                            class="absolute -left-8 flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 dark:bg-slate-50 border-4 border-white dark:border-zinc-800">\n' +
					'                                        <i class="fas fa-briefcase dark:text-slate-900 text-white text-sm"></i>\n' +
					'                                    </div>\n' +
					'                                    <div class="flex items-start gap-4">\n' +
					'                                        <div\n' +
					'                                                class="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700 bg-white flex items-center justify-center">\n' +
					'                                            <img\n' +
					'                                                    src="https://media.licdn.com/dms/image/v2/C4E0BAQHpgmhL61A_bA/company-logo_200_200/company-logo_200_200/0/1634770719652?e=1750291200&v=beta&t=uPrGq6zw8k84TJDfQ4Lf5gqYz9QH5x3qkWfxm1vAyLU"\n' +
					'                                                    alt="Gigalitic Logo" class="max-w-full max-h-full object-contain">\n' +
					'                                        </div>\n' +
					'                                        <div class="flex-grow">\n' +
					'                                            <p class="font-medium text-primary">March 2022 - 2023</p>\n' +
					'                                            <div class="mt-2">\n' +
					'                                                <p class="text-xl font-semibold">Backend and Machine\n' +
					'                                                    Learning Developer as Freelance</p>\n' +
					'                                                <p class="font-medium text-slate-900 dark:text-slate-50 hover:underline">\n' +
					'                                                    <a href="https://gigalitic.com/" target="_blank">Gigalitic</a>\n' +
					'                                                </p>\n' +
					'                                            </div>\n' +
					'                                        </div>\n' +
					'                                    </div>\n' +
					'                                </li>\n' +
					'                                <li class="relative">\n' +
					'                                    <!-- Timeline circle -->\n' +
					'                                    <div\n' +
					'                                            class="absolute -left-8 flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 dark:bg-slate-50 border-4 border-white dark:border-zinc-800">\n' +
					'                                        <i class="fas fa-briefcase dark:text-slate-900 text-white text-sm"></i>\n' +
					'                                    </div>\n' +
					'                                    <div class="flex items-start gap-4">\n' +
					'                                        <div\n' +
					'                                                class="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-800 flex items-center justify-center">\n' +
					'                                            <img src="https://www.seeds.cm/img/logo.png" alt="SEED SARL Logo"\n' +
					'                                                 class="max-w-full max-h-full object-contain">\n' +
					'                                        </div>\n' +
					'                                        <div class="flex-grow">\n' +
					'                                            <p class="font-medium text-primary">April 2021 - October 2021\n' +
					'                                            </p>\n' +
					'                                            <div class="mt-2">\n' +
					'                                                <p class="text-xl font-semibold">Assistant Trainer</p>\n' +
					'                                                <p class="font-medium text-slate-900 dark:text-slate-50 hover:underline">\n' +
					'                                                    <a href="https://gigalitic.com/" target="_blank">SEED\n' +
					'                                                        SARL</a>\n' +
					'                                                </p>\n' +
					'                                            </div>\n' +
					'                                        </div>\n' +
					'                                    </div>\n' +
					'                                </li>\n' +
					'                            </ul>\n' +
					'                        </div>\n' +
					'                    </div>'
		},
	];
</script>

<div
	class="relative m-auto mb-24 flex h-[60rem] w-[90vw] max-w-5xl flex-col items-center  justify-start [perspective:2000px] md:h-[50rem] lg:w-[80vw]"
>
	<Tabs
		propTabs={tabs}
		contentClassName="rounded-2xl bg-gray-50 p-10 shadow-lg m-auto border dark:bg-gray-900"

	/>
</div>