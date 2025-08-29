export default function Logo({ size = 'md' }) {
const sz = size === 'sm' ? 'h-10 w-10' : 'h-12 w-12';
return (
<img
className={`${sz} rounded-lg object-cover`}
src="/images/cmdclogo.png"
alt="CMDC"
/>
);
}