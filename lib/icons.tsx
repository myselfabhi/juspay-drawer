import React from "react";
import {
  Home,
  Package,
  Building,
  Users,
  Book,
  HelpCircle,
  Lightbulb,
  Leaf,
  TrendingUp,
  Mail,
  Code,
  Cloud,
  Heart,
  DollarSign,
  ShoppingBag,
  Info,
  UserCheck,
  Briefcase,
  FileText,
  FileEdit,
  CheckCircle,
  FlaskConical,
  Shield,
  Settings,
  BarChart3,
  GraduationCap,
} from "lucide-react";

/**
 * Icon component mapper - converts icon string names to Lucide React components
 */
export function getIcon(iconName: string): React.ReactNode {
  const iconClass = "h-5 w-5 text-gray-700 stroke-[1.5]";

  const icons: Record<string, React.ReactNode> = {
    home: <Home className={iconClass} />,
    box: <Package className={iconClass} />,
    building: <Building className={iconClass} />,
    users: <Users className={iconClass} />,
    book: <Book className={iconClass} />,
    help: <HelpCircle className={iconClass} />,
    lightbulb: <Lightbulb className={iconClass} />,
    leaf: <Leaf className={iconClass} />,
    chart: <TrendingUp className={iconClass} />,
    envelope: <Mail className={iconClass} />,
    code: <Code className={iconClass} />,
    cloud: <Cloud className={iconClass} />,
    medical: <Heart className={iconClass} />,
    finance: <DollarSign className={iconClass} />,
    retail: <ShoppingBag className={iconClass} />,
    info: <Info className={iconClass} />,
    leadership: <UserCheck className={iconClass} />,
    careers: <Briefcase className={iconClass} />,
    docs: <FileText className={iconClass} />,
    blog: <FileEdit className={iconClass} />,
    "case-study": <CheckCircle className={iconClass} />,
    "help-center": <HelpCircle className={iconClass} />,
    contact: <Mail className={iconClass} />,
    status: <CheckCircle className={iconClass} />,
    lab: <FlaskConical className={iconClass} />,
    innovation: <Lightbulb className={iconClass} />,
    commitment: <Shield className={iconClass} />,
    green: <Leaf className={iconClass} />,
    reports: <FileText className={iconClass} />,
    investor: <TrendingUp className={iconClass} />,
    settings: <Settings className={iconClass} />,
    "bar-chart": <BarChart3 className={iconClass} />,
    cybersecurity: <Shield className={iconClass} />,
    "graduation-cap": <GraduationCap className={iconClass} />,
  };

  return icons[iconName] || null;
}
