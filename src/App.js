import React, { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Check, X, Zap, Cpu, TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

export default function EngineeringComparisonDashboard() {
    // Responsive state
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    // Define brand colors
    const colors = {
        electrical: '#00D9FF', // Electric Blue
        computer: '#B644FF',   // Vivid Purple
    };

    // Radar chart data - Qualitative dimensions
    const radarData = [
        { dimension: 'Hardware Focus', electrical: 95, computer: 70 },
        { dimension: 'Software Skills', electrical: 45, computer: 98 },
        { dimension: 'Job Market', electrical: 78, computer: 95 },
        { dimension: 'Salary Growth', electrical: 82, computer: 90 },
        { dimension: 'Innovation Rate', electrical: 75, computer: 95 },
        { dimension: 'Versatility', electrical: 70, computer: 88 }
    ];

    // Bar chart data - Quantitative metrics
    const benchmarkData = [
        { metric: 'Avg Starting Salary (k)', electrical: 72, computer: 85 },
        { metric: 'Job Openings (k)', electrical: 145, computer: 285 },
        { metric: 'Years to Master', electrical: 5, computer: 4 },
        { metric: 'Remote Work %', electrical: 35, computer: 78 },
        { metric: 'Patent Filings', electrical: 890, computer: 1250 }
    ];

    // Feature comparison grid
    const features = [
        { feature: 'Hardware Design', electrical: true, computer: true },
        { feature: 'Software Development', electrical: false, computer: true },
        { feature: 'Circuit Analysis', electrical: true, computer: false },
        { feature: 'AI/ML Development', electrical: false, computer: true },
        { feature: 'Power Systems', electrical: true, computer: false },
        { feature: 'Cloud Computing', electrical: false, computer: true },
        { feature: 'Signal Processing', electrical: true, computer: true },
        { feature: 'IoT Development', electrical: true, computer: true },
        { feature: 'Embedded Systems', electrical: true, computer: true },
        { feature: 'Web Development', electrical: false, computer: true },
        { feature: 'Robotics', electrical: true, computer: true },
        { feature: 'Telecommunications', electrical: true, computer: false }
    ];

    // Use case analysis
    const useCases = [
        {
            persona: 'Career Switchers',
            winner: 'computer',
            reason: 'More accessible entry points, abundant online resources, and faster skill acquisition timeline.',
            icon: <TrendingUp className="w-6 h-6" />
        },
        {
            persona: 'Hardware Enthusiasts',
            winner: 'electrical',
            reason: 'Deep focus on physical systems, circuits, and tangible engineering solutions.',
            icon: <Zap className="w-6 h-6" />
        },
        {
            persona: 'Remote Workers',
            winner: 'computer',
            reason: '78% remote work opportunities vs 35%, with most roles fully distributed.',
            icon: <Users className="w-6 h-6" />
        },
        {
            persona: 'High Earners',
            winner: 'computer',
            reason: 'Higher starting salary ($85k vs $72k) with faster growth trajectory in tech.',
            icon: <DollarSign className="w-6 h-6" />
        },
        {
            persona: 'Manufacturing/Energy',
            winner: 'electrical',
            reason: 'Essential for power generation, distribution, and industrial automation systems.',
            icon: <Cpu className="w-6 h-6" />
        },
        {
            persona: 'Quick Learners',
            winner: 'computer',
            reason: 'Faster mastery timeline (4 years vs 5) with more iterative learning opportunities.',
            icon: <Clock className="w-6 h-6" />
        }
    ];

    // Reveal on scroll component
    // Direct static rendering - no animations
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 text-white p-4 md:p-8 gpu-layer">
            {/* Hero Header */}
            <header className="text-center mb-16">
                <div className="inline-block mb-6 px-4 py-1.5 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 shadow-sm">
                    <span className="text-xs md:text-sm font-semibold tracking-wide uppercase bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        Engineering Comparison 2026
                    </span>
                </div>
                <h1 className="text-4xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight flex flex-col items-center tracking-tighter md:tracking-tight">
                    <div className="flex items-center justify-center gap-2 md:gap-6">
                        <span style={{ color: colors.electrical }}>Electrical</span>
                        <span className="text-slate-200 text-xl md:text-5xl">vs</span>
                        <span style={{ color: colors.computer }}>Computer</span>
                    </div>
                    <span className="text-slate-200 text-2xl md:text-8xl">Engineering</span>
                </h1>
                <p className="text-base md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
                    A comprehensive, data-driven analysis to help you choose the right engineering path.
                    Compare career prospects, technical focus areas, and industry demand.
                </p>
            </header>

            {/* RADAR CHART SECTION */}
            <section className="mb-16 gpu-layer">
                <div className="bg-slate-900/50 backdrop-blur-xl rounded-3xl p-6 md:p-12 border border-white/10 shadow-2xl">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-1.5 h-8 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full"></div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2 stabilize">Qualitative Dimensions</h2>
                            <p className="text-slate-400 text-sm md:text-base leading-relaxed">Comparing key qualitative attributes across both engineering disciplines</p>
                        </div>
                    </div>

                    {/* THE ACTUAL RADAR CHART */}
                    <div className="w-full bg-slate-900/40 rounded-2xl p-4 md:p-8 border border-white/10" style={{ height: '450px', minHeight: '450px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart
                                data={radarData}
                                cx="50%"
                                cy="50%"
                                outerRadius={isMobile ? "60%" : "80%"}
                                margin={isMobile ? { top: 20, right: 45, bottom: 20, left: 45 } : { top: 20, right: 30, bottom: 20, left: 30 }}
                            >
                                <PolarGrid stroke="#ffffff30" />
                                <PolarAngleAxis
                                    dataKey="dimension"
                                    tick={{ fill: '#e2e8f0', fontSize: isMobile ? 11 : 12, fontWeight: 600 }}
                                />
                                <PolarRadiusAxis
                                    angle={30}
                                    domain={[0, 100]}
                                    tick={false}
                                    axisLine={false}
                                />
                                <Radar
                                    name="Electrical Engineering"
                                    dataKey="electrical"
                                    stroke={colors.electrical}
                                    fill={colors.electrical}
                                    fillOpacity={0.4}
                                    strokeWidth={3}
                                />
                                <Radar
                                    name="Computer Engineering"
                                    dataKey="computer"
                                    stroke={colors.computer}
                                    fill={colors.computer}
                                    fillOpacity={0.4}
                                    strokeWidth={3}
                                />
                                <Legend
                                    wrapperStyle={{ paddingTop: '50px' }}
                                    iconType="circle"
                                    iconSize={10}
                                    formatter={(value, entry) => {
                                        const color = entry.dataKey === 'electrical' ? colors.electrical : colors.computer;
                                        return <span style={{ color: color, fontSize: '14px', fontWeight: 700, marginLeft: '4px' }}>{value}</span>;
                                    }}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'rgba(15, 23, 42, 0.98)',
                                        border: '1px solid rgba(255,255,255,0.3)',
                                        borderRadius: '16px',
                                        backdropFilter: 'blur(12px)',
                                        padding: '16px',
                                        boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
                                    }}
                                    labelStyle={{ color: '#f1f5f9', fontWeight: 700, marginBottom: '12px', fontSize: '15px' }}
                                    formatter={(value, name) => {
                                        const color = name === 'Electrical Engineering' ? colors.electrical : colors.computer;
                                        return [<span style={{ color: color, fontWeight: 600 }}>{value}</span>, name];
                                    }}
                                    itemStyle={{ fontSize: '14px' }}
                                    wrapperStyle={{ zIndex: 1000, pointerEvents: 'none' }}
                                    position={isMobile ? { x: 10, y: 0 } : undefined}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </section>

            {/* BAR CHART SECTION */}
            <section className="mb-16 gpu-layer">
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-12 border border-white/10 shadow-2xl">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-1.5 h-8 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full"></div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2 stabilize">Quantitative Benchmarks</h2>
                            <p className="text-slate-400 text-sm md:text-base leading-relaxed">Hard data points comparing measurable metrics between both fields</p>
                        </div>
                    </div>

                    {/* THE ACTUAL BAR CHART */}
                    <div className="w-full bg-slate-900/40 rounded-2xl p-4 md:p-8 border border-white/10" style={{ height: '400px', minHeight: '400px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={benchmarkData}
                                layout="vertical"
                                margin={{ left: 10, right: 40, top: 20, bottom: 20 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff15" />
                                <XAxis
                                    type="number"
                                    tick={{ fill: '#e2e8f0', fontSize: 12, fontWeight: 600 }}
                                    stroke="#ffffff40"
                                />
                                <YAxis
                                    type="category"
                                    dataKey="metric"
                                    width={160}
                                    tick={{ fill: '#f1f5f9', fontSize: 12, fontWeight: 500, textAnchor: 'start' }}
                                    dx={-150}
                                    stroke="#ffffff20"
                                />
                                <Tooltip
                                    position={isMobile ? { x: 10, y: 0 } : undefined}
                                    allowEscapeViewBox={true}
                                    wrapperStyle={{ zIndex: 100 }}
                                    contentStyle={{
                                        backgroundColor: 'rgba(15, 23, 42, 0.98)',
                                        border: '1px solid rgba(255,255,255,0.3)',
                                        borderRadius: '16px',
                                        backdropFilter: 'blur(12px)',
                                        padding: isMobile ? '12px' : '16px',
                                        boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
                                    }}
                                    labelStyle={{ color: '#f1f5f9', fontWeight: 700, marginBottom: isMobile ? '8px' : '12px', fontSize: isMobile ? '13px' : '15px' }}
                                    formatter={(value, name) => {
                                        const color = name === 'Electrical Engineering' ? colors.electrical : colors.computer;
                                        return [<span style={{ color: color, fontWeight: 600 }}>{value}</span>, name];
                                    }}
                                    itemStyle={{ fontSize: isMobile ? '12px' : '14px' }}
                                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                />
                                <Legend
                                    wrapperStyle={{ paddingTop: '40px' }}
                                    iconType="circle"
                                    iconSize={10}
                                    formatter={(value, entry) => {
                                        const color = entry.dataKey === 'electrical' ? colors.electrical : colors.computer;
                                        return <span style={{ color: color, fontSize: '14px', fontWeight: 700, marginLeft: '4px' }}>{value}</span>;
                                    }}
                                />
                                <Bar
                                    dataKey="electrical"
                                    fill={colors.electrical}
                                    name="Electrical Engineering"
                                    radius={[0, 10, 10, 0]}
                                    isAnimationActive={false}
                                />
                                <Bar
                                    dataKey="computer"
                                    fill={colors.computer}
                                    name="Computer Engineering"
                                    radius={[0, 10, 10, 0]}
                                    isAnimationActive={false}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </section>

            {/* Feature Grid Comparison */}
            <section className="mb-16 gpu-layer">
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-12 border border-white/10 shadow-2xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-1.5 h-8 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full"></div>
                        <h2 className="text-xl md:text-3xl font-bold tracking-tight">Feature Matrix</h2>
                    </div>
                    <p className="text-slate-400 mb-10 text-sm md:text-base leading-relaxed">Side-by-side comparison of core competencies</p>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b-2 border-white/20">
                                    <th className="text-left py-5 px-6 text-slate-200 font-bold text-lg">Core Competency</th>
                                    <th className="text-center py-5 px-6">
                                        <div className="flex flex-col items-center gap-2">
                                            <Zap className="w-6 h-6" style={{ color: colors.electrical }} />
                                            <span className="text-base font-bold" style={{ color: colors.electrical }}>Electrical</span>
                                        </div>
                                    </th>
                                    <th className="text-center py-5 px-6">
                                        <div className="flex flex-col items-center gap-2">
                                            <Cpu className="w-6 h-6" style={{ color: colors.computer }} />
                                            <span className="text-base font-bold" style={{ color: colors.computer }}>Computer</span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {features.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="border-b border-white/5 hover:bg-white/[0.04] transition-colors duration-200"
                                    >
                                        <td className="py-5 px-6 text-slate-100 font-medium">{item.feature}</td>
                                        <td className="text-center py-5 px-6">
                                            {item.electrical ? (
                                                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500/20">
                                                    <Check className="w-6 h-6" style={{ color: colors.electrical }} strokeWidth={3} />
                                                </div>
                                            ) : (
                                                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-500/10">
                                                    <X className="w-6 h-6 text-red-400/60" strokeWidth={2} />
                                                </div>
                                            )}
                                        </td>
                                        <td className="text-center py-5 px-6">
                                            {item.computer ? (
                                                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/20">
                                                    <Check className="w-6 h-6" style={{ color: colors.computer }} strokeWidth={3} />
                                                </div>
                                            ) : (
                                                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-500/10">
                                                    <X className="w-6 h-6 text-red-400/60" strokeWidth={2} />
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Use-Case Analysis */}
            <section className="mb-12 gpu-layer">
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-12 border border-white/10 shadow-2xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-1.5 h-8 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full"></div>
                        <h2 className="text-xl md:text-3xl font-bold tracking-tight">Recommendations</h2>
                    </div>
                    <p className="text-slate-400 mb-10 text-sm md:text-base leading-relaxed">Which engineering path wins for different user profiles?</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {useCases.map((useCase, index) => {
                            const winnerColor = useCase.winner === 'electrical' ? colors.electrical : colors.computer;
                            const winnerName = useCase.winner === 'electrical' ? 'Electrical Engineering' : 'Computer Engineering';

                            return (
                                <div
                                    key={index}
                                    className="bg-white/[0.03] backdrop-blur-lg rounded-2xl p-7 border border-white/10 hover:bg-white/[0.07] hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 cursor-pointer"
                                >
                                    <div
                                        className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5"
                                        style={{
                                            backgroundColor: `${winnerColor}20`,
                                            color: winnerColor
                                        }}
                                    >
                                        {useCase.icon}
                                    </div>

                                    <h3 className="text-xl font-bold mb-4 text-slate-50">
                                        {useCase.persona}
                                    </h3>

                                    <div className="mb-5 pb-5 border-b border-white/10">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-slate-400 font-medium">Winner:</span>
                                            <span
                                                className="font-bold text-base"
                                                style={{ color: winnerColor }}
                                            >
                                                {winnerName}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-sm text-slate-300 leading-relaxed">
                                        {useCase.reason}
                                    </p>

                                    <div
                                        className="mt-5 pt-5 border-t border-white/10 text-sm font-bold flex items-center gap-2"
                                        style={{ color: winnerColor }}
                                    >
                                        <Check className="w-4 h-4" />
                                        Recommended Choice
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center py-8 text-slate-400 text-sm border-t border-white/10 mt-12">
                <p className="mb-2 font-medium">Data-driven comparison dashboard • Built with React, Tailwind CSS & Recharts</p>
                <p>Updated January 2026 • All metrics are industry averages</p>
            </footer>
        </div>
    );
}
