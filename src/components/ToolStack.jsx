const tools = [
  { name: "Microsoft Entra", src: "/tools/entra.svg" },
  { name: "Okta", src: "/tools/okta.svg" },
  { name: "CyberArk", src: "/tools/cyberark.svg" },
  { name: "HashiCorp", src: "/tools/hashicorp.svg" },
  { name: "AWS IAM", src: "/tools/aws.svg" },
  { name: "Azure", src: "/tools/azure.svg" },
  { name: "Ping", src: "/tools/ping.svg" },
  { name: "SailPoint", src: "/tools/sailpoint.svg" },
];

export default function ToolStack() {
  return (
    <section className="mt-24 border-t border-slate-200 pt-12">
      <p className="text-sm text-slate-500 mb-6">
        Experience across leading identity platforms
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-6 items-center">
        {tools.map(tool => (
          <img
            key={tool.name}
            src={tool.src}
            alt={tool.name}
            className="h-8 mx-auto opacity-70"
          />
        ))}
      </div>
    </section>
  );
}
