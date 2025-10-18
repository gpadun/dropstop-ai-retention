import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const FilterPanel = () => {
  return (
    <div className="bg-card rounded-2xl shadow-card p-6 space-y-6 animate-slide-up">
      {/* Ano */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">Ano</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="2025" defaultChecked />
            <Label htmlFor="2025" className="cursor-pointer">2025</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="2024" />
            <Label htmlFor="2024" className="cursor-pointer">2024</Label>
          </div>
        </div>
      </div>

      {/* Semestre */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">Semestre</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="1sem" defaultChecked />
            <Label htmlFor="1sem" className="cursor-pointer">1º</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="2sem" />
            <Label htmlFor="2sem" className="cursor-pointer">2º</Label>
          </div>
        </div>
      </div>

      {/* Departamento */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">Departamento</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="dep1" defaultChecked />
            <Label htmlFor="dep1" className="cursor-pointer">Departamento 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="dep2" />
            <Label htmlFor="dep2" className="cursor-pointer">Departamento 2</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="dep3" />
            <Label htmlFor="dep3" className="cursor-pointer">Departamento 3</Label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
