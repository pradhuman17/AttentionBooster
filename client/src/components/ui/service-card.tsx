import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  gradientClass: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  features,
  gradientClass
}: ServiceCardProps) {
  return (
    <div className="service-card bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg h-full flex flex-col">
      <div className={cn("w-16 h-16 rounded-lg flex items-center justify-center mb-6", gradientClass)}>
        <i className={cn('bx', icon, 'text-3xl text-white')}></i>
      </div>
      <h3 className="font-poppins font-bold text-xl mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
      <ul className="space-y-2 mb-6 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <i className="bx bx-check text-green-500 text-xl mr-2"></i>
            <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <a href="#" className="inline-flex items-center text-[hsl(var(--royal-blue))] dark:text-blue-300 font-medium hover:underline">
        Learn more
        <i className="bx bx-right-arrow-alt ml-1"></i>
      </a>
    </div>
  );
}
