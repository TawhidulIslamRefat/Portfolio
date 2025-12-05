import React from 'react';

const SkillCard = ({ name, percentage, icon, colorClass }) => (
    <div className="bg-white/50 dark:bg-slate-800/50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-slate-700 flex flex-col items-center text-center">
        <img alt={`${name} logo`} className="h-12 w-12 mb-4" src={icon} />
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">{name}</h3>
        <div className="relative w-24 h-24">
            <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle className="text-gray-200 dark:text-slate-700" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeWidth="8"></circle>
                <circle
                    class={`text-primary skill-circle ${colorClass}`}
                    cx="50"
                    cy="50"
                    fill="transparent"
                    r="40"
                    stroke="currentColor"
                    strokeDasharray="251.2"
                    strokeDashoffset={`calc(251.2 - (251.2 * ${percentage}) / 100)`}
                    strokeLinecap="round"
                    strokeWidth="8"
                ></circle>
            </svg>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-semibold text-gray-900 dark:text-white">
                {percentage}%
            </span>
        </div>
    </div>
);

const Skills = () => {
    const frontendSkills = [
        { name: 'JavaScript (ES6+)', percentage: 96, icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1_OE8HrOoZ754WvqXpz1UaWiPiIq3XMsjMHsV06SvzwCG46Ul5khNwed7o4yMoplIz8WLAdiCPk6G3cjoHyXPUqqjtIH69fU2UuOtBwVxd8_pxCvWSN5_nC-wAe7O0oCzFppt3n6bfJkfNJTknsl-zvw9m2zWTxekttr973n4GAZg1UkQWWAvFagyL0m0_vA_rQclsrzUQLeIAKJAA_SsHVEiUpj3b15Lxh4PDu6WYqDN97YC263I9uheWigWC9qeRkMix_JghC2y' },
        { name: 'React.js', percentage: 92, icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyCPXNjO8SX8W_VU5MPveT_AWHSD2GjXBEpqUsW9oEHSN4ZMcL2hntzJvy2FaoLOky8-r74AcfcCdc1DRlfMHI87f7Wj-kGuVYz4UBFHrSX6RLbVpVwD7c_lPgJdlEtwBintq4d1BL66ul395olyWKkKhnOW_j6SNWY-UAkqy3xCatVtm5dUkzD3tQoSzl4dI0Ph3BL-zAUsP3b-YERnZFK1pzGem3Ig1rnCaDJuN7A_HMIrsMQ-uXQwg-ZVVe2I6aIefCa0WYnD7H' },
        { name: 'Tailwind CSS', percentage: 90, icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAyoVmadGBOkFXcqSNO2LLIAfQS9RIvuyNP9wenSbaFCzhiP6upXPqS-h4GnCnUST_OnzOxBIrtMVOCNOt1WHI4bHEr0iODOWRxBcsrLPG-X-nMbo9zCnFqRKauU8TjOVy_676YVTfOnTzI63gLdX7UsBeq3vosqit63sqMhYkk0H7xjP8sYLP2ExN7EJPVAMXANAWI6waf8PlaOKINL476IyyPgXsmoOfPi_8ixgZvHn8L0LNvvGF1uVT7kU_q_dsMdMPHsZ4p7Tx' },
        { name: 'HTML5', percentage: 95, icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3-xtmwP9NByWmzOZADTzp3NzirT2mzm_zY5a5EfT1qb-siyprsgi-qnN_O-94bI98CJxr5SC7xKMLEu-Fh8OATVScXhuzo5sHPgM3anFetSHILQe3oVkfYbWixd5ZAEpC4eNjt4Pd6NMHr8xCI6QHr7dVoKLf1JTHX7_x0wq-4uZV7PYElZa0OloD59b_pmahM0I4x-HQrRorT3S82qI44MzMWc7u1p7XyJydcg7jzjahjxsRvV-no4x1DiaeLLfJ3udOu44nHCiL' },
        { name: 'CSS3', percentage: 93, icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArR9GCn2s6S5bvd8IYsTmfxCNp3IqDAaoqKVvgChMWAmL1oadh-cp7YC9-u-SB_MteZdsJSMuNwQhLJssXBynoZXTQ_-IzvUzg0AcuPlGngwPXTun_yfpny6vEey2yBbMsVHm9-uUwepydZUpRVv7BAN-4N0WnEgHzP3zH2lUhZAFzFTbo_ZJ6hJMGySJIRfnnOSQD6eY6UKw0wFLiAsaq2fVtmkwfkfDzPH3BpFv75tHlKIrGmXliob4as2K313ibqqrwzAvAr6RE' },
    ];

    const backendSkills = [
        { name: 'Node.js', percentage: 87, icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCl_VH7VT6gCDQjuRQdzpLy_cF9NiIrnyLRCo06CY9bY2lJTNHddsKlaijC8-3IcUcSbAxzVE924CbbmyRXV3tWVwjUm1iGjkHIs0gV0WNr8x3Vds4NuNeOrh9CIoNeQO_Od_773zotApPK2nCJSKr1CYDp837j4E92JpP-G_aMxrUTsiDKSiMIBLZPnPTFC50fL87uwd8rF3RwNWWhM_SZNRL-l7_n81mX3UiVHvpCu7gy1a4-ComI_yh4FbEK-rTxh7e-SD3H2lBX' },
        { name: 'Express.js', percentage: 85, icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCwmoKRLPHKKiNr6CMR-i8WRq0SGHaSDQAFiVAZfphnEfyv1oNobgXsm58HX9en6N0eFlBcRCpUAt4QtbqfRnr_MjlKNBwLmX-dzQhZLPDyWpR-lgEsbU9M1xxfcvtc6DPlsq_-2Q7b9JseWtS0X7up8NA_egz9UrLeYb2a3jjoUlHY2qiweAYQof0gElFG-_OkPGyTHlMC3kC5K58q25TTWwWxwTBKsTScloEqhAeCJ_NSvi0Eh8jk5Qjv1bsflc33BBjR6ME3jSU' },
    ];

    const databaseSkills = [
        { name: 'MongoDB', percentage: 85, icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2ry_RPV_eRUdVRt45-iyw8Ln7HvDeNQHjGioYTt25Tdrz80l0JOf-Dcok8H0fOEOdeSQVwn2z8BYO5MCYYTYCLDGHRTKDnwVW_U4PHY57MaEvtVB1Aqu9aDFg4p5cmbEljxKzwlPqkrRofAMdn72k0K6NdUbsBEbTjzldEXLzHoReO-S3BdViWRwNR0mrXl7mLNwwNF1rAzne4dUW6k96yNDkbj2wCnEKzv5xuG467MJDejcqpuD6b3s2lvxYgFjJnFHcM1gVzZ0F' },
    ];

    const toolSkills = [
        { name: 'Git & GitHub', percentage: 90, icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASdYi9OaLHD8fWcnywFtPxMRSzEZXJDHEX2ZWB_8C5_NvsluascV8gMOo092XVmg8VHaugeXs3aRDZLK3C6y6sNpSsvnvSvQd54H_TKleHXaxz2B9_t3fSbjDnV1Dau1IgAUU11qWGlZBrNxOlPJYfD_JA2h89IFVuC3IOK0WkNMtZebbfZj98Oh13sRQVGuLuFnUGy0xTDb7755zFcVTBf7o0KZIiWQpCmv3IBsbOWSNN_KSFbdFQVQT6TqQQxhqYop591G-spiwJ' },
        { name: 'VS Code', percentage: 90, icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcQ3V7fXiavEHG4qrRqmLj2cHfVv4orHSNNKGMd_iGGWkP0UcsYbMUC9mXB-M3SejrOCEp4ZM2ZcjyONH7Jt1XZANkj69gBdtdE1Q6ecSBcED67V_T0s-oFBhmvJ2MBCsnqVtUMOzV2nkgKf1LYvWnLY2H4J51J7iZrPfAyxj9CTQdoNQrpZZrDY-cEZATOx1Cl8POPHnMQ5BPSWZKfRrqJIuyQpm_GwmxFalNyz4CksY9oeu7MYBNuZsrFxRVn_XJRnmMlb-zgYZG' },
    ];

    return (
        <section className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200 antialiased">
            <div className="container mx-auto px-4 py-16 sm:py-24">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                        Skills & Technologies
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        Technologies and skills I use to build amazing products
                    </p>
                </div>
                <div className="space-y-16">
                    <div>
                        <div className="flex items-center mb-6">
                            <div className="w-8 h-1 bg-primary rounded-full"></div>
                            <h2 className="ml-4 text-2xl font-semibold text-gray-900 dark:text-white">Frontend</h2>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {frontendSkills.map((skill) => (
                                <SkillCard key={skill.name} {...skill} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center mb-6">
                            <div className="w-8 h-1 bg-primary rounded-full"></div>
                            <h2 className="ml-4 text-2xl font-semibold text-gray-900 dark:text-white">Backend</h2>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {backendSkills.map((skill) => (
                                <SkillCard key={skill.name} {...skill} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center mb-6">
                            <div className="w-8 h-1 bg-primary rounded-full"></div>
                            <h2 className="ml-4 text-2xl font-semibold text-gray-900 dark:text-white">Database</h2>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {databaseSkills.map((skill) => (
                                <SkillCard key={skill.name} {...skill} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center mb-6">
                            <div className="w-8 h-1 bg-primary rounded-full"></div>
                            <h2 className="ml-4 text-2xl font-semibold text-gray-900 dark:text-white">Tools</h2>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {toolSkills.map((skill) => (
                                <SkillCard key={skill.name} {...skill} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
