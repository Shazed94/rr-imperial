export async function generateMetadata({ params }) {
    const { productCategory } = params;
  
    let metadata = {
      title: "Best Cable in Bangladesh | RR Imperial",
      description: "Discover a wide range of high-quality cable products from RR Imperial, including low, medium, and high voltage cables, fire survival cables, and more. Our solutions are designed for residential, commercial, and industrial use.",
      keywords: "rr kabel products, rr cabel products, rr kabel products bd, rr cabel products bd, rr kabel products in bangladesh, rr cabel products in bangladesh"
    };
  
    if (productCategory === "house-wire") {
      metadata = {
        title: "Home Electrical Wire | Best Household Wire | RR RR Imperial",
        description: "Home Electrical Wire by RR Imperial ensures unmatched safety and durability for your household. Choose premium-quality residential electrical cables designed for reliable performance in every home installation.",
        keywords: "home electrical wire, household wire, house wire cables, best electric cables for house, rr kabel house wire in bangladesh, rr house wire in bangladesh, electric cable for house wiring, household electric cable, residential electrical cables, domestic wiring solutions, electric wire for house, best wire for house wiring, best quality electric wire for house, home wiring cable, best copper wire for house wiring, best house wire, best quality wire for house wiring, best wire for home use, copper wire for house wiring, domestic electrical cables, top wire for house electricity"
      };
    } else if (productCategory === "low-voltage-cables") {
      metadata = {
        title: "Low Voltage Cables for Home and Industry",
        description: "Low Voltage Cables by RR Imperial ensure safe and efficient power distribution for residential, commercial, and industrial applications. Explore our reliable and durable solutions designed for diverse needs.",
        keywords: "low voltage cables, low tension cable, low voltage power cable, low voltage wire, low tension wire, cable low voltage, lv cable, low voltage electrical wire, low power cable, low voltage underground cable, lv power cable, waterproof low voltage wire connectors, low voltage outdoor cable, electrical wire low voltage, low voltage electrical cable, low voltage wire near me, low voltage cable supply, low voltage cable wire"
      };
    }else if (productCategory === "medium-voltage-cables") {
        metadata = {
          title: "Medium Voltage Cables: Safe and Efficient Power Transmission",
          description: "Medium Voltage Cables from RR Imperial ensure safe and efficient power distribution for industrial and commercial applications. Explore our durable solutions and can trust our cables for safety and long-lasting performance.",
          keywords: "medium voltage cables, medium voltage power cable, mv cable, medium voltage wire, mv power cable, cable medium voltage, cable mv, mv underground cable, medium voltage cable price"
        };
      }else if (productCategory === "high-voltage-cables") {
        metadata = {
          title: "High Voltage Cables for Efficient Power Distribution",
          description: "RR Imperial provides top-quality high voltage cables for safe power distribution in industrial and commercial sectors, ensuring long-lasting performance.",
          keywords: "high voltage cables, high voltage power cable, high voltage power cable manufacturer, high voltage cable supplier, high voltage cable price list, high power cable, high tension electric cable, high tension power cable, high tension electric wire, high voltage cable price, high voltage electric wire, high voltage transmission cable"
        };
      }else if (productCategory === "fire-survival-cables") {
        metadata = {
          title: "Fire Resistant Cables | Fire Proof Cable | Fire Survival Cables",
          description: "Fire Resistant Cables from RR Imperial, manufacture fire proof cables & fire survival cables which is ensure power and safety in fire emergencies. Designed for critical systems like fire alarms, lighting, and safety circuits, these LSZH cables are perfect for public buildings, hospitals, tunnels, and more. Ensure safety with trusted fire-rated solutions.",
          keywords: "fire resistant cables, fire proof cable, fire survival cables,  heat resistant cable, heat proof cable, heat resistant wire, resistant cables, fire rated cable, heat resistant electrical wire, heat proof wire, resistance wire for heating, flame retardant cable, fire rated wire, fire retardant cable, fire resistant wire"
        };
      }else if (productCategory === "communication-cables") {
        metadata = {
          title: "Communication Cables – Reliable Solutions for Data Transmission",
          description: "Are you looking for premium communication cables in Bangladesh for industrial, residential, and commercial applications? RR Imperial’s communication cables, including UTP, FTP, coaxial, and telephone cables, are designed for reliable data and voice transmission.",
          keywords: "communication cables, communication cables price in bangladesh, types of communication cables, plc communication cable types, Data Cables, Networking Cables, Telecommunication Cables,Communication cables, Telephone cables, Data transmission cables, Coaxial cables, UTP CAT cables, FTP CAT cables, High-performance cables, Network system cables, Subscriber cables, Jumper wire cables, Drop wire cables, House wiring cables, Digital video cables, S-Video cables, Composite video cables, Industrial communication cables, Residential network cables, Commercial infrastructure cables, Outdoor communication cables, Aerial telephone cables"
        };
      }else if (productCategory === "instrumentation-cables") {
        metadata = {
          title: "Instrumentation Cables – Ideal for Residential, Commercial, and Industrial use.",
          description: "RR Imperial’s instrumentation cables designed for data, voice, and electrical equipment interconnection. Ideal for residential, commercial, and industrial use, including control panels and petroleum industries. Explore multi-pair and multi-core options today.",
          keywords: "Instrumentation cables, Instrumentation Multi-pair cables, Instrumentation Multi-core cables, Shielded instrumentation cables, Armoured instrumentation cables, Electrical interconnection cables, Data transmission cables, Voice transmission cables, Industrial cables, Petroleum industry cables, Control panel wiring, Residential infrastructure cables, Commercial infrastructure cables, Switchgear cables, Cabinet cables, Stationary appliance cables, High-performance cables, Durable cables, Reliable instrumentation solutions"
        };
      }else if (productCategory === "overhead-conductor") {
        metadata = {
          title: "Overhead Cables – Durable Solutions for Power Distribution",
          description: "High-quality durable overhead cables, including split concentric, jumper wire, and insulated copper cables. Perfect for electrical transmission, grounding, and service drop in high-rise buildings, street lighting, and utility networks.",
          keywords: "Overhead cables, Split concentric cables, Water blocked concentric cables, Jumper wire, Medium hard drawn copper conductor, XLPE insulated copper conductor, PVC insulated cables, Electrical transmission cables, Distribution cables, Low voltage service cables, High rise building cables, Street lighting cables, Aerial service cables, Grounding conductor cables, Electric distribution lines, Insulated copper cables, Distribution network operator cables, Sub-main distribution cables, Free draining soil installation cables, Durable utility cables"
        };
      }
    
  
    return metadata;
  }

const layout = ({ children }) => {
  return (
    <>{ children }</>
  )
}

export default layout