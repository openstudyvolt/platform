<?php

use App\Enums\BadgeRarity;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('badges', static function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description');
            $table->string('icon')->nullable(); // Icon file path or name
            $table->string('color')->default('#3B82F6'); // Badge color
            $table->string('rarity')->default(BadgeRarity::COMMON->value);
            $table->json('requirements'); // Conditions to earn the badge
            $table->integer('points_reward')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();

            $table->index('slug');
            $table->index('rarity');
            $table->index('is_active');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('badges');
    }
};
