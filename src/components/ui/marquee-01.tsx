import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee-01-utils/marquee";

const reviews = [
  {
    name: "Marcus Reynolds",
    username: "VP of Engineering, Series B Fintech",
    body: "“Before Northline, we spent weeks reading resumes. With Skillr verification, our first two hires were top scorers on their assessment and delivered from day one.”",
    profile: "assets/images/avatar_marcus.jpg",
    tag: "Verified Hire"
  },
  {
    name: "Amara Okafor",
    username: "Staff Backend Engineer, Lagos",
    body: "“Taking one Skillr assessment and receiving three great international offers saved me months of repetitive take-home challenges.”",
    profile: "assets/images/avatar_amara.jpg",
    tag: "Placed in 72h"
  },
  {
    name: "Kofi Mensah",
    username: "Head of AI, Accra",
    body: "“Northline represented me with complete transparency. They understand senior African engineering talent and advocate for true market rates.”",
    profile: "assets/images/avatar_kofi.jpg",
    tag: "Top Engineer"
  },
  {
    name: "Folake Adebayo",
    username: "CTO, Enterprise Payments Platform",
    body: "“The candidate score reports are genuinely useful. We skipped two rounds of technical interviews because Skillr had already tested real skills.”",
    profile: "assets/images/avatar_folake.jpg",
    tag: "Hired 4 Engineers"
  },
  {
    name: "David Ndlovu",
    username: "Cloud Architect, Cape Town",
    body: "“The proctored assessment was straightforward and fair. It let me show real distributed systems architecture instead of a whiteboard riddle.”",
    profile: "assets/images/avatar_david.jpg",
    tag: "Verified Talent"
  },
  {
    name: "Zainab Al-Hassan",
    username: "Lead Product Designer, Nairobi",
    body: "“Northline connected me to a high-growth US team within 4 days. The process was fast, respectful, and focused purely on output.”",
    profile: "assets/images/avatar_zainab.jpg",
    tag: "Placed in 4 Days"
  },
  {
    name: "Chidi Okonkwo",
    username: "Engineering Director, AI Infrastructure Startup",
    body: "“Every engineer we interviewed through Northline was exceptionally sharp, communicative, and ready to ship on day one.”",
    profile: "assets/images/avatar_chidi.jpg",
    tag: "100% Retention"
  }
];

const firstRow = reviews.slice(0, 4);
const secondRow = reviews.slice(3);

const ReviewCard = ({
  profile,
  name,
  username,
  body,
  tag
}: {
  profile: string;
  name: string;
  username: string;
  body: string;
  tag?: string;
}) => {
  return (
    <Card className="relative h-full w-[330px] shrink-0 cursor-pointer overflow-hidden border border-[#E7EAED] bg-white hover:border-[#172B36] hover:shadow-lg transition-all duration-300 p-5 rounded-2xl mx-2 flex flex-col justify-between select-none">
      <CardContent className="p-0 flex flex-col gap-3">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-3">
            <img
              className="w-11 h-11 rounded-full object-cover border border-[#172B36]/15 shrink-0"
              width="44"
              height="44"
              alt={name}
              src={profile}
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="flex flex-col text-left">
              <p className="text-sm font-bold text-[#172B36] leading-tight">{name}</p>
              <p className="text-xs font-medium text-[#45657A] leading-tight mt-0.5">
                {username}
              </p>
            </div>
          </div>
          {tag && (
            <span className="text-[11px] font-semibold bg-[#FFC306] text-[#172B36] px-2.5 py-0.5 rounded-full whitespace-nowrap">
              {tag}
            </span>
          )}
        </div>
        <p className="text-xs text-[#172B36] leading-relaxed text-left line-clamp-3 font-normal">{body}</p>
        <div className="text-[#FFC306] text-xs font-bold text-left tracking-wider">
          ★★★★★
        </div>
      </CardContent>
    </Card>
  );
};

export default function TestimonialMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-4">
      <Marquee pauseOnHover className="[--duration:35s] py-2">
        {firstRow.map((review, idx) => (
          <ReviewCard key={`row1-${review.name}-${idx}`} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:35s] py-2">
        {secondRow.map((review, idx) => (
          <ReviewCard key={`row2-${review.name}-${idx}`} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F1F5F4] to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F1F5F4] to-transparent z-10"></div>
    </div>
  );
}

export { TestimonialMarquee as TestimonialMarqueeDemo };
