import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel
} from "../components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
import { motion } from "framer-motion";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "(+91) 9970817628" },
  { icon: <FaEnvelope />, title: "E-mail", description: "chaudharis7262@gmail.com" },
  { icon: <FaMapMarkedAlt />, title: "Address", description: "Siddhi Vinayak Nagar, Dharangaon, Jalgaon" }
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4, ease: "easeIn" } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          
          {/* Form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              action="https://formsubmit.co/abd7023a6d97009d0a839bb200f80a34"
              method="POST"
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              {/* Disable captcha */}
              <input type="hidden" name="_captcha" value="false" />
              {/* Redirect URL after submit */}
              <input type="hidden" name="_next" value="https://portfolio-puce-pi-98.vercel.app/." />

              <h3 className="text-4xl text-accent">Let's Work Together</h3>
              <p className="text-white/60">
                I'd love to hear about your project. Please fill in the form.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstName" required placeholder="First Name" />
                <Input type="text" name="lastName" required placeholder="Last Name" />
                <Input type="email" name="email" required placeholder="E-mail address" />
                <Input type="tel" name="phone" required placeholder="Contact No" />
              </div>

              <Select name="service" required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Service</SelectLabel>
                    <SelectItem value="dev">Web Development</SelectItem>
                    <SelectItem value="fullstack">MERN Stack</SelectItem>
                    <SelectItem value="api">RESTful API</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                name="message"
                required
              />

              <Button type="submit" className="max-w-40 text-sm">
                Send Message
              </Button>
            </form>
          </div>

          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:h-[72px] xl:w-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[30px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
