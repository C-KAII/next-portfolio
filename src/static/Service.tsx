import { ServiceData } from "@/types/types.d";
import Image from "next/image";

function Service(serviceData: ServiceData) {
  return (
    <div className="flex min-h-full flex-col desktop:w-1/3 m-4 mobile:w-3/4 p-8 rounded-md transition-colors hover:bg-slate-700">
      <div className="relative w-2/3 h-auto self-center p-6">
        <Image
          src={serviceData.img}
          alt={serviceData.alt}
          width={0}
          height={0}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <p className="text-xl font-bold">
        {serviceData.hl}
      </p>
      <p className="mt-3 text-lg">
        {serviceData.desc}
      </p>
    </div>
  );
}

export default Service;