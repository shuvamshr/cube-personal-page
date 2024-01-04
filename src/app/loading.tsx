import Image from "next/image";

export default function Loading() {
  return (
    <div className="w-full h-full flex justify-center items-center z-50">
      <Image
        src="/loading.svg"
        width={120}
        height={120}
        alt="Loading Icon"
        className="animate-spin"
      />
    </div>
  );
}
