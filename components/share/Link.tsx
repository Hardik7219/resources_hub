import React from "react";

interface Card{
    title:string,
    des:string,
    cato:string[],
    link:string
}
function Link({title,des,cato,link}:Card) {
    return (
        <div className="h-auto w-full rounded-xl p-4 border border-white/10 bg-white/3 hover:border-indigo-500/40 hover:bg-white/5 transition-colors flex flex-col gap-3">
            <div>
                <label className="text-base font-semibold text-zinc-100">{title}</label>
            </div>
            <div>
                <label className="text-sm text-zinc-400 leading-relaxed">{des}</label>
            </div>
            <div className="flex flex-wrap gap-1.5">
                {!cato ? "" :cato.map((i)=>(
                <label className="text-xs rounded-full px-2 py-0.5 border border-white/10 text-zinc-400" key={i}>{i}</label>
                ))}
            </div>
            <div>
                <a target="_blank" href={link} className="text-sm text-indigo-400 hover:text-indigo-300">{title}</a>
            </div>
        </div>
    );
}

export default Link;
